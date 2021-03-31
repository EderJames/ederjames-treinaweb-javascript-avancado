//principal diferença entre biblioteca e framework
//biblioteca: O nosso código chama e uiliza ela.
//frameeork: Tem estrutura pré-montada e o framework chama o nosso código

new Vue({
    el: '#app',
    data:{
        name: 'Treinaweb',
        list: [
            {name: 'javascript'},
            {name: 'vue'}
        ]
    },
    methods: {
        insert: function(){
            this.list.push({name: this.name});
            this.name = '';
        }
    }

});