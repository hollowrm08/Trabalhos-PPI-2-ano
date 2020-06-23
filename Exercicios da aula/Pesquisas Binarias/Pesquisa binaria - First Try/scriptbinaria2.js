function achar(){		
	vetor = [2, 4, 5, 9, 13, 14, 15, 20, 21, 23, 25, 26, 30, 40, 45, 51, 60]

	fim = 0
	tamanho = parseInt(vetor.length)
	posicao = 0
	contador = 0
	inicio = 0
	achado = false
	stop = false
	metade = parseInt(vetor.length)/2
	escape = false

	let procurado = parseInt(prompt("Insira um número que deseja procurar"))

	

	//alert("metade é: " + metade)
	alert("Número a procurar: " + procurado)

	for(;;){ 
		
		//PRIMEIRA TENTATIVA

		// let meio = parseInt(((tamanho - fim - inicio) / 2) + inicio) // conferir 
		// alert("primeira parte"+ tamanho)
		// alert("metade é: " + meio)

		// if(procurado==vetor[meio]){
		// 	posicao = vetor[meio]
		// 	stop = true
		// }else{
		// 	if(procurado < vetor[meio]){
		// 		fim = meio
		// 		inicio = inicio
		// 	}
		// 	else if(procurado > vetor[meio]){
		// 		inicio = meio
		// 		fim = fim
		// 	}
		// }

		//SEGUNDA TENTATIVA

		// let meio = (tamanho - inicio - fim) / 2

		// if(procurado==vetor[inicio+meio]){
		// 	posicao = vetor[inicio+meio]
		// 	stop = true
		// }else{
		// 	if(procurado < vetor[inicio+meio]){
		// 		fim = meio
		// 		inicio = inicio
		// 	}
		// 	else if(procurado > vetor[inicio+meio]){
		// 		inicio = meio
		// 		fim = fim
		// 	}
		// }


		// TENTATIVA EM AULA

		
		let meio = ((fim - inicio) / 2 ) + inicio

		if(procurado==vetor[meio]){
			posicao = vetor[meio]
			stop = true
		}else{
			if(vetor[meio] > procurado){
				fim = meio
			}
			else{
				inicio = meio
			}
		}




		if(contador == 20){stop = true}
		contador ++;

		if((achado == true)||(stop == true)){break}

	}

	if(achado == true){
		alert("achei o numero na posicao: " + posicao)
	}


}