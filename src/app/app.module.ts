import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { Trial1Component } from './trial1/trial1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    ReactiveComponent,
    Trial1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
