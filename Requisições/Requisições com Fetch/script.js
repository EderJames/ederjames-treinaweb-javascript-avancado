//O fetch faz a mesma coisa que o XHR, porém, com uma api nova, mais flexível e simples de usar

//Exemplo
fetch('https://api.github.com/search/repositories?q=javascript')
      .then(response => response.json())
      .then(myData => console.log(myData));

(async function(){
  var response = await fetch('https://api.github.com/search/repositories?q=javascript');
  var myData = await response.json();
  console.log(myData);

})()