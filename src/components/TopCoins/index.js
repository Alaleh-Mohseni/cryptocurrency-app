import "./style.css"

const TopCoins = ({ coins }) => {
    return (
        <>
            {coins.price_change_percentage_24h < 0 ? (
                <div className="box-red d-flex flex-wrap rounded-4 px-3 py-3 shadow-sm">
                    <div className="d-flex col-lg-12">
                        <div className="bg-logo-red rounded-4 d-flex justify-content-center align-items-center">
                            <img src={coins.image} alt="crypto" width="40" height="40" />
                        </div>
                        <div className="ps-3">
                            <p className="text-uppercase fw-bold fs-5">{coins.symbol}-USD</p>
                            <p className="text-secondary">{coins.name} USD</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column pt-3">
                        <div className="">
                            <p className="fs-6 px-2 text-red">{coins.price_change_percentage_24h}%</p>
                        </div>
                        <div className="">
                            <p className="fa-bolder fs-3">${coins.current_price}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-3">Chart</div>
                </div>
            ) : (
                <div className="green d-flex flex-wrap rounded-4 px-3 py-3 shadow-sm">
                    <div className="d-flex col-lg-12">
                        <div className="bg-logo-green rounded-4 d-flex justify-content-center align-items-center">
                            <img src={coins.image} alt="crypto" width="40" height="40" />
                        </div>
                        <div className="ps-3">
                            <p className="text-uppercase fw-bold fs-5">{coins.symbol}-USD</p>
                            <p className="text-secondary">{coins.name} USD</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column pt-3">
                        <div className="">
                            <p className="fs-6 px-2 text-green">+{coins.price_change_percentage_24h}%</p>
                        </div>
                        <div className="">
                            <p className="fa-bolder fs-3">${coins.current_price}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-3">Chart</div>
                </div>
            )
            }

        </>
    )
}

export default TopCoins