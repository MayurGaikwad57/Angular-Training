import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { comp1component} from './Comp1/comp1.component';
import { comp2component } from './Comp2/comp2.component';
import {comp3component} from './Comp3/comp3.component'
import { comp4component } from './Comp4/comp4.component';
import { comp5component } from './Comp5/comp5.component';
@NgModule({
  declarations: [
    AppComponent,
    comp1component,
    comp2component,
    comp3component,
    comp4component,
    comp5component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
