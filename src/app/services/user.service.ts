import {Injectable} from '@angular/core';
import {Init} from '../init-user';

@Injectable()
export class UserService extends Init{
	constructor(){
		super();
		console.log('UserService iniciado...');
		this.load();
	}

	getUser(){
		var users=JSON.parse(localStorage.getItem('users'));
		return users;
	}

	addUser(newUser){
		var users=JSON.parse(localStorage.getItem('users'));
		users.push(newUser);
		localStorage.setItem('users',JSON.stringify(users));
	}

	deleteUser(id){
		var users=JSON.parse(localStorage.getItem('users'));
		for(var user in users){
			if(users[user].id==id){
				users.splice(user,1);
			}
		}
		localStorage.setItem('users',JSON.stringify(users));
	}

	viewUser(id){
		var myuser;
		var users=JSON.parse(localStorage.getItem('users'));
		for(var user of users){
			if(user.id==id){
				myuser=user;
			}
		}
		return myuser;
	}

	editUser(changeUser){
		var users=JSON.parse(localStorage.getItem('users'));
		for(var user of users){
			if(user.id==changeUser.id){
				user.name=changeUser.name;
				user.lastname=changeUser.lastname;
				user.dni=changeUser.dni;
				user.email=changeUser.email;
				user.phone=changeUser.phone;
				user.address=changeUser.address;
				user.birthday=changeUser.birthday;
				user.username=changeUser.username;
				user.role=changeUser.role;
			}
		}
		localStorage.setItem('users',JSON.stringify(users));
	}
}