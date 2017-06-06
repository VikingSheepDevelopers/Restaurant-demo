export class Init{
	load(){
		if(localStorage.getItem('ingredients')===null || localStorage.getItem('ingredients')===undefined){
			var ingredients=[
			{id:1,name: "tomate",price_x_kg:4.00, existence: 50},
		    {id:2,name: "cebolla",price_x_kg:3.00, existence: 60},
		    {id:3,name: "carne",price_x_kg:8.00, existence: 90},
		    {id:4,name: "pollo",price_x_kg:10.00, existence: 30}
			];
			localStorage.setItem('ingredients',JSON.stringify(ingredients));
		}else{
			console.log("Ingredientes cargados");
		}
	}
}