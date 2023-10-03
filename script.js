function funcaocorrigir(){
    var respostacerta = "correta";
    var respostausuario = document.querySelector('input[name= "resposta"]:checked');

    if(respostausuario){
        if(respostauiauario.value === respostacerta){
            document.getElementById("retorno").inertHTML = "acertou, mizeravikkk";
        }
        else{
            document.getElementById("retorno").inertHTML = "errou, burraokkk"
        }
    }
    else{
        alert("tem que escolher uma opção, cabaço!");
    }
}