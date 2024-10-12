import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DialogComponent,
    DynamicComponent,
    ParentComponent,
    ChildComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
