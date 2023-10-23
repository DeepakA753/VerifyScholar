import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService {

  constructor(private router : Router,
    private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticationService.isStudentUserLoggedIn()){
      return true;
    }
    else if(this.hardcodedAuthenticationService.isInstitutionLoggedIn()){
      return true;
    }
    this.router.navigate(['home'])
    return false;
  }
}
