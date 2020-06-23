const quadrantes = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]

let switcher = 0
let contador = 0
let ganhador = 0
let sinal

function funcao(var1, var2){

	switcher++
	if (switcher %2 == 0){sinal = "X"; val = 5}else{sinal = "O"; val = 3}

	if (document.getElementById(var1+var2).value == " "){
		
		document.getElementById(var1+var2).value = sinal

		quadrantes[parseInt(var1)][parseInt(var2)] = val
		
		contador++
	}

		
	for(let linha = 0; linha<3; linha++){

		let totalC  = 0
		let totalL  = 0
		let totalD1 = 0
		let totalD2 = 0

		for(let coluna = 0; coluna <3; coluna++){

			totalC  += quadrantes[linha][coluna]
			totalL  += quadrantes[coluna][linha]
			totalD1 += quadrantes[coluna][coluna]
    		totalD2  = quadrantes[0][2] + quadrantes[1][1] + quadrantes[2][0]
      			
		}

		if ((totalC == 15)  || (totalC == 9))  {ganhador = totalC}

	    if ((totalL == 15)  || (totalL == 9))  {ganhador = totalL}

	    if ((totalD1 == 15) || (totalD1 == 9)) {ganhador = totalD1}

	    if ((totalD2 == 15) || (totalD2 == 9)) {ganhador = totalD2}

	}

	
	if(ganhador == 15){
			
		alert("O Jogador 'X' Ganhou")
		restart = confirm("Deseja Reiniciar o Jogo?")

		if(restart == true){location.reload()}
	}
	else if(ganhador == 9){

		alert("O Jogador 'O' Ganhou")
		restart = confirm("Deseja Reiniciar o Jogo?")

		if(restart == true){location.reload()}
	}
	else{ganhador = 0}
	

	if(contador == 9){

		alert("Os Jogadores Empataram")
		restart = confirm("Deseja Reiniciar o Jogo?")

		if(restart == true){location.reload();}
	}
}