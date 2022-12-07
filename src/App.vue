<template>
  
  <div id="tela">
    <h1>Cuidando dos Idosos</h1>
      <h2><span id="brasil">Brasil </span>+<span id="eles">Eles</span></h2>
  </div>
  <div id="fundo">

</div>
  <img src="./assets/img2.jpg" height="350" width="550">
  
  <div id="tela1">
    <h1 id="h1">Ser idoso</h1>
    <p> Não é à toa que a terceira idade é chamada de a melhor idade. Apesar de muitas pessoas enxergarem a velhice com maus olhos,
    essa é uma das fases em que mais se aproveita a vida. E cada vez mais a população chega a idades avançadas com saúde e disposição 
    para viver e fazer coisas incríveis.</p>
    <p>Aliás, há muitos idosos que fazem coisas que poucos jovens conseguem.
    Infelizmente há preconceito em relação à terceira idade.
    As pessoas costumam subestimar e diminuir a capacidade dos velhinhos, baseadas em pensamentos ultrapassados.</p>
   <p>Mas veja a seguir 5 verdades sobre os mais experientes que vão surpreender você.</p> 

    <p>Fatos surpreendentes sobre os idosos
    Esqueça aquele estereótipo de idoso rabugento, senil e trancado em casa. Cada vez mais eles estão se engajando em atividades que lhes proporcionam bem-estar e uma vida mais feliz. Confira fatos que você provavelmente não sabe sobre eles.
    </p>
    <p>Nos últimos anos, os idosos e os jovens trocaram de mentalidade entre si. Os mais velhos são menos preocupados, mais relaxados e otimistas. Eles lidam melhor com o estresse do dia a dia, pois são menos ansiosos e irritadiços.
       Isso se deve ao fato de que ao longo dos anos eles acumularam mais experiência de como entender a vida.
  </p>
  </div>
  <div id="painel">
    <h2>
      Grafico
    </h2>
    <Home/>
  </div>
  <p id="p">
        Grafico abaixo mostra os cuidados com os idosos
      </p>
      <p id="p">
        Azul: 50% são esquecidos.
      </p>
      <p id="p">
        vermelho: 30% são abondonados.
      </p>
      <p id="p">
        verde: 20% são cuidado.
      </p>
 
  <hr>
 
  <div id="fazer">
    <h2>Abandono</h2>
  <p>
    O abandono de idosos é considerado hoje uma forma de violência. No entanto, essa prática é muito comum em muitos países e não passa despercebida. O problema dos idosos 
  abandonados nunca para de nos surpreender.
  Nós nos perguntamos: por que tantos idosos são abandonados pelos filhos? Muitas vezes, o pensamento ocidental influencia os mais jovens. E é que nessa cultura, quem não produz, pode ser considerado um estorvo. 
  Consequentemente, a taxa de idosos abandonados está aumentando.
  Em outras culturas, como a oriental, ao contrário, os idosos são considerados uma fonte de sabedoria e conhecimento e por isso são valorizados, cuidados e respeitados em seus últimos dias.
  O abandono dos idosos, de fato, influenciou na perda de valores, identidade familiar e na transmissão de tradições que antes ocorriam de geração em geração
  </p> 

  <div></div>
  <img src="./assets/img2.jpg" id="img2" >
</div>
<div id="barra">
  <h1>Como posso ajudar?</h1>
  <hr>
  <button id="btn">Denuncia</button>
  <button id="btn">ajuda</button>
  <button id="btn">informações</button>
  <p>
    Telefone(64) 9922-5563
  </p>
  <p>
    email: <a href="">cuidando@idosos.com.br</a>
  </p>
  <h4>Cuide do seu proprio futuro amanhã poderá ser voçê.</h4>
</div>
 
</template>

<script>
// import Chart from 'chart.js/auto';
import Home from './components/Home.vue';

export default {
  components: { Home },
  name: 'App',
 
}
</script>

<style>
h4{
  color: white;
  font-size: 15pt ;
}
a{
  margin: 10px;
}
#btn{
  text-align: center;
  padding: 2px;
  margin-left: 250px;
  width: 140px;
  height: 35px;
  border-radius: 12px  ; 
  background:rgb(198, 222, 242);
}
#barra{
  
  padding: 10px;
  background:rgb(20, 124, 228);
  height: 350px;
  border-radius: 11px;
}
#fundo{
  width: 75%;
  margin-left:13% ;
  margin-bottom:3% ;
  height: 450px;
  background-image: url('./assets/casal.png');
}
#fazer{
  padding: 55px;
  font-size: 15pt;
}
#img2{
  padding: 5px;
}
#h1{
  color:black ;
}
img{
  border: 1px solid #ffffff53;
  margin: 35px;
  border-radius: 9px;
}
#p{
  color: black;
  font-size: 10pt;
  margin-left: 13%;
}
h1{
  color: white;
  text-align: center; ;
}
#tela{
    margin-bottom: 3%;
    text-align: center;
    background:rgb(20, 124, 228);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 120px;
    border: 1px solid #ffffff53;
    border-color: rgba(16, 16, 205, 0.808)  ;
    border-radius: 9px;
    

}
#tela1{

  font-size: 15pt;
  background-color: rgb(239, 237, 237);
  width:890px;
  margin-left: 40px;
  height: 500px;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  border-radius: 9px;
}

#painel {
  margin-left: 25%;
  margin-right: 25%;
  width: 350px;
  height: 350px;
  background-color:white;
}

#brasil{
  color: rgb(214, 214, 214);
}
#eles{
  color: rgb(246, 246, 246);
}

</style>
