import React from 'react'
import BasicPie from '../components/BasicPie'
import BasicLineChart from '../components/BasicLineChart'
import "../css/Home.css"

function Home() {
    return (
        <div className='Home-Container'>
            <BasicPie />
            <BasicLineChart />
        </div>
    )
}

export default Home