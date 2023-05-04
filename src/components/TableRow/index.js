import "./style.css"

const TableRow = ({ coins }) => {
    return (
        <tr className="coin">
            <td>{coins.market_cap_rank}</td>
            <td>
                <img src={coins.image} alt="crypto" />
            </td>
            <td className="fw-semibold">{coins.name}</td>
            <td className="text-secondary">{coins.symbol}</td>
            <td>{`$${coins.current_price}`}</td>
            <td>
                {coins.price_change_percentage_24h < 0 ? (
                    <p className="text-danger">{coins.price_change_percentage_24h}%</p>
                ) : (
                    <p className="text-success">+{coins.price_change_percentage_24h}%</p>
                )
                }
            </td>
            <td>{`$${coins.market_cap}`}</td>
            <td>{`$${coins.total_volume}`}</td>
        </tr>
    );
}

export default TableRow