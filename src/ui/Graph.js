import React from 'react';
import { useState } from 'react';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import formattedData from '../Data/Data';

const LineChart = () => {

    const [finalData, setFinalData] = useState(formattedData)

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Sales Data</h2>
            <Line data={finalData} />

        </div>
    );
};

export default LineChart;
