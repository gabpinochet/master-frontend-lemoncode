import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    public sharedService: SharedService
  ) {
    
  }

  ngOnInit(): void {
    
  }

  auth(){
    if (this.authService.login(this.sharedService.loginMember.username, this.sharedService.loginMember.password)) {
      this.sharedService.loginMember.logged = true;
      this.router.navigate(['/dashboard']);
    } else {
      console.log('No se ha iniciado sesion');
    }
  }
}
