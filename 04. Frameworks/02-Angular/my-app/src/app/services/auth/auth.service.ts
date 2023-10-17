import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public sharedService: SharedService, private router: Router) { }

  login(username: string, password: string): boolean {
    if (username == 'master@lemoncode.net' && password =='12345678') {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.sharedService.loginMember = {
      username: '',
      password: '',
      logged: false
    };
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return this.sharedService.loginMember.logged
  }

  getUsername(): string {
    return this.sharedService.loginMember.username;
  }
}
