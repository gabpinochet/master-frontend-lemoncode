import { Component, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/model/MemberEntity';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit{
  members: MemberEntity[];

  constructor( private sharedService: SharedService, private router: Router ) {
    this.members = [];
  }

  ngOnInit(): void {
    this.fetchMembers();
  }

  fetchMembers() {
    this.sharedService.getMembers()
    .subscribe((json) => this.members = json);
  }

  remove(member: MemberEntity) {
    this.sharedService.removeMember( member )
    .then(() => {
      this.sharedService.members = this.sharedService.members.filter((user) => user !== member);
      this.members = this.sharedService.members;
    }
  );
  }

  edit(member: MemberEntity) {
    this.sharedService.editMember( member )
    .then(() => {this.sharedService.setEditedMember(member);})
    .then(() => {this.router.navigate(['/details']);})
  }

}
