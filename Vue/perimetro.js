const myApp = {
    data(){
        return{
            nome: "",
            idade: "",
            inputIdade: "",
            inputNome: "",
        }
    },
    methods: {
        funcao(x){
            x.preventDefault();
            this.nome = this.inputNome;
            this.idade = this.inputIdade;
        }
    }
}

Vue.createApp(myApp).mount('#app');