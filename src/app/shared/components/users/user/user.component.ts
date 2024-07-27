import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users.interface';

import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId !: string;
  userObj !: Iuser;
  constructor(
    private _usersServices: UsersService,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this._routes.snapshot.params['userId'];
    if(this.userId){
      this.userObj= this._usersServices.getUsersInfo(this.userId)
    }

}
onRemoveuser(){
  let getConfirm= confirm('Are you sure the remove this data !!');
    if(getConfirm){
      this._usersServices.removeProducts(this.userId)
    }
}

}
