<template>
    <div>
       <h1> Exercicio 1</h1>
       <p v-if="text" :title="text"> Passe o mouse em cima e veja meu nome! </p>
    </div>
</template>
<script>
    export default{
        name:"exAjuda",
        data(){
            return{
                text: "Daniel de castro peres"
            }
        }
    }
</script>