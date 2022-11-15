<template>
  <div>
    <h1>Exercicio 8</h1>
   <form action="">
        <label for="">Nome
            <input type="text" v-model="nome"> {{nome}}
        </label>
        <br>
        <label for="">estudante
            <input type="radio" v-model="estudante"> {{estudante}}
        </label>
        <br>
        <label for="">Sexo:
             M <input type="checkbox" v-model="m" >{{m}} F<input type="checkbox" v-model="f" >{{f}}
        </label>
        <br>
        <label>Estado: 
            <select name="" id="" v-model="estado.id" >
                <option value="Go">Goias</option>
                <option value="Mg">Minas gerais</option>
                <option value="Sc">Santa catarina</option>
                <option value="Es">Espirito santo</option>
                <p>{{i}}</p>
            </select>
            {{estado.id}}
        </label>
    </form>
  </div>
</template>

<script>
export default {
    name: 'form-app',
    data(){
        return{
            nome: '',
            estudante: false,
            m: '',
            f: '',
            estado: [
                {id: "go"},
                {id: "mg"},
                {id: "sc"},
                {id: "sc"} 
            ]
        }
    },
    methods:{
        // verifica(){
        //    this.estudante = true
        // }

    }
}
</script>

<style>
    label{
        padding: 10px;
        text-align: center;
    }
</style>
