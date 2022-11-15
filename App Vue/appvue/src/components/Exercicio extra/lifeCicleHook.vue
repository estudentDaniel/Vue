<template>
    <div>
        <h1>Brasil {{nome}}</h1>
  
    </div>
    
</template>

<script>
export default{
    name: 'lifeCicleHook',
    data(){
        return{
            nome: "inicio",
        }
    }, 
    created(){
      setTimeout(() =>{
        this.nome = "Daniel"
      }, 3000);
    },
    mounted(){
        setTimeout(() =>{   this.nome = "fim"},5000);
    }
}
</script>