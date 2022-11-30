<template>
    <div>
        <h1>vendas plus</h1>
        <div>
           <input type="email" name="" id="">
           <input type="password" name="" id="">

            <button @click="entrar">Entrar</button>
           <p>Esqueceu sua senha?</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vendas-plus',
    data(){
        return{

        }
       
    },
    methods:{
        entrar(){
            console.log('entrou')
        }
    }
     
}
</script>