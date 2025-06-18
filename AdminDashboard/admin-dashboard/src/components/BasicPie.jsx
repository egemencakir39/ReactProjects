import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import "../css/Chart.css"

function BasicPie() {
    const pieData = [
        { id: 0, value: 5, label: 'Elektronik' },
        { id: 1, value: 3, label: 'Kitap' },
        { id: 2, value: 7, label: 'Ev Eşyası' },
        { id: 3, value: 2, label: 'Giyim' },
    ];

    return (
        <div className='chart-wrapper'>
            <h1>Kategori & Stok</h1>
            <PieChart
                series={[{ data: pieData }]}
                width={350}
                height={350}
            />
        </div>
    );
}
export default BasicPie