import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 userForm !: FormGroup;
 isEditMode:boolean=false;
 userId !:string
 userObj !: Iuser;
 userRole !:string;
 constructor(
    private _usersServices:UsersService,
    private _uuidService: UuidService,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createUser();
     
    this.userId= this._routes.snapshot.params['userId'];
    if(this.userId){
      this.isEditMode=true;
      this.userObj= this._usersServices.getUsersInfo(this.userId);
      this.userForm.patchValue(this.userObj);
    }else{
      this.isEditMode=false;
    }

    this.manageQueryParams();
  }
createUser(){
   this.userForm= new FormGroup({
    userName: new FormControl(null,[Validators.required]),
    userRole:new FormControl(null,[Validators.required]),
    canReturn: new FormControl(null,[Validators.required]),
   })
}

manageQueryParams(){
  this.userRole= this._routes.snapshot.queryParams['userRole'];
 
    if(this.userRole){
      if(this.userRole === 'buyer'){
        this.userForm.disable();
      }else{
        this.userForm.enable();
  
      }
    }

  
}

onUserAdd(){
   let newObj:Iuser={
    ...this.userForm.value,
    userId: this._uuidService.uuid()
   }
   console.log(newObj);
   this._usersServices.addusers(newObj)
}
onUpdateUser(){
  let updatedObj: Iuser={
    ...this.userForm.value,
    userId: this.userId
  }
  console.log(updatedObj)
  this._usersServices.UpdateUsers(updatedObj);
}
}
