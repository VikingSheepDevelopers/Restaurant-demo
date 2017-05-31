import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-my-user-component',
  templateUrl: './my-user-component.component.html',
  styleUrls: ['./my-user-component.component.css'],
  providers:[UserService]
})
export class MyUserComponent implements OnInit {
public title:string;
public users:User;
  constructor(private _userService:UserService) 
  { 
  	this.title="Lista de Usuarios General"
  	this.users=this._userService.getUser();
  }

  ngOnInit() {
  	
  }

  OnDelete(id){
    this._userService.deleteUser(id);
    this.users=this._userService.getUser();
  }

}
