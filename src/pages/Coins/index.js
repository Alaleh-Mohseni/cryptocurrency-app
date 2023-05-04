import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import ErrorMessage from "../../components/ErrorMessage"
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import Spinner from '../../components/Spinner';

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setIsLoading(true)
        // const page = localStorage.getItem('page');
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
        setCoins(res.data)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoins()

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
      return <Spinner />
    }

    if (hasError) {
      return <ErrorMessage />
    }

    return <Table rows={filteredCoins.map(coins => <TableRow coins={coins} key={coins.id} />)} />

  }


  return (
    <div className="Coins py-3">
      <div className="col-lg-6 col-md-6">
        <input type="text" className="form-control" placeholder="Search..." onChange={handleChange} />
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4 col-12'>
        {renderCoins()}
      </div>
      <button className="btn btn-primary btn-lg px-5 mt-2" onClick={handleShowMoreCoins}>
        {isLoading ? <Spinner /> : 'Load More'}
      </button>
    </div>
  )
}

export default Coins