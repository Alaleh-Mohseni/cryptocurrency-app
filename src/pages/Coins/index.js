import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Error from '../../components/Error'
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import Spinner from '../../components/Spinner';

const Coins = () => {
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

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleShowMoreCoins = () => {
    setPage((page) => page + 1);
  };

  const filteredCoins = coins.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const renderCoins = () => {

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (hasError) {
      return <Error />
    }

    return <Table rows={filteredCoins.map(coins => <TableRow coins={coins} key={coins.id} />)} />

  }


  return (
    <div className="Coins py-3">
      <div className="col-lg-6 col-md-6">
        <input type="text" className="form-control" placeholder="Search..." onChange={handleChange} />
      </div>
      <div className='coin-list mt-4 container-lg'>
        {renderCoins()}
      </div>
      <button className="btn btn-primary btn-lg px-5 mt-2" onClick={handleShowMoreCoins}>
        {isLoading ? <Spinner/> : 'Load More'}
      </button>
    </div>
  )
}

export default Coins