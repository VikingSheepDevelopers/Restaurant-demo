export class Init{
	
	load(){
		if(localStorage.getItem('foods')===null || localStorage.getItem('foods')===undefined){
			var foods=[
				{
					id:1,name: "pasta boloñesa",
					ingredients:[1,2],
					compositeIngredients:[1,2], 
					category_id: 1,
					price_f:9,
					price_s:17,
					img_name:"spa_parailustrar_copia.jpg",
					descrip:"una muy buena pasta a la boloñesa"
				}
			];
			localStorage.setItem('foods',JSON.stringify(foods));
		}else{
			console.log("Platillos cargados");
		}
	}
}