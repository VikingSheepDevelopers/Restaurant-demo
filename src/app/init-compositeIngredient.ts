export class Init{
	
	load(){
		if(localStorage.getItem('compositeIngredients')===null || localStorage.getItem('compositeIngredients')===undefined){
			var compositeIngredient=[
				{id:1,name: "salsa para pasta",ingredient_x_composite_id:[1], category_id: 1}
			];
			localStorage.setItem('compositeIngredients',JSON.stringify(compositeIngredient));
		}else{
			console.log("Ingredientes Compuestos cargados");
		}
	}
}