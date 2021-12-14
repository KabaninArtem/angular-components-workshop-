import { Component, ContentChild, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Pure } from '../pure';

function limit(value: number, max: number): number {
  return Math.max(Math.min(value || 0, max), 0);
}

@Component({
  selector: 'combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
})
export class ComboboxComponent {
  @Input() items: readonly string[] = [];

  @ContentChild(NgControl) private readonly control: NgControl;

  @HostListener('keydown.arrowDown.prevent', ['1'])
  @HostListener('keydown.arrowUp.prevent', ['-1'])
  onArrow(step: number): void {
    this.index = this.open
      ? limit(this.climbedIndex + step, this.filteredItems.length - 1)
      : 0;
  }

  @HostListener('keydown.esc')
  @HostListener('focusout')
  close() {
    this.index = NaN;
  }

  @HostListener('input')
  onInput() {
    this.index = this.climbedIndex;
  }

  private index = NaN;

  get open(): boolean {
    return !isNaN(this.index);
  }

  get filteredItems(): readonly string[] {
    return this.filter(this.items, this.value);
  }

  toggle() {
    this.index = this.open ? NaN : 0;
  }

  isActive(index: number): boolean {
    return index === this.climbedIndex;
  }

  onMouseEnter(index: number): void {
    this.index = index;
  }

  onClick(item: string) {
    this.selectItem(item);
  }

  private get climbedIndex(): number {
    return limit(this.index, this.filteredItems.length - 1);
  }

  private get value(): string {
    return String(this.control.value);
  }

  private selectItem(item: string) {
    this.control.control.setValue(item);
    this.close();
  }

  @Pure
  private filter(items: readonly string[], value: string): string[] {
    return items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
  }
}
