import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-my-user-edit',
  templateUrl: './my-user-edit.component.html',
  styleUrls: ['./my-user-edit.component.css'],
  providers:[UserService]
})
export class MyUserEditComponent implements OnInit {
	public title:string;
	public id:number;
 	public user:User;
  	public users:Array<{name:string,lastname:string,dni: string,email:string,phone:string,birthday:string,address:string,username:string,role:string}>;
  
    constructor(private _userService:UserService,private _route:ActivatedRoute,private _router:Router) 
    {
    	this.users=this._userService.getUser();
    }

    ngOnInit() 
	{
	  	this.getCustomer();
	  	console.log(this.user);
	}

	getCustomer()
	{
		this._route.params.forEach((params:Params)=>{
			let id=params['id'];
			this.user=this._userService.viewUser(id);
		});
	}

	public onSubmit()
	{	
	    this._userService.editUser(this.user);
	    this._router.navigate(['/listUsers']);
	}

}
