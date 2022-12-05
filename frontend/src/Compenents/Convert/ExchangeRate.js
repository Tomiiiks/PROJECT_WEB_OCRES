import "./Conversion.css"

const ExchangeRate = ({exchangedData}) => {
    return (
        <div className="exchange-rate">
            <h4>Exchange Rate</h4>
            <div className="exchange-rate__container">
            <h2>{exchangedData.exchangeRate}</h2>
            </div>
            <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
        </div>
    );
}
export default ExchangeRate;