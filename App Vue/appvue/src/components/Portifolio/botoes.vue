<!-- eslint-disable vue/no-textarea-mustache -->
<template >
    <div class="container">
      
      <div class="formulario">
        <h1>Exercicio 10</h1>
        <form action="">
          <label class="name">Nome:  
              <input type="text" v-model="nome" class="inputName">
              <br>{{ nome}}
          </label>
          <br>
          <label class="labelIdade">Idade:
              <input type="number" class="idade" v-model="idade">
              <br>
          </label>
         <br>
          <button @click="mostrar">Enviar</button>
      </form>
      </div>
        <div class="info">
          <h5> Info: {{ txt1}}</h5>
          <h4> Info: {{ txt2}}</h4>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'botoes-app',
      data(){
          return{
              nome: '',
              idade: 0,
              txt1: '',
              txt2:''
          }
      },
      methods:{
        mostrar(e){
          e.preventDefault();
          this.txt1 = this.nome
          this.txt2 = this.idade
        }
      }
  }
  </script>

  <style scoped>      
  .container {
    background-image: url('./img/praia.jpg');
    background-repeat: no-repeat;
		background-attachment: fixed;
    width: 100%;
    height:100%;
    padding: 10px;
    }
  .formulario{
    
    text-align: center;
    padding: 10 px;
    background: #ffffff10;
    backdrop-filter: blur(10px);
    width: 50%;
    height: 30%;
    border: 2px solid #ffffff30;
    border-color: rgb(175, 175, 187)  ;
    border-radius: 5px;
    margin-left: 35%;
  }
  .name{
    text-align: center;
    Color: white;
  }
  .labelIdade{
    Color: white;
  }
  .inputName{
    margin-right: 8px;
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.344);
  }
  .idade{
    margin: 3px;
    border-radius: 8px;
    border-color: rgba(0, 0, 0, 0.344);
    
  }
  #area{
    width: 20%;
    height: 20%;
    margin-left: 50%;
    margin-top: 5%;
  }
  button{
    background: #d2d4d682;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border-color: rgba(128, 150, 201, 0.187);
    width: 60px;
    height: 40px;
  }
  .info{
    margin-left: 50%;
    margin-top: 5%;
    background: #ffffff10;
    backdrop-filter: blur(10px);
    border-radius: 9px;
    border-color: rgba(0, 0, 0, 0.344);
    width: 160px;
    height: 78px;
    padding: 3px;

  }
  h5{
    color: white;
    
  }
  h4{
    color: white;

  }
    
  </style>