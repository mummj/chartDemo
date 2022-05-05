'use strict'

console.log('hello world');

const ctx2 = document.getElementById('chart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
        datasets: [{
            label: 'Monthly $ Spent in Hundreds 20-21',
            data: [12, 18, 13, 8, 20, 13, 9, 11, 15, 22, 25],
            backgroundColor: [
                'rgba(0, 0, 0, 1)',
            
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1
        },
      {   label: 'Monthly $ Spent in Hundreds 21-22',
      data: [2, 8, 4, 18, 13, 9, 14, 15, 12, 3, 3],
      backgroundColor: [
          'rgba(255, 0, 0, 1)',
      
      ],
      borderColor: [
          'rgba(0, 0, 0, 1)',
      ],
      borderWidth: 1}]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx = document.getElementById('chart1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Color Votes',
            data: [12, 1, 13, 8, 2, 3],
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


