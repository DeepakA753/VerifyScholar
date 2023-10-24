import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstitutionLoginComponent } from './institution-login/institution-login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ApplyComponent } from './apply/apply.component';
import { CentralComponent } from './central/central.component';
import { AndhrapradeshComponent } from './andhrapradesh/andhrapradesh.component';
import { NotificationComponent } from './notification/notification.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FeaturesComponent,
    ContactComponent,
    ScholarshipsComponent,
    LoginComponent,
    StudentLoginComponent,
    InstitutionLoginComponent,
    LogoutComponent,
    ApplyComponent,
    CentralComponent,
    AndhrapradeshComponent,
    NotificationComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
