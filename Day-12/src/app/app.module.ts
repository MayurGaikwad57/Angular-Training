import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CounterComponent } from './child/counter/counter.component';
import { ParentComponent } from './parent/parent.component';
import { SubchildComponent } from './parent/subchild/subchild.component';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CounterComponent,
    ParentComponent,
    SubchildComponent,
    DynamicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
