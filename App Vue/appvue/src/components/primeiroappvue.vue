<template>
    <div>
        <h1>Deus é fiel!</h1>
        <button v-on:click="apresentar">Apresentar</button>
        <P> Meu nome é: {{nome}} e tenho :{{idade}} de idade </P>
        <p>{{n}}</p>
    </div>
    
</template>

<script>
export default{
    name: 'primeiro-app-vue',
    data(){
        return{
            nome: "Daniel de castro peres",
            idade: 23,
           
        }
    },
    methods: {
       
        apresentar(){
             const n = this.nome;
        }
    }
}
</script>