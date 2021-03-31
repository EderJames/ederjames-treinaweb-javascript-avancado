//A comunicação entre workers ocorre por mensagens, visto que a thread principal está associada
//com a renderização da tela, precisamos enviar uma mensagem para esta thread principal, passando o dado que queremos enviar
//Essas mensagens são trocadas através do método nativo postMessage().
//Essa situação se faz necessária porque o worker está em uma thread separada da thread principal.
//No nosso caso, estaremos retornando um contador.
var i = 0;

setInterval(() => {
    i++;
    postMessage(i);
}, 1000);
