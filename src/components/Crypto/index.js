import './style.css'

function Crypto(props) {
    return (
        <div className="Container">
            <div className="coin-row">
                <div className="coin">
                    <p className='rank'>{props.rank}</p>
                    <img src={props.image} alt="crypto" />
                    <h1>{props.name}</h1>
                    <p className="coin-symbol">{props.symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{`$${props.price}`}</p>
                    {props.pricechange < 0 ? (
                        <p className="coin-percent red">{props.pricechange}%</p>
                    ) : (
                        <p className="coin-percent green">{props.pricechange}%</p>
                    )
                    }
                    <p className="coin-marketcap">
                        {`$${props.marketcap}`}
                    </p>
                    <p className="coin-volume">
                        {`$${props.volume}`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Crypto