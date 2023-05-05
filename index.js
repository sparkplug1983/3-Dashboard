const bar = document.getElementById('bar');
const line = document.getElementById('line');
const pie = document.getElementById('pie');
const doughnut = document.getElementById('doughnut');   
Chart.defaults.global.defaultFontColor = "#fff";

const url = "https://www.balldontlie.io/api/v1/stats" //API//

document.addEventListener('DOMContentLoaded', () => {
    obtainId();
})

const obtainId = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    const { data } = json; // destructuring { title, edition_count, subject } // 

    // create labels etiqueta//
    const game1 = [
        data[0].player.last_name,
        data[1].player.last_name,
        data[2].player.last_name,
        data[3].player.last_name,
        data[4].player.last_name,
        data[5].player.last_name,
        data[6].player.last_name,
        data[7].player.last_name,
    ];

    const game2 = [
     
    ];
    const game3 = [
        data[0].player.last_name,
        data[1].player.last_name,
        data[2].player.last_name,
        data[3].player.last_name,
        data[4].player.last_name,
        data[5].player.last_name,
        data[6].player.last_name,
        data[7].player.last_name,
    ];
    const game4 = [
        data[0].player.last_name,
        data[1].player.last_name,
        data[2].player.last_name,
        data[3].player.last_name,
        data[4].player.last_name,
        data[5].player.last_name,
        data[6].player.last_name,
        data[7].player.last_name,
    ];
    const game5 = [
        data[0].player.last_name,
        data[1].player.last_name,
        data[2].player.last_name,
        data[3].player.last_name,
        data[4].player.last_name,
        data[5].player.last_name,
        data[6].player.last_name,
        data[7].player.last_name,
    ];
    const game6 = [
        data[0].team.name,
        data[1].team.name,
        data[2].team.name,
        data[3].team.name,
        data[4].team.name,
        data[5].team.name,
        data[6].team.name,
        data[7].team.name,
    ];
    const game7 = [
        data[0].team.name,
        data[1].team.name,
        data[2].team.name,
        data[3].team.name,
        data[4].team.name,
        data[5].team.name,
        data[6].team.name,
        data[7].team.name,
    ];
    // datasets
    const score1 = [
        data[0].pts,
        data[1].pts,
        data[2].pts,
        data[3].pts,
        data[4].pts,
        data[5].pts,
        data[6].pts,
        data[7].pts,
    ];
    const score2 = [
        data[0].game.season,
        data[1].game.season,
        data[2].game.season,
        data[3].game.season,
        data[4].game.season,
        data[5].game.season,
        data[6].game.season,
        data[7].game.season,
    ];
    const score3 = [
        data[0].reb,
        data[1].reb,
        data[2].reb,
        data[3].reb,
        data[4].reb,
        data[5].reb,
        data[6].reb,
        data[7].reb,
    ];
    const score4 = [
        data[0].blk,
        data[1].blk,
        data[2].blk,
        data[3].blk,
        data[4].blk,
        data[5].blk,
        data[6].blk,
        data[7].blk,
    ];
    const score5 = [
        data[0].stl,
        data[1].stl,
        data[2].stl,
        data[3].stl,
        data[4].stl,
        data[5].stl,
        data[6].stl,
        data[7].stl,
    ];
    const score6 = [
        data[0].turnover,
        data[1].turnover,
        data[2].turnover,
        data[3].turnover,
        data[4].turnover,
        data[5].turnover,
        data[6].turnover,
        data[7].turnover,
    ];

    const score7 = [
        data[0].pts,
        data[1].pts,
        data[2].pts,
        data[3].pts,
        data[4].pts,
        data[5].pts,
        data[6].pts,
        data[7].pts,
    ];

    new Chart(myChart, {
        type: 'bar',
        data: {
            labels: game1, 
            datasets: [{
                label: 'Top points per player',
                data: score1,
                backgroundColor: [
                    'green',
                    'blue',
                    'purple',
                    'red',
                    'yellow',
                    'gray',
                    'aqua',
                    'white',   
                ],
                
            }]
       
        },
        options: {         
            legend: { display: false },
            title: {
              display: true,
              text: 'Top points per player'
            }
        }
    });

    new Chart(myChart2, {
        type: 'bar',
        data: {
            labels: game2, 
            datasets: [{
                data: score2,
                backgroundColor: [
                    'green',
                        ],
            }]
        },
        options: {    
            legend: { display: false },
            title: {
              display: true,
              text: 'Basketball Season',
              yAxes: [
                {
                    ticks: {
                            callback: function(val) {
                            return Number.isInteger(val) ? val : null;
                        }
                    }
                }
            ]
            }
        }
    });

    new Chart(myChart3, {
        type: 'bar',
        data: {
            labels: game3, 
            datasets: [{
                data: score3,
                backgroundColor: [
                    '#3a86ff',
                ],
            }]
        },
        options: {         
            legend: { display: false },
            title: {
              display: true,
              text: 'Rebounds per player'
            }
        }
    });


    new Chart(myChart4, {
        type: 'line',
        data: {
            labels: game4, 
            datasets: [{
                label: 'Blocked per player',
                data: score4,
                backgroundColor: [
                    'blue',
                ],
            }]
        },
        options: {         
            legend: { display: false },
            title: {
              display: true,
              text: 'Blocked per player'
            }
        }
    });

    new Chart(myChart5, {
        type: 'line',
        data: {
            labels: game5, 
            datasets: [{
                label: 'Stolen balls per player',
                data: score5,
                backgroundColor: [
                    '#06D6A0',
                ],
            }]
        },
        options: {         
            legend: { display: false },
            title: {
              display: true,
              text: 'Stolen balls per player'
            }
        }
    });
    new Chart(myChart6, {
        type: 'bar',
        data: {
            labels: game6, 
            datasets: [{
                label: 'Turnovers',
                data: score6,
                backgroundColor: [
                    'green',
                    'blue',
                    'purple',
                    'red',
                    'yellow',
                    'gray',
                    'aqua',
                    'white',
                ],
            }]
        },
        options: {         
            legend: { display: false },
            title: {
              display: true,
              text: 'Tunrovers'
            }
        }
    });

    new Chart(myChart7, {
        type: 'pie',
        data: {
            labels: game7, 
            datasets: [{
                label: 'Turnovers',
                data: score7,
                backgroundColor: [
                    'green',
                    'blue',
                    'purple',
                    'red',
                    'yellow',
                    'gray',
                    'aqua',
                    'white',
                ],
            }]
        },
        options: {         
            legend: { display: false },
            title: {
              display: true,
              text: 'Points per Team'
            }
        }
    });

}

