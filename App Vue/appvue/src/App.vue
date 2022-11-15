<template>
  <div>
  <!-- <p>Meu dado é: {{teste}}</p>
    <lifeCicleHook/>
    <primeiroappvue/>
    <decisao/> -->
    <exAjuda/>
    <hr>
    <listas/>
    <hr>
    <addInput/>
  </div>


 
</template>

<script>
  // import primeiroappvue from "./components/primeiroappvue.vue"
  // import lifeCicleHook from "./components/lifeCicleHook.vue"
  // import decisao from './components/decisao.vue'
  import exAjuda from './components/Portifolio/exAjuda.vue'
  import listas from './components/Portifolio/listas.vue'
  import addInput from './components/Portifolio/addInput.vue'
  export default{
    name: "App",
    components: {
      exAjuda,
      listas,
      addInput
      // primeiroappvue,
      // lifeCicleHook,
      // decisao,
      
    },
    data(){
      return {
        teste: "inicio"
      }
    }
  }
</script>