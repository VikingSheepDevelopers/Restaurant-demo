export class Init{
	
	load(){
		if(localStorage.getItem('ingredient_x_composites')===null || localStorage.getItem('ingredient_x_composites')===undefined){
			var foods=[
				{	
					id:1,
					ingredient_id:1,
					gramo:20, 
				}
			];
			localStorage.setItem('ingredient_x_composites',JSON.stringify(foods));
		}else{
			console.log("Platillos cargados");
		}
	}
}