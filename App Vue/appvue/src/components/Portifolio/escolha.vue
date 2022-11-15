<template>
  <div>
        <h1>Exercicio 9</h1>
        <p>Para ver imagem escreva: "imagem" e ver Texto: "texto"</p>
        <input type="text" v-model="variavel" placeholder="Digite aqui">
        <div v-if="variavel == imagem">
            <img src="./aluno.jpg" height="350" width="350">
        </div>
        <div v-if="variavel == texto">
            <p>Vue js is good the of working</p>
        </div>
        <button @click="apresentar">Apresentar</button>
  </div>
</template>

<script>
export default {
    name: 'escolha-app',
    data(){
        return{
            imagem: '',
            texto: ''
        }
    },
    methods:{
        apresentar(e){
            e.preventDefault();
            if(this.variavel === 'imagem'){
                this.imagem = this.variavel
            }else{
                this.imagem = "Algo deu errado"
            }
            if(this.variavel === 'texto'){
                this.texto = this.variavel
            }else{
                this.texto = "Algo deu errado"
            }
            
           
            console.log(this.texto)
            console.log(this.imagem)
        }
    }
}
</script>

<style>

</style>