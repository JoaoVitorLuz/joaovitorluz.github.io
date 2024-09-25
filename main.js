const ctx = document.getElementById('chart').getContext('2d');
let chart;

const data = {
    '6A': {
        usoCelular: {
            labels: ['Menos de 1 hora', '4 horas', '10 horas'],
            datasets: [{
                label: 'Uso do Celular - Turma 6A',
                data: [10, 3, 2],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        },
        plataformas: {
            labels: ['Instagram', 'TikTok', 'Jogos e outros apps'],
            datasets: [{
                label: 'Plataformas Usadas - Turma 6A',
                data: [6, 6, 11],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        }
    },
    '6B': {
        usoCelular: {
            labels: ['Menos de 1 hora', '4 horas', '10 horas'],
            datasets: [{
                label: 'Uso do Celular - Turma 6B',
                data: [4, 5, 2],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        },
        plataformas: {
            labels: ['Instagram', 'TikTok', 'Jogos e outros apps'],
            datasets: [{
                label: 'Plataformas Usadas - Turma 6B',
                data: [11, 9, 15],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        }
    },
    '7A': {
        usoCelular: {
            labels: ['Menos de 1 hora', '4 horas', '10 horas'],
            datasets: [{
                label: 'Uso do Celular - Turma 7A',
                data: [3, 7, 9],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        },
        plataformas: {
            labels: ['Instagram', 'TikTok', 'Jogos e outros apps'],
            datasets: [{
                label: 'Plataformas Usadas - Turma 7A',
                data: [12, 15, 16],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        }
    },
    '7B': {
        usoCelular: {
            labels: ['Menos de 1 hora', '4 horas', '10 horas'],
            datasets: [{
                label: 'Uso do Celular - Turma 7B',
                data: [1, 16, 7],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        },
        plataformas: {
            labels: ['Instagram', 'TikTok', 'Jogos e outros apps'],
            datasets: [{
                label: 'Plataformas Usadas - Turma 7B',
                data: [20, 13, 25],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
            }]
        }
    }
};

function showChart(turma, type) {
    if (chart) {
        chart.destroy();
    }

    const chartData = data[turma][type];

    chart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}
