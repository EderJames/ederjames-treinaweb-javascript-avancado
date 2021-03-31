//Utilizando o banco de dados do navegador
//O WebSql está obsoleto e não deve mais ser utilizado
//No IndexedDB, podemos salvar objetos propriamente ditos, sem a necessidade de transforma-los em string

//A api do IndexedDB trabalha com funções de callback

let db;

function getObjectStore(){
    return db.transaction(['Courses'], 'readwrite').objectStore('Courses');
}

const DB = {
    start(){
        return new Promise(resolve => {
            //Para abrirmos uma conexão com o banco, devemos passar dois parâmetros: nome do banco, versão do banco.
            //OBS: Sempre que alterarmos uma estrutura do nosso banco, também devemos alterar a versão dele.
            let request = indexedDB.open('TreinaWeb', 1);
            request.onsuccess = (event) => {
                db = request.result;
                resolve(this);
            }

            request.onupgradeneeded = (event) => {
                db = event.target.result;
                db.createObjectStore('Courses', { keyPath: 'id' });
            }
        })
    },
    find(id){
        return new Promise(resolve => {
            let request = getObjectStore().get(id);
            request.onsuccess = () => {
                resolve(request.result);
            }
        });
    },
    findAll(){
        return new Promise(resolve => {
            let request = getObjectStore().getAll();
            request.onsuccess = () => {
                resolve(request.result);
            }
        });
    },
    insert(item){
        return new Promise(resolve => {
            item.id = (new Date()).getTime();
            
            let request = getObjectStore().add(item);
            request.onsuccess = () => {
                resolve(item);
            }
        });
    },
    update(item){
        return new Promise(resolve => {
            let request = getObjectStore().put(item);
            request.onsuccess = () => {
                resolve(item);
            }
        });
    },
    remove(id){
        return new Promise(resolve => {
            let request = getObjectStore().delete(id);
            request.onsuccess = () => {
                resolve(id);
            }
        });
    }
}

function IniciarBanco(){
    DB.start().then(value => {
        ManipularDados();
    });
}

function InserirDados(){
    DB.insert({name: 'JavaScript Básico', localCurso: 'Treina web'});
    DB.insert({name: 'JavaScript Intermediário', localCurso: 'Treina web'});
    DB.insert({name: 'JavaScript Avançado', localCurso: 'Treina web'});
    DB.insert({name: 'JavaScript Teste IndexedDB', localCurso: 'Treina web'});
}

function BuscarDados(){
    DB.findAll().then(value => {
        console.log(value);
        
    });
    
    DB.find(1593103444224).then(result => {
        if(result && result.id)    
            console.log(`Objeto com o id ${1593103444224}: ${result}`);
    });
    
    DB.find(1593103445227).then(result => {
        if(result && result.id)
            console.log(`Objeto com o id ${1593103445227}: ${result}`);
    });

    DB.find(1593103446545).then(result => {
        if(result && result.id)
            console.log(`Objeto com id ${1593103446545}: ${result}`);
    });
}

function AtualizarDados(){
    DB.find(1593103446545).then(result => {
        if(result && result.id){
            result.localCurso = 'Nova Local do Treinaweb';
            DB.update(result).then(value => {
                console.log(value.id);
                console.log(`Resultado do objeto atualizado: ${value}`);
            });
        }
    });
    
}

function DeletarDados(){
    debugger
    DB.find(1593104982559).then(result => {
        if(result && result.id){
            debugger
            DB.remove(result.id).then(resultDelete => {
                console.log(`Código do objeto deletado: ${resultDelete}`);
            });
        }
    });
}

function ManipularDados(){
    InserirDados();
    BuscarDados();
    AtualizarDados();
    //DeletarDados();
}

IniciarBanco();
