import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [btc, setBtc] = useState()
  const [Quan, setQuan] = useState()
  const [price, setPrice] = useState()
  const [result, setResult] = useState()

  const onTextchange = (e) => {
    console.log('log', e.target.value)
    if (e.target.value) {
      setQuan(e.target.value)
      axios
        .get(
          'https://api.alternative.me/v2/ticker/?convert=USD'
        )
        .then(res => {
          // setBtc(res.data.bitcoin.usd);
          console.log(res.data['data'][1]['quotes']['USD']['price']);
          setPrice(res.data['data'][1]['quotes']['USD']['price']);


        })
        .catch(error => console.log(error));

      console.log('result', Quan * price)

      setResult(Quan * price)
    }

  }

  return (
    <div className="App">
      <h1>Simple Bitcoin / USD Converter</h1>
      <div >
        <input type="text" id="fname" onChange={onTextchange} ></input>
        <label> BTC </label>
        <br /> <br />
        <label id="usd" >{result}</label>
        <label > USD </label>

      </div>
    </div >
  );
}

export default App;
