<template>
  <div>
    teste
    <!-- <primeiroappvue/> -->
    <lifeCicleHook/>
  </div>
 
</template>

<script>
  // import primeiroappvue from "./components/primeiroappvue.vue"
  import lifeCicleHook from "./components/lifeCicleHook.vue"
  export default{
    name: "App",
    components: {
      //primeiroappvue,
      lifeCicleHook
    }
  }
</script>