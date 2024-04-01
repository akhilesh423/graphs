

const originalData = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 5900,
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 5505,
    },
    {
        id: 4,
        year: 2019,
        userGain: 60000,
        userLost: 4555,
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 2234,
    },
];

const formattedData = {
    labels: originalData.map(item => item.year),
    datasets: [
        {
            label: 'User Gain',
            data: originalData.map(item => ({ x: item.year, y: item.userGain })),
            borderColor: '#4e79a7',
            backgroundColor: '#4e79a7',
            fill: false,
            tension: 0.1
        },
        {
            label: 'User Lost',
            data: originalData.map(item => ({ x: item.year, y: item.userLost })),
            borderColor: '#e15759',
            backgroundColor: '#e15759',
            fill: false,
            tension: 0.1
        }
    ],
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart',
            animateRotate: true,
            animateScale: true
        }
    }
};




export default formattedData