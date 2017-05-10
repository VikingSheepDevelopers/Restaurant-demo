export class Customer{
	constructor(
		public title:string,  
		public customers:Array<{name:string,lastname:string,dni:string,email:string,phone:string,address:string}>
	){}
}