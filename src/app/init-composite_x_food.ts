export class Init{
	
	load(){
		if(localStorage.getItem('composite_x_foods')===null || localStorage.getItem('composite_x_foods')===undefined){
			var composite_x_foods=[
				{	
					id:1,
					composite_id:1,
					gramo:20, 
				}
			];
			localStorage.setItem('composite_x_foods',JSON.stringify(composite_x_foods));
		}else{
			console.log("composite_x_foods cargados");
		}
	}
}