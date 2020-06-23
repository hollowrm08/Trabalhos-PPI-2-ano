document.getElementById("botao").addEventListener("click",funcao);

vetor = []
function funcao(){
	vetor.length = 0
	
	for(i=0;;i++){	
		a = parseInt(prompt("Digite o número de nodo ["+ i + "]\n\n >>Digite um N° < 0 para encerrar"))
		if (a<0) {break}
		vetor.push(a)
	}

	vetor.sort((a, b) =>  a-b)

	controle();
}

function controle(){
	while(true){
		b = parseInt(prompt("Qual número deseja achar dentro do vetor?\n\nVetor: " +vetor+ "\n\n>>Digite um N° < 0 para encerrar o programa"))

		if(b<0){
			alert("Fim da execução")
			break
			}

		resposta = searching(b)

		alert(resposta)
	}
}

function searching(vari){
	let fim =  parseInt(vetor.length)
	let stop = fim
	let contador = 0
	let inicio = 0
	let posicao = -1
	
	for(;;){
		let meio = parseInt(((fim - inicio) / 2 ) + inicio)

		if(vari==vetor[meio]){
			posicao = meio
			stop = true
			break
		}else{
			contador++
			if(vetor[meio] < vari){inicio = meio}
			else{fim = meio}
		}


		if(contador == stop){posicao = -1; break}
	}
	if(posicao == -1){
		retorno = "O número não foi encontrado"
	}else{
		retorno = "Achei o número na posção: " +posicao 
	}
	return retorno
}