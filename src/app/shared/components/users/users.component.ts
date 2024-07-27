import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData !: Array<Iuser>
  constructor(
    private _usersServices: UsersService
  ) { }

  ngOnInit(): void {
    this.userData=this._usersServices.fetchAllUsers()
  }
  }


