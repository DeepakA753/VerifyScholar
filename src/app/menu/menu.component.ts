import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService){}
  ngOnInit(){
    
  }
}
