import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceService } from './Services/service.service';
import{HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
