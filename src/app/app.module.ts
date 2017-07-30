import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpandableGridComponent } from './src/app/expandable-grid/expandable-grid.component';
import { GridDataSourceComponent } from './expandable-grid/src/app/expandable-grid/grid-data-source/grid-data-source.component';
import { GridHeadersComponent } from './expandable-grid/src/app/expandable-grid/grid-headers/grid-headers.component';
import { GridExpandableRowComponent } from './expandable-grid/src/app/expandable-grid/grid-expandable-row/grid-expandable-row.component';
import { GridRowComponent } from './expandable-grid/src/app/expandable-grid/grid-row/grid-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandableGridComponent,
    GridDataSourceComponent,
    GridHeadersComponent,
    GridExpandableRowComponent,
    GridRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
