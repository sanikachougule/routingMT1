import { Injectable } from '@angular/core';
import { Iuser } from '../models/users.interface';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr: Array<Iuser>=[
    {
    userName: "Samsung",
    userRole: "buyer",
    canReturn: 0,
    userId: "1"
    },
    {
      userName: "Iphone",
      userRole: "admin",
      canReturn: 0,
      userId: "2"
      },
      {
        userName: "Oppo 13",
        userRole: "buyer",
        canReturn: 0,
        userId: "3"
        }
]
  constructor(
    private _router:Router,
    private _snackbar:SnackbarService
) { }
fetchAllUsers():Array<Iuser>{
  return this.usersArr
}

addusers(user: Iuser){
 this.usersArr.push(user);
  this._router.navigate(['/users'])
  this._snackbar.openSnackBar(`The UserName is added successfully !!`)
} 

getUsersInfo(id:string){
return this.usersArr.find(prod => prod.userId === id) as Iuser
}

UpdateUsers(updatedObj: Iuser){
let getIndex= this.usersArr.findIndex(prod => prod.userId === updatedObj.userId)
this.usersArr[getIndex]= updatedObj;
this._router.navigate(['/users'])
this._snackbar.openSnackBar(`The UserName is ${updatedObj.userName} Updated successfully !!`)
}

removeProducts(id: string){
  let getIndex= this.usersArr.findIndex(user => user.userId === id)
  this.usersArr.splice(getIndex,1);
  this._router.navigate(['/users'])
  this._snackbar.openSnackBar(`The Users is ${getIndex} Removed  successfully !!`)
 }

}
