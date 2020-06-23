document.getElementById("botaoCpf").addEventListener("click",validarCpf);
document.getElementById("botaoFiltrar").addEventListener("click", filtrarString);


function validarCpf(){
	const cpf = prompt("Informe seu CPF")

	let vetorcpf    = []
	const auxiliar  = [11, 10, 9, 8, 7, 6 ,5, 4, 3, 2]
	let acumulador  = 0
	let acumulador2 = 0

	//Primeira Parte

	for(x=0;x<9;x++){vetorcpf.push( parseInt(cpf[x]) )}

	for(x=0;x<9;x++){acumulador += (vetorcpf[x] * auxiliar[x+1])}

	let verificadorUm = 11 - (acumulador % 11)

	if(verificadorUm >=10){verificadorUm = 0}

	let parcial = verificacao1(verificadorUm)

	if(cpf[9] != "-"){
		alert("Seu CPF é inválido")
	}

	else if(parcial == false){
		alert("Seu CPF é inválido")
	}else{

		 //Segunda Parte

		vetorcpf.push(verificadorUm)

		for(x=0;x<10;x++){ acumulador2 += (vetorcpf[x] * auxiliar[x]) }

		let verificadorDois = 11 - (acumulador2 % 11)

		if(verificadorDois >=10){verificadorDois = 0} 

		let parcial2 = verificacao2(verificadorDois)


		if(parcial2 == false){
		    alert("Seu CPF é inválido")
		}
		else{
		    alert("Seu CPF é válido")
		}

	}

			// Funções

	function verificacao1(veriUm){
	  if (veriUm == cpf[10]){return true}
		else{return false}
	}

	function verificacao2(veriDois){
		if(veriDois == cpf[11]){return true}
		else{return false}
	}
		
}

function filtrarString(){
	alert("Entrei na 2");

	// frase = prompt("Insira uma frase:\n\nO programa vai: \n >Eliminar espaços duplos\n >Eliminar acentos\n >Eliminar espaços a direita e esquerda")

	// // primeiraEtapa = /^([A-Z]+)/

	// // var arrayFinal = primeiraEtapa.exec(frase)
	// // 
	// vari = frase.split()

	// alert(vari)

}
