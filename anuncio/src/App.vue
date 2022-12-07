<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
   import '../src/components/Navbar.vue'
export default{
  components: {
    Navbar: {

    }
  }
}

</script>

<style>

</style>
