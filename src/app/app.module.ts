import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LineChartComponent } from './line-chart/line-chart.component';

import { PlayerModule } from './player/player.module';
import { ComboboxModule } from './combobox/combobox.module';

import { EventPluginsModule } from '@tinkoff/ng-event-plugins';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    EventPluginsModule,
    PlayerModule,
    ComboboxModule,
  ],
  declarations: [AppComponent, HelloComponent, LineChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
