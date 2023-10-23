import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService){

  }
  ngOnInit(){

  }
}
