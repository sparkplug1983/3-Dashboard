const bar = document.getElementById('bar');
const line = document.getElementById('line');
const pie = document.getElementById('pie');
const bubble = document.getElementById('bubble');   
const scatter = document.getElementById('scatter'); 
Chart.defaults.global.defaultFontColor = "#fff";

const url = "https://www.balldontlie.io/api/v1/games" //API//

document.addEventListener('DOMContentLoaded', () => {
    obtainId();
})

const obtainId = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    const { data } = json; // destructuring { title, edition_count, subject } // 

    // create labels etiqueta//
    const dependencies = [
        data[0].home_team.full_name,data[0].visitor_team.full_name
    ];
    // datasets
    const values = [
        data[0].home_team_score,data[0].visitor_team_score
    ];
    const division = [
    data[0].home_team.conference,data[0].home_team.city
];

    new Chart(myChart, {
        type: 'bar',
        data: {
            labels: dependencies, 
            datasets: [{
                label: 'Game score winner',
                data: values,
                backgroundColor: [
                    'orange',
                    'purple',
                ],
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

    new Chart(bar, {
        type: 'bar',
        data: {
            labels: dependencies,
            datasets: [{
                label: 'winner',
                data: values,
                backgroundColor: [
                    'green',
                    'blue',
                ],
            }]
        },
        options: {
            layout:{
                padding:40
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

