let contando = 0;

document.getElementById("botao").addEventListener("click",function
(){
    contando++;
    document.getElementById("numero"). textContent = contando;

});

document.getElementById("botao2"). addEventListener("click", function
(){
    contando = 0;
    document.getElementById("numero").textContent = contando;
});

document.getElementById("botao3").addEventListener("click", function() {
    if (contando > 0) {
        contando--;
        document.getElementById("numero").textContent = contando;
    }
});