export class Init{
	load(){
		if(localStorage.getItem('categorys')===null || localStorage.getItem('categorys')===undefined){
			var categorys=[
			{id:1,name: "salsas"},
		    {id:2,name: "carnes"},
		    {id:3,name: "bebidas"},
			];
			localStorage.setItem('categorys',JSON.stringify(categorys));
		}else{
			console.log("Categorias cargadas");
		}
	}
}