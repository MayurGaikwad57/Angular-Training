import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChangeDirective } from './shared/directives/change.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { TransformDirective } from './transform.directive';
import { UsdInrPipe } from './pipes/usd-inr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    ChangeDirective,
    ReversePipe,
    TransformDirective,
    UsdInrPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
