let contando = 0;


document.getElementById("botao").addEventListener("click",function
(){
    contando++;
    document.getElementById("numero").textContent = contando;
    if(contando === 0){
        document.getElementById("numero").style.color = 'black';
    } else if(contando > 0){
        document.getElementById("numero").style.color = 'green';
    }
    if(contando === 10){
         new Audio('medias/aplausos.mp3').play();
        alert('Parabéns! Você contou até 10'); 
    }
});

document.getElementById("botao2"). addEventListener("click", function
(){
    contando = 0;
    if(contando === 0){
        document.getElementById("numero").style.color = 'black';
    } 
    document.getElementById("numero").textContent = contando;
});

document.getElementById("botao3").addEventListener("click", function() {

        contando--;
        document.getElementById("numero").textContent = contando;
        if(contando === 0){
        document.getElementById("numero").style.color = 'black';
        }else if(contando < 0){
            document.getElementById("numero").style.color = 'red';
        }
});




