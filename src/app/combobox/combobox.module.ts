import { NgModule } from '@angular/core';
import { ComboboxComponent } from './combobox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ComboboxComponent],
  exports: [ComboboxComponent]
})
export class ComboboxModule {}
