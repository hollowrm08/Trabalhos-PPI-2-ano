var linhaDeCalculo = []
var memoria = []
var resultadoM = 0

function funcao(variavel){

	let visor1 = document.getElementById("visorCalc1")	
	let visor2 = document.getElementById("visorCalc2")

	if(variavel == "√"){
		alert("Função Não Criada, Por Favor Atualize a Página")
	}

	if(parseFloat(variavel)){
		if(visor2.innerHTML == 0){
			visor2.innerHTML = ""
		}
		visor2.innerHTML += variavel
	}

	else if(variavel == "0"){
		visor2.innerHTML += variavel
	}

	else if(variavel == "."){
		visor2.innerHTML += variavel
	}
	else if(variavel=="m+"){
		memoria.push(parseFloat(visor2.innerHTML))
		alert(parseFloat(visor2.innerHTML)+" Adicionado a Memória")
	}

	else if(variavel == "m-"){
		memoria.push(-1*(parseFloat(visor2.innerHTML)))
		alert(-1*(parseFloat(visor2.innerHTML))+" Adicionado a Memória")
	}

	else if(variavel == "ms"){
		memoria.forEach(function(varLocal){resultadoM += varLocal})
	 	
	 	visor2.innerHTML = resultadoM
	 	memoria = []
	}
	else if(variavel == "mc"){
		alert("Memória Limpa")
		memoria = []
			
	}else{

		if(variavel=='ce'){
			visor2.innerHTML = "0"
		}else{

			linhaDeCalculo.push(visor2.innerHTML)

			visor1.innerHTML = linhaDeCalculo
			visor2.innerHTML = "0"

			linhaDeCalculo.push(variavel)

			if(variavel=='clear'){
				linhaDeCalculo = []
				visor1.innerHTML = "0"
				visor2.innerHTML = "0"
			}

			if(variavel == '='){

				let linhaExecucao = linhaDeCalculo.map(function(lvar){
					if (parseFloat(lvar)){return parseFloat(lvar)}else{return lvar}
				})

				do{
					if(linhaExecucao[3] == "%"){
						linhaExecucao.pop()
						linhaExecucao[2] = (linhaExecucao[0] * linhaExecucao[2]) / 100
						linhaExecucao.splice(3,1)
					}
					if(linhaExecucao[1] == "+"){
						linhaExecucao[0] += linhaExecucao[2]
						linhaExecucao.splice(1,2)
					}
					if(linhaExecucao[1]== "-"){
						linhaExecucao[0] -= linhaExecucao[2]
						linhaExecucao.splice(1,2)
					}
					if(linhaExecucao[1] == "*"){
						linhaExecucao[0] = linhaExecucao[0] * linhaExecucao[2] 
						linhaExecucao.splice(1,2)
					}
					if(linhaExecucao[1] == "/"){
						linhaExecucao[0] = linhaExecucao[0] / linhaExecucao[2]
						linhaExecucao.splice(1,2)
					}

				}while(linhaExecucao.length!=2)

				visor1.innerHTML = "0"
				visor2.innerHTML = linhaExecucao[0]

				linhaDeCalculo = []
				linhaExecucao = []

			}
		}
	} 
}