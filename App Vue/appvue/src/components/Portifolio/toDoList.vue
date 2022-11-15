<template>
    <div>
        <h1>Exercicio 4</h1>
        <input type="text" v-model="lists" placeholder="Digite aqui">{{lists}}
        <div>
            <button @click="list">Add List 1</button>
            <button @click="list2">Add List 2</button>
        </div>
        <div>
            <h3>List One</h3>
            <uL>
                <li v-for="i in listOne" :key="i">
                    <p>{{i}}</p>
                </li>
            </uL>
        </div>
        <div>
            <h3>List Two</h3>
            <uL>
                <li v-for="i in listTwo" :key="i">
                    <p>{{i}}</p>
                </li>
            </uL>
        </div>
    </div>

</template>

<script>
export default {
    name: "App",
    data(){
        return{
            lists: '',
            listOne: [],
            listTwo: []
        }
    },
    methods:{
        list(e){
            e.preventDefault();
            var lista = this.lists
            this.listOne.push(lista)
            this.lists = ''
        },
        list2(e){
            e.preventDefault();
            var lista = this.lists
            this.listTwo.push(lista)
            this.lists = ''
        }
    }
}
</script>
<style scoped>
    li{
    list-style-type: none;
    font-weight: bold;
    }
</style>