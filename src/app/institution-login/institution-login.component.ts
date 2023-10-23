import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-institution-login',
  templateUrl: './institution-login.component.html',
  styleUrls: ['./institution-login.component.css']
})
export class InstitutionLoginComponent {
  username=''
  password=''
  invalidLogin=false
  constructor(private router : Router,
    private hardcodedAuthenticationService : HardcodedAuthenticationService){}

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticateInstitution(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['home'])
    }
    else{
      this.invalidLogin = true
    }
  }
}
