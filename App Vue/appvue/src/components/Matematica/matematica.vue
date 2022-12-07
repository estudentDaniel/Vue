<template>
    <div>
        <h1>Matematica</h1>
        <div id="cont1">
            <h1>Criptografia</h1>
            <form action="">
                <label for="">
                Numero primo P
                    <input type="number" v-model="p">
                </label>
                <label for="">
                Numero primo q
                    <input type="number" v-model="q">
                </label>
            </form>

            <button @click="moduleInverso">Mostar</button>
            <span>
                {{x}}
            </span>
        </div>


        <div id="cont1">
            
        </div>
        <div id="cont1">
            
        </div>
        <div id="cont1">
            
        </div>

    </div>
</template>

<script>
    export default{
        name: "app",
        data(){
            return {
                p: 0,
                q: 0,
                a: 0,
                m: 0,
                e:0,
                z: 0
            }
        },
        methods:{
          
            moduleInverso (){
                var a;
                var m;
                this.calculoPxQ(),

                a = this.relativoPrimo(),
                m = this.calculoZ()
               for(var x=1; x<m; x++){ 
                if(((a % m) * (x % m) % m) == 1){
                console.log("Valor modular: "+ x );
                  return x;
                  
                }
               }
                return 0;
            },
            calculoPxQ(){
                var p = this.p;
                var q = this.q;
                var n = p * q;
                console.log(n);
                return n;
            },
            calculoZ(){
                
                var p = this.p;
                var q = this.q;
                var z  = (p - 1) * ( q -1);
                console.log(z);
                return z;
            },
            relativoPrimo(){
                var e = this.e;
                console.log(e);
                return e;
            }

        }
    }
</script>