//A diferença do localStorage e do sessionStorage está na questão de que quando fechamos o navegador,
//esta informação é removida do SessionStorage.
//Portanto, o LocalStorage sempre mantêm os dados salvos, independente de atualizarmos ou fecharmos o navegador
//Já o SessionStorage remove os dados quando fechamos o navegador.
//É importante observar que se alocar dados no SessionStarege de uma guia do navegador, ele não estára presente nas outras guias
//Portanto, o SessionStorage é específico por guia de navegador.


//Alocando informações no SessionStorage:
sessionStorage.setItem('nome', 'TreinaWeb');
sessionStorage.setItem('objNome', JSON.stringify({ nome: 'TreinaWeb', curso: 'JavaScript Avançado' }));

var teste = JSON.parse(sessionStorage.getItem('objNome'));
console.log(teste.nome);
console.log(teste.curso);
