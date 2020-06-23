function achar(){		
	vetor = [2, 4, 5, 9, 13, 14, 15, 20, 21, 23, 25, 26, 30, 40, 45, 51, 60]

	achado = false
	inicio = 0
	fim = vetor.length
	posicao = 0
	contador = 0
	stop = false
	achado = false

	let procurado = parseInt(prompt("Insira um número que deseja procurar"))

	tamanho = parseInt(vetor.length)

	alert("metade é: " +tamanho)
	alert("Número a procurar: " + procurado)

	do{ 
		// metade =   
		// if(procurado == vetor[metade]){
		// 	posicao = metade
		// 	achado = true 

		// }else{
		// 	if(procurado > vetor[metade]){
		// 		inicio = metade
		// 	}else{
		// 		fim = metade
		// 	}
		// }

		metade = ((tamanho - fim - inicio) / 2) + inicio // conferir

		


		if(contador == 20){stop = true}
		contador ++;

		if((achado == true)||(stop == true)){escape = true}

	}while(escape== true)

	if(achado == true){
		alert("achei o numero na posicao: " + posicao)
	}


}