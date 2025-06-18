import React, { useState } from 'react'
import axios from 'axios';
import { GoArrowSwitch } from "react-icons/go";
import "./currency.css"


const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const BASE_KEY = "fca_live_FmnXKq4RVn4DcODkaOfqOGp4Rvyg9oUrSraND8fP";


function currency() {
    const [amount, setamount] = useState();
    const [baseMoney, setBaseMoney] = useState('TRY');
    const [toMoney, setToMoney] = useState('USD');
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState("");


    const exchange = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}?apikey=${BASE_KEY}&base_currency=${baseMoney}`);
            const result = ((response.data.data[toMoney]) * amount).toFixed(2);
            setResult(result);
            console.log(result);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className='base'>
            <h1>Döviz Dönüştürücü</h1>
            <div className='currency'>
                <div className='base-currency'>
                    <input type="amount" placeholder='Miktar' value={amount} onChange={(e) => setamount(e.target.value)} />
                    <select className='base-money' onChange={(e) => setBaseMoney(e.target.value)}>
                        <option>TRY</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                    <GoArrowSwitch style={{ margin: "-9px", fontSize: "24px" }} />
                    <select className='to-money' onChange={(e) => setToMoney(e.target.value)}>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>
                    <input type="amount" value={result} onChange={(e) => setResult(e.target.value)} />
                    <div className='btn'>
                        <button onClick={exchange}>Çevir</button>
                    </div>

                </div>

            </div>
            <div className='loading'>
                {loading && <p style={{ color: "green" }}>Yükleniyor..</p>}
            </div>

        </div >
    )
}

export default currency