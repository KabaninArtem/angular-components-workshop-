import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  currentTime = 0;
  paused = true;

  get icon(): string {
    return this.paused ? '\u23F5' : '\u23F8';
  }

  toggleState() {
    this.paused = !this.paused;
  }
}
