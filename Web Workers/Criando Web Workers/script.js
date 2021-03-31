let result1 = document.querySelector("#result1"),
    value1 = 0,
    result2 = document.querySelector("#result2"),
    value2 = 0,
    worker;
    
function start(){
    setInterval(() => {
        value1++;
        result1.innerText = value1;
    }, 1000);

    worker = new Worker('myworker.js');

    /*
    O listener 'onmessage' é utilizado para capturar os eventos de envios de mensagens.
    */
    worker.onmessage = function(event){
        //Dentro de event, teremos um objeto que conterá o valor dos dados enviados pelo método postMessage.
        //É importante compreender que um WebWorker não será pausado com a tela, portanto se tivermos um breakpoint
        //em uma função da tela, a thread principal será parada, mas o webworker continuará funcionando.
        
        value2 = event.data;
        result2.innerText = value2;
    }
}