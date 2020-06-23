function achar(){		
	vetor = [2, 4, 5, 9, 13, 14, 15, 20, 21, 23, 25, 26, 30, 40, 45, 51, 60]

	let fim =  parseInt(vetor.length)
	let stop = fim
	let contador = 0
	let inicio = 0

	let procurado = parseInt(prompt("Insira um número que deseja procurar"))

	alert("Número a procurar: " + procurado)

	let posicao = -1
	for(;;){ 

		let meio = parseInt(((fim - inicio) / 2 ) + inicio)

		if(procurado==vetor[meio]){
			posicao = meio
			stop = true
			break
		}else{
			contador++
			if(vetor[meio] < procurado){
				inicio = meio
			}
			else{
				fim = meio
			}
		}


		if(contador == stop){posicao = -1; break}

	}

	if(posicao == -1){
		alert("Não encontrei o número")
	}else{
		alert("achei o numero na posicao: " + posicao)
	}


}