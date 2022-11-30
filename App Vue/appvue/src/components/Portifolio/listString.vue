<template>
  <div>
    <h1>Exercicio 12</h1>
    <button @click="apresenta">Transforn</button>
    <p>{{result}}</p>
  </div>
</template>

<script>
export default {
    name: "Exercicio-lista",
    data(){
        return{
            nome: "DANIEL de castro peres"
        }
    },
    computed:{
        
        toUpperCase(){
            return this.nome.toLocaleLowerCase()   
        }, 
    },
    methods:{
        apresenta(){
            var novo = this.toUpperCase
            console.log(novo)
        }
    }
}
</script>

<style>

</style>