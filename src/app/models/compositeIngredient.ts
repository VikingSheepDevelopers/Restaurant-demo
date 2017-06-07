export class CompositeIngredient{
	constructor(
		public id:number,
		public name:string,
		public ingredients:Array<any>, 
		public category_id:number
	){}
}