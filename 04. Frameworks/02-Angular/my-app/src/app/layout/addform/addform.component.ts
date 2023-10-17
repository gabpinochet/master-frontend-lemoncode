import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { MemberEntity } from 'src/app/model/MemberEntity';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent {
  newMember: MemberEntity;

  constructor(private sharedService: SharedService) {
    this.newMember = {
      id: '',
      login: '',
      avatar_url: ''
    }
  }

  add() {
    this.sharedService.addMember( this.newMember )
    .then(() => {
        this.sharedService.members.unshift(this.newMember);
        this.newMember = {
          id: '',
          login: '',
          avatar_url: ''
        }
      }
    );
  }
}