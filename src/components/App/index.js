import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Crypto from '../Crypto';


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
        setIsLoading(false)
        setHasError(false)
      })
      .catch(() =>
        setHasError(true)
      )
  }, [page])

  function handleChange(event) {
    setSearch(event.target.value)
  }

  const handleShowMoreCoins = () => {
    setPage((page) => page + 1);
  };

  const filteredCoins = coins.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )


  function renderCoins() {
  
    if (isLoading) {
      return <p>Loading...</p>
    }

    if (hasError) {
      return (
        <div className="error-box">
          <div className="dot"></div>
          <div className="dot two"></div>
          <div className="face2">
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="mouth sad"></div>
          </div>
          <div className="shadow move"></div>
          <div className="message">
            <h1 className="alert">Error!</h1>
            <p>oh no, something went wrong.</p>
          </div>
          <button className="button-box"><h1 className="red">try again</h1></button>
        </div>
      )
    }

    return (
      filteredCoins.map(coin => {
        return (
          <Crypto
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            rank={coin.market_cap_rank}
          />
        );
      })
    )
  }


  return (
    <div className="App">
      <div className="coin-search">
        <input type="text" className="coin-input" placeholder="Search..." onChange={handleChange} />
      </div>
      <div className='coin-list'>
        <div className='header'>
          <p>#</p>
          <p>Name</p>
          <p className='parag'>Price</p>
          <p>24h %</p>
          <p>Market Cap</p>
          <p>Volume(24h)</p>
        </div>
        <div>
          {renderCoins()}
        </div>
      </div>
      <button className='load-more' onClick={handleShowMoreCoins}>
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}

export default App;
