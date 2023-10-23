import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticateStudent(username : string, password : string){
    if(username=='Deepak' && password=='Deepak'){
      sessionStorage.setItem('authenticatedStudentUser', username);
      return true;
    }
    return false;
  }
  authenticateInstitution(username : string, password : string){
    if(username=='9213' && password=='PSNA'){
      sessionStorage.setItem('authenticatedInstitutionUser',username)
      return true;
    }
    return false;
  }
  isStudentUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedStudentUser');
    return !(user==null)
  }
  isInstitutionLoggedIn(){
    let user = sessionStorage.getItem('authenticatedInstitutionUser');
    return !(user==null)
  }
  logoutStudent(){
    sessionStorage.removeItem('authenticatedStudentUser');
  }
  logoutInstitution(){
    sessionStorage.removeItem('authenticatedInstitutionUser');
  }
}
