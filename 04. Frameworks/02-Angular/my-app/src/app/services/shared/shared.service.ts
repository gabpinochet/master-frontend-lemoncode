import { Injectable } from '@angular/core';
import { LoginEntity } from 'src/app/model/LoginEntity';
import { MemberEntity } from 'src/app/model/MemberEntity';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loginMember: LoginEntity;
  members: MemberEntity[];
  editedMember: MemberEntity;

  constructor(private http: HttpClient) {
    this.loginMember = {
      username: '',
      password: '',
      logged: false
    }

    this.members = [];

    this.editedMember = {
      id: '',
      login: '',
      avatar_url: ''
    }
  }


  getMembers(): Observable<MemberEntity[]> {
    if(this.members.length == 0) {
      return this.http.get<MemberEntity[]>(`https://api.github.com/orgs/microsoft/members`)
      .pipe( tap((members) => this.members = members) );
    } else {
      return of(this.members);
    }
  }

  setEditedMember(member:MemberEntity) {
    this.editedMember = member;
  }

  getEditedMember() {
    return this.editedMember;
  }

  

  addMember(member: MemberEntity): Promise<boolean> {
    return Promise.resolve(true);
  }

  removeMember(member: MemberEntity): Promise<boolean> {
    return Promise.resolve(true);
  }

  editMember (member: MemberEntity): Promise<boolean>{
    return Promise.resolve(true);
  }

}
