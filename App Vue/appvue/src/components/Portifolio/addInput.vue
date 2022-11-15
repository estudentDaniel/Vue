<template>
    <div>
        <h1>Exercicio 3</h1>
        <form>
         <input type="text" v-model="nome" >
         <button @click="addInput">Enviar</button>
        </form>
        <ul>
            <li v-for="(i,index) in addArray" :key="index" class="li">
                {{i}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "input-adicionar",
        data(){
            return{
                nome: '',
                addArray: []
            }
        },
        methods:{
            addInput(e){
                e.preventDefault();
                var n = this.nome
                this.nome  = ''
               this.addArray.push(n)
               console.log(this.addArray)
               
            }
        }
    }
</script>
<style scoped>
    .li{
    list-style-type: none;
    font-weight: bold;
    }
</style>