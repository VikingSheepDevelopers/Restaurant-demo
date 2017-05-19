export class Init{
	load(){
		if(localStorage.getItem('customers')===null || localStorage.getItem('customers')===undefined){
			var customers=[
			{id:1,name: "Peter",lastname:"Griffin", dni: '855656',email:"peter@gmail.com",phone:"04215414",address:"Quahock"},
		    {id:2,name: "Bryan",lastname:"Griffin", dni: '45465',email:"bryan@gmail.com",phone:"0121545",address:"Quahock"},
		    {id:3,name: "Stui",lastname:"Griffin", dni: '5544554',email:"stui@gmail.com",phone:"054854",address:"Quahock"},
		    {id:4,name: "Lois",lastname:"Griffin", dni: '5545454',email:"lois@gmail.com",phone:"017747887",address:"Quahock"}
			];
			localStorage.setItem('customers',JSON.stringify(customers));
		}else{
			console.log("clientes cargados");
		}
	}
}