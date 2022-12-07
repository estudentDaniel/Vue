<template>
    <div>
      <canvas id="myChart" width="100" height="100"></canvas>
    </div>
  </template>

  <script>
  import Chart from 'chart.js/auto';
  export default {
    components: {},
    name: 'App-chart',
   
    mounted(){
      
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
      type: 'doughnut',
      data: {
    labels: [
      'vermelho',
      'Azul',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
     
    });
    }
  }
  </script>
  
  <style>

  </style>
  