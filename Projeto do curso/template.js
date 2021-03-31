const languageSelect = document.querySelector("#languagem-tags");
const listElement = document.querySelector("#list");
const templateWorker = new Worker('./template_worker.js');

const config2 = {
    listItems: [],
    languageTag: 'en-US'
}

const config = new Proxy({
    listItems: JSON.parse(sessionStorage.getItem('listItems')) || [],
    languageTag: localStorage.getItem('lang') || 'en-US'
}, {
    //Representação dos objetos contidos em arguments:
    //target, prop, value, receiver
    set: function(target, prop, value, receiver){
        if(prop === 'listItems' || prop === 'languageTag'){
            Reflect.set(...arguments);
            render();
            return true;
        }
        return false;
    }
});

languageSelect.value = config.languageTag;
languageSelect.addEventListener('change', changeLanguage);

function changeLanguage(){
    const lang = languageSelect.value;
    localStorage.setItem('lang', lang);
    config.languageTag = lang;
}

function render(){

    const configParam = JSON.parse(JSON.stringify(config));
    templateWorker.postMessage(configParam);
    
    //Este recebimento de parâmetros {data}, significa que estamos pegando a propriedade data,
    //que está dentro do objeto event, retornado pelo webWorker.
    templateWorker.onmessage = function({data}){
        listElement.innerHTML = data;
    }
}

export function setList(list){
    sessionStorage.setItem('listItems', JSON.stringify(list));
    config.listItems = list;
}

(function start(){
    render();
})();