export class Food{
	constructor(
		public id:number,
		public name:string,
		public ingredient_x_composite:Array<any>,
		public composite_x_food:Array<any>,  
		public category_id:number,
		public price_f:number,
		public price_s:number,
		public img_name:string,
		public descrip:string
	){}
}