import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router : Router,
    public hardcodedAuthenticationService : HardcodedAuthenticationService){}

  ngOnInit() : void{
    // this.hardcodedAuthenticationService.logoutStudent();
    let studentUser = sessionStorage.getItem("authenticatedStudentUser");
    let institutionUser = sessionStorage.getItem("authenticatedInstitutionUser");
    if(studentUser!=null){
      this.hardcodedAuthenticationService.logoutStudent();
    }
    else if(institutionUser!=null){
      this.hardcodedAuthenticationService.logoutInstitution();
    }
    this.router.navigate(['home'])
  }
}
