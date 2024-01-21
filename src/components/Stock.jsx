
export default function Stock({stock}) {


  const stockName = stock.stockName;

  const logo = stock.logo;

  const currentPrice = stock.currentPrice;

  const prevClosingPrice = stock.prevClosingPrice;

  const numericalChange = (stock.currentPrice - stock.prevClosingPrice).toFixed(2).toString();

  const rateChange = ((numericalChange / prevClosingPrice) * 100).toFixed(2).toString()

  const colorClass = currentPrice === prevClosingPrice ? undefined : currentPrice > prevClosingPrice ? "green" : "red";

  const arrow = colorClass === undefined ? "▬" : colorClass === "green" ?  "⬆" : "⬇"  ;

  return (
    <div className="stock-container">
      <div className={colorClass}>
        <p>
          {arrow}
          {numericalChange}
        </p>
        <p>{rateChange}%</p>
      </div>
      <div>
        <img className="logo" src={logo} />
      </div>
      <div>
        <p>{stockName}</p>
      </div>
      <div>
        <p>${currentPrice}</p>
        <p>Güncel Fiyat</p>
      </div>
      <div>
        <p>Önceki Kapanış: ${prevClosingPrice}</p>
      </div>
    </div>
  );
}
