import "./Conversion.css"
import { useState } from "react";
import axios from 'axios'
import ExchangeRate from "./ExchangeRate";
import Button from "../Utils/Button";




export const IndexConvert = () => {

    const currencies = ['USD','EUR','GBP','BRL','CHF','CAD','AUD','JPY','CNY','RUB','INR','MXN','ZAR','TRY','NOK','SEK','DKK','PLN','THB','IDR','HUF','CZK','ILS','CLP','PHP','AED','COP','SAR','KRW','MYR','RON','NZD','SGD','HKD','ARS','ISK','HRK','BGN','BHD','BOB','BWP','CNY','CZK','DKK','EGP','EUR','GBP','GHS','GTQ','HKD','HRK','HUF','IDR','ILS','INR','JPY','KES','KRW','KWD','LKR','MAD','MXN','MYR','NOK','NZD','PEN','PHP','PKR','PLN','QAR','RON','RUB','SAR','SEK','SGD','THB','TND','TRY','TWD','UAH','USD','VND','ZAR'];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('USD');
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    //const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0);
    const [exchangedData, setExchangedData] = useState({
        primaryCurrency: 'USD',
        secondaryCurrency: 'USD',
        exchangeRate: 0
    });
    console.log(chosenPrimaryCurrency, chosenSecondaryCurrency, amount);

    const convert = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3001/currency',
            params: {from: chosenPrimaryCurrency, to: chosenSecondaryCurrency, amount: '1'},

        };

        axios.request(options).then(function (response) {
            console.log(response.data)
            //setExchangeRate(response.data.info.rate)
            console.log(response.data.result)
            setResult(response.data * amount)
            setExchangedData({
                primaryCurrency: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                exchangeRate: response.data
            })
        }).catch(function (error) {
            console.error(error)
        })
    }

    return (

        <div className="conversion">

            <h2>Conversion</h2>

        <div className="input-box">
           <table>
               <tbody>
               <tr>
                   <td>Primary Currency</td>
                   <td>
                       <input
                            type="number"
                            name="currency-amount-1"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                       />
                   </td>
                   <td>
                       <select
                           value={chosenPrimaryCurrency}
                           name="currency-option-1"
                           className="currency-options"
                           onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                       >
                           {currencies.map((currency,_index)=> (<option key={_index}>{currency}</option>))}
                       </select>
                   </td>
               </tr>
               <tr>
                   <td>Secondary Currency</td>
                   <td>
                       <input
                           name="currency-amount-2"
                           value={result}
                           disabled={true}

                       />
                   </td>
                   <td>
                       <select
                           value={chosenSecondaryCurrency}
                           name="currency-option-2"
                           className="currency-options"
                           onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                           >
                           {currencies.map((currency,_index)=> (<option key={_index}>{currency}</option>))}
                       </select>
                   </td>
               </tr>
               </tbody>
           </table>

           <div className="button-container" onClick={convert}>
            <Button id="btn" _class="bt small"  name="Convert"  />
           </div>

        </div>

            <ExchangeRate
            exchangedData={exchangedData}
            chosenPrimaryCurrency={chosenPrimaryCurrency}
            chosenSecondaryCurrency={chosenSecondaryCurrency}
            />
         </div>

    )

}