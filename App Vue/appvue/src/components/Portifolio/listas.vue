<template>
    <div>
        <h1>Exercicio 2</h1>
            <p>List of Book</p>
            <ul> 
                <li v-for="(i, index) in livros" v-bind:key="index"> {{i}}</li>
            </ul>
            <p>List of Object</p>
            <ul> 
               <li v-for="(i, index) in materials" :key="index">{{i}}</li> 
            </ul>
            <p>List of name</p>
            <ul>
                <li v-for="(i, index) in nome" :key="index">{{i}}</li>
            </ul>
    </div>
</template>
<script>
    export default{
        name: 'exercicio-lista',
        data(){
            return{
                
                livros:['Papai noel', 'Os tres porquinhos', 'O gato e o rato'],
                materials:['Lapis', 'Caneta', 'Borracha'],
                nome: ['Daniel', 'Lorrany', 'Arthur']
            }
        }
    }
</script>