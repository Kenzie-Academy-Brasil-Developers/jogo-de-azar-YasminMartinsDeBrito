//array com as respostas
const respostas = ['Sim','Não','Talves','Não conte com isso'];

const texto = document.createElement('p');
const bolaResult = document.getElementById('bolaResult');

bolaResult.addEventListener('click', function(){
  escolha()
  document.getElementById('pergunta').innerText =''

});

function escolha(){

    const perguntaResposta = document.getElementById('perguntas');
   const pergunta = document.getElementById('pergunta').value;

    let bola = Math.floor(Math.random()* 4)+ 0;
    for(let i = 0; i < respostas.length; i++){
    
           if(pergunta === ('')){
                texto.innerText = 'Escreva sua pergunta'            
             }
            else if( bola === i){ 
                texto.innerText = respostas[i];
                perguntaResposta.appendChild(texto);
            }
     
    }
     
} 
