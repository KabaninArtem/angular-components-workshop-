const COEFFICIENT = 500;

export function draw(
  array: readonly [number, number][],
  index: number,
  smoothing: number
): string {
  return smoothing
    ? drawCurve(array, index, smoothing / COEFFICIENT)
    : drawLine(array[index]);
}

function drawLine(point: [number, number]): string {
  return `L ${point}`;
}

function drawCurve(
  array: readonly [number, number][],
  index: number,
  smoothing: number
): string {
  const [cpsX, cpsY] = controlPoint(
    array[index - 1],
    array[index - 2],
    array[index],
    false,
    smoothing
  );
  const [cpeX, cpeY] = controlPoint(
    array[index],
    array[index - 1],
    array[index + 1],
    true,
    smoothing
  );

  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${array[index][0]},${array[index][1]}`;
}

function controlPoint(
  current: [number, number],
  previous?: [number, number],
  next?: [number, number],
  reverse: boolean = false,
  smoothing: number = 0.2
): [number, number] {
  const p = previous || current;
  const n = next || current;
  const angle = lineAngle(p, n) + (reverse ? Math.PI : 0);
  const length = lineLength(p, n) * smoothing;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;

  return [x, y];
}

function lineAngle(a: [number, number], b: [number, number]): number {
  const x = b[0] - a[0];
  const y = b[1] - a[1];

  return Math.atan2(y, x);
}

export function lineLength(a: [number, number], b: [number, number]): number {
  const x = b[0] - a[0];
  const y = b[1] - a[1];

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
