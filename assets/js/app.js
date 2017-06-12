//Contexto de ejecución global
var sedes = {peru,mexico}

$( _ => {

	//Contexto de ejecución para jQuery

		var $img = $('.coder');
		var $select = $('select');
		var acierto=0;
		var intentos =5;
		var puntos=0;
		var $inputName = $('#name');
		var $btnComprobar = $('#comprueba');
	

		function aleatorio(arr){
				return Math.floor(Math.random()*arr.length);
		};
		
		function mostrarFoto(sede,arr){
			var index = aleatorio(arr);
			$img.attr('src',"assets/img/fotos/"+sede+"/"+arr[index].image).show();
			var coder = arr[index];
						
			return coder;
		}




		$select.on('change',function(){
			var nombreSede = $(this).val();
			var sedeSeleccionada = sedes[nombreSede];
			var coder = mostrarFoto(nombreSede,sedeSeleccionada);
		
			$btnComprobar.on('click',function(e){
				e.preventDefault();
				console.log(coder.name.toUpperCase());
				console.log($inputName.val().toUpperCase())
				intentos = intentos-1;
				if(coder.name.toUpperCase() === $inputName.val().toUpperCase()){
					acierto = 1;
					coderCorrecta = sedeSeleccionada.indexOf(coder);
					var arr = sedeSeleccionada.splice(coderCorrecta,1);
					console.log(arr);
					
					intentos = 5;
					mostrarFoto(nombreSede,arr)
					
				}			
			
		
		})	



	})

});
	
	/*function data(){

		var nombreSede = $(this).val();
		console.log(nombreSede);
		var arrCoderBySede = sedes[nombreSede];
		mostrarFoto(nombreSede,arrCoderBySede);
	}
	

	


function probar(nombre,index,arr,sede){
	console.log(nombre);
	console.log(sede)
	
	$btnComprobar.on('click',function(e){
		e.preventDefault();
		console.log(arr[index]);
	if($inputName.val().toUpperCase()===nombre){
		debugger;
		 alert('acertaste');
				contador = 0;
				$inputName.val("");
				console.log(arr.length);
				alert('acertaste');
				puntaje = puntaje +5;
				console.log(puntaje);
				$('#puntaje').text(puntaje);
				arr.splice(index,1);
				console.log(arr.length);
				index = random(arr);
				arr[index];
				setTimeout(function(){
					mostrarFoto(sede,arr);
				},1000);
			}
		})

	}				
		 		

});

			
*/