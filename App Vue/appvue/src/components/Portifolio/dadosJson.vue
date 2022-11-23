<template>
    
    <div id="container">
           
       
        <div id="principal">
            <div v-for="id in previsao" :key="id">
            <div id="tempo">
                <span>{{id.time}}</span>
                <h3>{{id.location}}</h3>
                
            </div> 
            <div id="tempo">
                <div v-if="id.id == 1" id="a">
                    <img src="./img/chuva.png" id="b" width="75">
                </div>
                <div v-if="id.id == 2">
                    <img src="./img/parcialmente-nublado.png " id="c">
                </div>
                <div v-if="id.id == 3">
                    <img src="./img/luz-do-sol.png" height="40" id="d" width="27">
                </div>
                <div v-if="id.id == 4">
                    <img src="./img/luz-do-sol.png" alt="" id="e" width="90">
                </div>
                <div v-if="id.id == 5">
                    <img src="./img/chuva.png" id="f" width="100">
                </div>
                
               
            </div>
            <div id="tempo">
                <span id="graus">{{id.temp}}°</span>
            </div>
            <hr>
        </div>
        <button @click="clima">Previsão do tempo</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "clima-app",
    data(){
        return{
            previsao: []
        }
    },
    methods:{
        clima(){
            fetch("./dados.json")
            .then(response => response.json())
            .then(data => (this.previsao = data))
            
        }
    }

}
</script>

<style scoped>

    #container{
        background-image: url("./img/guardachuva.png");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 400px;
        background-position: bottom;
        width: 70%;
        height: 70%;
        margin-left: 5% ;
    }
    #principal{
        background: #ffffff10;
         backdrop-filter: blur(10px);
   
    }
    h1{
        text-align: center;
        color: rgb(21, 85, 245);
    }
    h3{
        font-size: 24pt;
    }
    #tempo{
    
    display: inline-block;
    padding: 23px;
    }
    img{
        margin-left: 190%;

    }
    #graus{
        font-size: 28pt;
       margin-left:350% ;
       color: black;
    }
    button{
        background-color: rgb(0, 94, 255);
        color: white;
        width: 150px;
        height: 70px;
        border: 2px solid ;
        border-radius: 5px;
        margin-left: 50%;
    }
</style>