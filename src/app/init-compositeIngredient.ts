export class Init{
	
	load(){
		if(localStorage.getItem('compositeIngredients')===null || localStorage.getItem('compositeIngredients')===undefined){
			var compositeIngredient=[
				{id:1,name: "salsa para pasta",ingredients:localStorage.getItem('ingredients'), category_id: 1}
			];
			localStorage.setItem('compositeIngredients',JSON.stringify(compositeIngredient));
		}else{
			console.log("Ingredientes Compuestos cargados");
		}
	}
}