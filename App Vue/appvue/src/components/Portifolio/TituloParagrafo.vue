<!-- eslint-disable no-unused-vars -->
<template>
    <div>
        <h1>Exercicio 6</h1>
        <input type="text" v-model="titulo">
        <input type="text" v-model="paragraph" >
        <h2>Title: {{titulo}}</h2>
        <p>paragraph: {{paragraph}}</p>  
        
    </div>
</template>
<script>
    export default {
        name: "title-paragraph",
        data(){
            return{
                titulo: '',
                paragraph: ''
            }
        },
       
    }
            

</script>