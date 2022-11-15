const apps = ({
    data (){
        return{
            nome : "Daniel de castro"
        }
    },
    methods: {
       
        alerta(){
            alert(this.nome)
            console.log("Esta funcionando")
        }
    }
});
Vue.createApp(apps).mount("#app");