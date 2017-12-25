import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AlertModule } from 'ngx-bootstrap';
import { ProjectsComponent } from './projects/projects.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
// import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule,
    routes
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
