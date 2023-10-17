import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-privatemenu',
  templateUrl: './privatemenu.component.html',
  styleUrls: ['./privatemenu.component.scss']
})
export class PrivatemenuComponent {

  constructor(public sharedService: SharedService, public authService: AuthService){

  }

  logout() {
    this.authService.logout();
  }
}
