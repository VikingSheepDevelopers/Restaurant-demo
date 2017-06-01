import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-my-user-add',
  templateUrl: './my-user-add.component.html',
  styleUrls: ['./my-user-add.component.css'],
  providers:[UserService]
})
export class MyUserAddComponent implements OnInit {
	public title:string;
	public id:number;
	public user:User;
	public users:Array<{name:string,lastname:string,dni: string,email:string,phone:string,birthday:string,address:string,username:string,role:string}>;
  
  constructor(private _userService:UserService,private _route:ActivatedRoute,private _router:Router) {
    this.users=this._userService.getUser();
   }

  ngOnInit() {
    this.id=this.users.length+1;
  	this.user=new User(this.id,"","","","","","","","","");
  	console.log(this.user);
  }

  public onSubmit(){
    this._userService.addUser(this.user);
    this._router.navigate(['/listUsers']);
  }

}

