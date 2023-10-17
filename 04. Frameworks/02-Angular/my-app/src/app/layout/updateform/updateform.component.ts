import { Component, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/model/MemberEntity';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss']
})
export class UpdateformComponent implements OnInit {
  editedUser: MemberEntity;

  constructor(private sharedService: SharedService) {
    this.editedUser = {
      id: '',
      login: '',
      avatar_url: ''
    }
  }

  ngOnInit() {
    this.editedUser = this.sharedService.getEditedMember();
  }

  updateUser() {
    this.sharedService.setEditedMember(this.editedUser);
  }
}

