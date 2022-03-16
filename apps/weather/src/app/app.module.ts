import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './list/list.component';
import { TileComponent } from './tile/tile.component';
import { CurrentTileComponent } from './current-tile/current-tile.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListComponent, TileComponent, CurrentTileComponent, ChartComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
