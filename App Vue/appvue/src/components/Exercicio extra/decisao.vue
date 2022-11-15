<template>
    <div>
         <h1>Diretiva v-if</h1>
        <p v-if="tempo">Esta chovendo</p>
        <p v-else>Não esta chovendo</p>
    </div>
</template>

<script>
export default{
    name: 'decisao-app',
    data(){
        return{
            tempo: true,
        }
    },

}
</script>