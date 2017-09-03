
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { JpDatatableComponent } from './jp-datatable/jp-datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    JpDatatableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
