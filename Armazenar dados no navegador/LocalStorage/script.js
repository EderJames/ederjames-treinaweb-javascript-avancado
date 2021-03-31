/*
Para visualizarmos o local storage, devemos acessar a ferramenta de desenvolvedor
do navegador, através da tecla F12, após isso, acessamos a a aba Application. Nesta aba teremos acesso ao menu LocalStorage
*/
localStorage.setItem('nome', 'TreinaWeb');
localStorage.getItem('nome');

let myObj = { name: 'TreinaWeb' };
localStorage.setItem('objNome', JSON.stringify(myObj));
var objConvertido = JSON.parse(localStorage.getItem('objNome'));
console.log(objConvertido.name);

//Outra forma:
//Setar o localstorage sem os seus métodos auxiliares, gera o seguinte risco de erro:

var obterObjNome = localStorage.objNome;
localStorage.objNome = JSON.stringify(myObj);

//Remover uma propriedade:
localStorage.removeItem('objNome');

//Limpar o banco:
localStorage.clear();
