import { useState, useEffect } from "react"; //useEffect 불러오기

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [coin, setCoin] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onSelect=(event)=>{
    setPrice(event.target.value);
    console.log(event.target.value);
    console.log(`selecct price: ${price}`);
    console.log(`price / coin : ${price / coin}`);
  }
  console.log(` price: ${price}`);
  
  const onChange=(event)=>{
    setCoin(event.target.value);
    console.log(`input price: ${price}`);
  }
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={onSelect}>
          {coins.map((item)=><option key={item.id} value={item.quotes.USD.price}> {item.name} : ${item.quotes.USD.price} USD</option>)}
        </select>
      }
      <div><input value={coin} onChange = {onChange} />USD</div>
      <div>{coin / price}</div>
    </div>
  );
}

export default App;