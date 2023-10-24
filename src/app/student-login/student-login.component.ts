import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  username='Deepak'
  password='Deepak'
  invalidLogin=false
  constructor(private router : Router,
    private hardcodedAuthenticationService : HardcodedAuthenticationService){}

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticateStudent(this.username, this.password)){
      this.invalidLogin = false
      this.router.navigate(['home'])
    }
    else{
      this.invalidLogin = true
    }
  }
}
