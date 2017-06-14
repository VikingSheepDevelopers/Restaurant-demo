export class CompositeIngredient{
	constructor(
		public id:number,
		public name:string,
		public ingredient_x_composite:Array<any>, 
		public category_id:number
	){}
}