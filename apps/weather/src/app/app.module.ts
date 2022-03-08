import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './list/list.component';
import { TileComponent } from './tile/tile.component';
import { CurrentTileComponent } from './current-tile/current-tile.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListComponent, TileComponent, CurrentTileComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
