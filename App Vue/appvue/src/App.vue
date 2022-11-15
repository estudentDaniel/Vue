<template>
  <div>
      <exAjuda/>
    <hr>
      <listas/>
    <hr>
      <addInput/>
    <hr>
      <ToDoList/>
    <hr>
      <exCinco/>
    <hr>
      <TituloParagrafo/>
    <hr>
      <soma/>
    <hr>
      <formulario/>
    <hr>
      <Escolha/>
    <hr>
    <Botoes/>

  </div>
   

 
</template>

<script>
  import exAjuda from './components/Portifolio/exAjuda.vue'
  import listas from './components/Portifolio/listas.vue'
  import addInput from './components/Portifolio/addInput.vue'
  import ToDoList from './components/Portifolio/toDoList.vue'
  import exCinco from './components/Portifolio/exCinco.vue'
  import TituloParagrafo from './components/Portifolio/TituloParagrafo.vue'
  import soma from './components/Portifolio/soma.vue'
  import formulario from './components/Portifolio/formApp.vue'
  import Escolha from './components/Portifolio/escolha.vue'
  import Botoes from './components/Portifolio/botoes.vue'

  export default{
    name: "App",
    components: {
    exAjuda,
    listas,
    addInput,
    ToDoList,
    exCinco,
    TituloParagrafo,
    soma,
    formulario,
        Escolha,
        Botoes
},
  }
</script>