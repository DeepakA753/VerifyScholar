import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstitutionLoginComponent } from './institution-login/institution-login.component';
import { LogoutComponent } from './logout/logout.component';
import { ApplyComponent } from './apply/apply.component';
import { RouteGaurdService } from './route-gaurd.service';
import { CentralComponent } from './central/central.component';
import { AndhrapradeshComponent } from './andhrapradesh/andhrapradesh.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'studentLogin', component:StudentLoginComponent},
  { path: 'institutionLogin', component: InstitutionLoginComponent},
  { path: 'central', component:CentralComponent},
  { path: 'andhrapradhesh', component:AndhrapradeshComponent},
  { path: 'notification', component:NotificationComponent ,canActivate:[RouteGaurdService]},
  { path: 'apply', component:ApplyComponent ,canActivate:[RouteGaurdService]},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
