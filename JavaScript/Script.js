let contando = parseInt(localStorage.getItem('contador')) ||0;

let intervalo;

document.getElementById("numero").textContent = contando;
// Após carregar o valor
if(contando > 0){
    document.getElementById("numero").style.color = 'green';
} else if(contando < 0){
    document.getElementById("numero").style.color = 'red';
} else {
    document.getElementById("numero").style.color = 'black';
}1

document.getElementById("botao").addEventListener("click",function
(){
    contando++;
    document.getElementById("numero").textContent = contando;
    localStorage.setItem('contador', contando);
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
    localStorage.setItem('contador', contando);
});

document.getElementById("botao3").addEventListener("click", function() {

        contando--;
        document.getElementById("numero").textContent = contando;
        localStorage.setItem('contador', contando);
        if(contando === 0){
        document.getElementById("numero").style.color = 'black';
        }else if(contando < 0){
            document.getElementById("numero").style.color = 'red';
        }
});

// Função para atualizar tudo
function atualizarContador() {
    document.getElementById("numero").textContent = contando;
    localStorage.setItem('contador', contando);
}

atualizarContador();

// Botão Auto
document.getElementById("botao4").addEventListener("click", function() {
    if(!intervalo) {
        intervalo = setInterval(() => {
            contando++;
            atualizarContador();
        }, 1000);
        this.textContent = "Parar Auto";
    } else {
        clearInterval(intervalo);
        intervalo = null;
        this.textContent = "Iniciar Auto";
    }
    this.classList.toggle('ativo');
});




