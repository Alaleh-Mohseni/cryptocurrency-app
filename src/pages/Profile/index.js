import { useState, useEffect } from "react"
import axios from 'axios';
import "./style.css"
import Sidebar from "../../components/Sidebar"
import TopCoins from "../../components/TopCoins"
import ErrorMessage from "../../components/ErrorMessage"
import TableProfile from "../../components/TableProfile";
import TableProfileRow from "../../components/TableProfileRow";
// import HeaderProfile from "../../components/HeaderProfile";
import Spinner from "../../components/Spinner";
import Navbar from "../../components/Navbar";

const Profile = () => {
    const [coins, setCoins] = useState([])
    const [market, setMarket] = useState([])
    const [firstCoin, setFirstCoin] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                setIsLoading(true)
                const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                const coins = res.data.slice(0, 4)
                const topCoins = coins.map(coins => {
                    return {
                        ...coins
                    }
                })
                const market = res.data.slice(0, 7)
                const marketValue = market.map(market => {
                    return {
                        ...market
                    }
                })
                const firstCoin = res.data.slice(0, 1)
                const firstCoinMarket = firstCoin.map(firstCoin => {
                    return {
                        ...firstCoin
                    }
                })
                setCoins(topCoins)
                setMarket(marketValue)
                setFirstCoin(firstCoinMarket)
            } catch {
                setHasError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchCoin()
    }, [])
    console.log('coin', firstCoin)

    const renderMarketValue = () => {

        if (isLoading) {
            return <Spinner />
        }

        if (hasError) {
            return <ErrorMessage />
        }

        return <TableProfile rows={market.map(market => <TableProfileRow market={market} key={market.id} />)} />

    }


    const renderTopCoins = () => {

        if (isLoading) {
            return <Spinner/>
        }

        if (hasError) {
            return <ErrorMessage />
        }

        return coins.map(coins => <TopCoins coins={coins} key={coins.id} />)

    }


    return (
        <div className="profile d-flex">
            <Sidebar />
            <div className="profile-container col-lg-10 col-md-12">
                <Navbar/>
                <main className="d-flex flex-column py-3 px-5 bg-light">
                    <section className="d-flex flex-wrap align-items-center col-lg-12 pt-2">
                        {/* <HeaderProfile coin={firstCoin} /> */}
                    </section>
                    <section className="d-flex flex-column shadow-sm pt-3 mb-3 rounded-4 bg-body">
                        <div className="px-3 pb-2">
                            <p className="fw-bold">Market Value</p>
                        </div>
                        {renderMarketValue()}
                    </section>
                    <section className="d-flex py-2">
                        <div className="top-coins col-lg-8 pe-3">
                            {renderTopCoins()}
                        </div>
                        <div className="conversation col-lg-4 rounded-4 px-3 pt-4 shadow-sm bg-body">
                            <div className="border-bottom pb-1">
                                <h6 className="fw-bold">Total Balance</h6>
                            </div>
                            <div className="border-bottom py-2">
                                <p>My Balance</p>
                                <p className="fw-bold fs-4">$43,865.98</p>
                                <span>0.0005432</span>
                                <span className="text-uppercase ps-3">btc</span>
                            </div>
                            <div className="d-flex pt-3">
                                <div className="d-flex col-6">
                                    <div className="bg-income rounded-4 d-flex justify-content-center align-items-center">
                                        <i className="fa fa-donate fs-4"></i>
                                    </div>
                                    <div className="ps-2">
                                        <p>Income</p>
                                        <p className="fw-bold">$4,864</p>
                                    </div>
                                </div>
                                <div className="d-flex col-6">
                                    <div className="bg-expense rounded-4 d-flex justify-content-center align-items-center">
                                        <i className="fa fa-donate fs-4"></i>
                                    </div>
                                    <div className="ps-2">
                                        <p>Expense</p>
                                        <p className="fw-bold">$1,753</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Profile