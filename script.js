function inclui_nome() {/*  */
    var nome_variavel = prompt("Coloque seu nome:");/*  */
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");/* AQUI ELE CRIA UM ALERTA QUANDO A BARRA ONDE COLOCA O NOME NÃO É PREENCHIDO */
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');/*  */
    var resp2 = document.querySelector('input[name="quest_2"]:checked');/*  */
    var resp3 = document.querySelector('input[name="quest_3"]:checked');/*  */
    var resp4 = document.querySelector('input[name="quest_4"]:checked');/*  */

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ERROU) */

        }
        
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";/* AQUI ELE DEFINE SE VOCE ACERTOU OU ERROU A QUESTAO (NO CASO ACERTOU) */
    }
    else{
        alert("não deixe questões em branco!")/* AQUI ELE CRIA UM ALERTA QUANDO DEIXAR TODA AS QUESTÕES EM BRANCO */
    }

}