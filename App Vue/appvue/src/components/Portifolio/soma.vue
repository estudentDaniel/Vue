<template>
  <div>
    <h1>Exercicio 7</h1>
    <button @click="soma++">Somar</button>
    <p>{{soma}}</p>
  </div>
</template>

<script>
export default {
    name:'soma-app',
    data(){
        return{
            soma: 0
        }
    }
}
</script>

<style>

</style>