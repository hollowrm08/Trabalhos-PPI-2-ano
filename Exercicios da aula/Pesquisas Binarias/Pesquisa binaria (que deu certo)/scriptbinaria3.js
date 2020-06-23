function achar(){		
	vetor = [2, 4, 5, 9, 13, 14, 15, 20, 21, 23, 25, 26, 30, 40, 45, 51, 60]

	fim =  parseInt(vetor.length) - 1
	// posicao = 0
	// contador = 0
	// inicio = 0
	// achado = false
	// stop = false
	// metade = parseInt(vetor.length)/2

	meio = 0
	inicio = 0

	//escape = false

	let procurado = parseInt(prompt("Insira um número que deseja procurar"))
	let limite = parseInt(prompt("Insira um limite para a procura"))

	

	//alert("metade é: " + metade)
	alert("Número a procurar: " + procurado)

	posicao = -1
	for(contador = 0;contador<limite;contador++){ 

		//alert("Entrei")
		let meio = parseInt(((fim - inicio) / 2 ) + inicio)

		if(procurado==vetor[meio]){
			posicao = meio
			stop = true
			break
		}else{
			if(vetor[meio] < procurado){
				inicio = meio
			}
			else{
				fim = meio
			}
		}




		// if(contador == 20){stop = true}
		// contador ++;

		// if((achado == true)||(stop == true)){break}

		if(posicao != -1){contador = limite}

	}

	if(posicao == -1){
		alert("Não encontrei o número")
	}else{
		alert("achei o numero na posicao: " + posicao)
	}


}