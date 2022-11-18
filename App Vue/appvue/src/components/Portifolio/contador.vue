<template>
  <div>
    <h1>Exercicio 11</h1>
    <button @click="countFuor">Count</button> 
    <h2>{{count}}</h2>
  </div>
</template>

<script>
export default {
    name:'count-app',
    data(){
        return{
            count: 0,
        }
    },
    methods:{
        countFuor(){
            //this.count++;
            if(this.count++ >= 4){
            alert('O numero é maior igual que (4) :'+this.count)
            console.log(this.count)
        }
        }
    }
}
</script>

<style>

</style>