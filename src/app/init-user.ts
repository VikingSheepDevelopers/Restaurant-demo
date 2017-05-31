export class Init{
	load(){
		if(localStorage.getItem('users')===null || localStorage.getItem('users')===undefined){
			var users=[
			{id:1,name: "Peter",lastname:"Griffin", dni: '855656',email:"peter@gmail.com",phone:"04215414",bithday:"20-03-1990",address:"Quahock",role:"mesero",username:"petterFat"},
		    {id:2,name: "Bryan",lastname:"Griffin", dni: '45465',email:"bryan@gmail.com",phone:"0121545",bithday:"20-03-1990",address:"Quahock",role:"cheft",username:"sexydog"},
		    {id:3,name: "Stui",lastname:"Griffin", dni: '5544554',email:"stui@gmail.com",phone:"054854",bithday:"20-03-1990",address:"Quahock",role:"gerente",username:"theevilbabygay"},
		    {id:4,name: "Lois",lastname:"Griffin", dni: '5545454',email:"lois@gmail.com",phone:"017747887",bithday:"20-03-1990",address:"Quahock",role:"recepcionista",username:"hotredhead"}
			];
			localStorage.setItem('users',JSON.stringify(users));
		}else{
			console.log("usuarios cargados");
		}
	}
}