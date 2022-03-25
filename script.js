const nome = document.getElementsByClassName("nome");
const btIniciar = document.querySelector("#botao");
const btReiniciar = document.querySelector("#reiniciar");
const vez = document.querySelector("h1")
const casas = ['p1','p2','p3','p4','p5','p6','p7','p8','p9']
let lista = document.querySelectorAll('.tabuleiro .casa')
let jogada
let elementoId
let eTarget
let posLista

vez.innerHTML='Jogo da velha'

btReiniciar.classList.add('desativaReiniciar')

btReiniciar.addEventListener('click',function(){
	 window.location.reload()	
})


btIniciar.addEventListener('click',  function(){
	btReiniciar.classList.remove('desativaReiniciar')

	jogada=0
	//Limpa todas as casas do tabuleiro
		for(posLista = 0;posLista<=8;posLista++){	
			lista[posLista].innerHTML=''
			lista[posLista].value=''	
		}
		
		vez.innerHTML=`X é sua vez!`		
		btIniciar.classList.add('desativa')		
		btIniciar.disabled = true;		
})
	
	document.addEventListener('click', function(e){
		teste(e)
		if(jogada >=9){
			vez.innerHTML=`Sem ganhador! <br> \u{1F625}`
			fimJogo()
			
		}else{			
			if((p1.value=='X'&& p2.value=='X' && p3.value=='X')||
				(p4.value=='X'&& p5.value=='X' && p6.value=='X')||
				(p7.value=='X'&& p8.value=='X' && p9.value=='X')||		
				(p1.value=='X'&& p4.value=='X' && p7.value=='X')||
				(p2.value=='X'&& p5.value=='X' && p8.value=='X')||
				(p3.value=='X'&& p6.value=='X' && p9.value=='X')||		
				(p1.value=='X'&& p5.value=='X' && p9.value=='X')||
				(p3.value=='X'&& p5.value=='X' && p7.value=='X')){ 
						
				//🏆
				vez.innerHTML=`\u{1F3C6}&nbsp &nbsp Ganhador &nbsp &nbsp \u{1F3C6} <br> X `	
				fimJogo()
		 
			}else if ((p1.value=='O'&& p2.value=='O' && p3.value=='O')||
				(p4.value=='O'&& p5.value=='O' && p6.value=='O')||
				(p7.value=='O'&& p8.value=='O' && p9.value=='O')||		
				(p1.value=='O'&& p4.value=='O' && p7.value=='O')||
				(p2.value=='O'&& p5.value=='O' && p8.value=='O')||
				(p3.value=='O'&& p6.value=='O' && p9.value=='O')||		
				(p1.value=='O'&& p5.value=='O' && p9.value=='O')||
				(p3.value=='O'&& p5.value=='O' && p7.value=='O')){
					
				vez.innerHTML=`\u{1F3C6}&nbsp &nbsp Ganhador &nbsp &nbsp \u{1F3C6} <br> O `
				fimJogo()		
			}
				
		}	
				
	})
	
function fimJogo(){
		btIniciar.classList.remove('desativa')
		btIniciar.disabled = false;
		btReiniciar.classList.add('desativaReiniciar')
		jogada=0
}

function teste(e){
	 if(btIniciar.disabled){
	
		eTarget = e.target	
 
		for(pos = 0;pos<casas.length;pos++){
			if(eTarget.id === casas[pos]){						
			
			elementoId = document.getElementById(eTarget.id)
			if(elementoId.value =='X' || elementoId.value =='O'){
				alert('Posição ocupada')
			}else{	
				if(jogada %2 ==0){
				elementoId.innerHTML='X'
				elementoId.value='X'				
				vez.innerHTML=`O é sua vez!`
				}else{
				elementoId.innerHTML='O'
				elementoId.value='O'							
				vez.innerHTML=`X é sua vez!`
				}
						jogada++
								
				}	 			
					
			} 
	
		
		}
	}	
}	

