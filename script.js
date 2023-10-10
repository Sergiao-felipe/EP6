function funcaoCorrigir(){
    var respostaCerta = "correta";
    var respostaUsuario = document.querySelector('input[name=*resposta"]:checked');
    if (respostaUsuario){
    if (respostaUsuario. value === respostaCerta) {
    document. getElementById("retorno").InnerHTML = " Acertou, mizeravi!";
    }
    else{ document. getElementById("retorno") InnerHTML = " Errou, Cabaço!";
    }    
    elset alert(*tem que escolher uma opação, cabaço!*);
    }
}
