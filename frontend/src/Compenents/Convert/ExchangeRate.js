const ExchangeRate = ({exchangeRate,chosenPrimaryCurrency,chosenSecondCurrency}) => {
    return (
        <div className="exchange-rate">
            <h4>Exchange Rate</h4>
            <h2>{exchangeRate}</h2>
            <p>{chosenPrimaryCurrency} to {chosenSecondCurrency}</p>
        </div>
    );
}
export default ExchangeRate;