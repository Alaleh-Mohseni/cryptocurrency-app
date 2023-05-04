const TableProfileRow = ({ market }) => {
    return (
        <tr className="coin">
            <td className="ps-4">
                <img src={market.image} alt="crypto"/>
                <span className="fw-semibold pe-2">{market.name}</span>
                <span className="text-secondary text-uppercase">{market.symbol}</span>
            </td>
            <td>{`$${market.current_price}`}</td>
            <td>
                {market.price_change_percentage_24h < 0 ? (
                    <p className="text-danger">{market.price_change_percentage_24h}%</p>
                ) : (
                    <p className="text-success">+{market.price_change_percentage_24h}%</p>
                )
                }
            </td>
            <td>{`$${market.total_volume}`}</td>
            <td>
                <button className="btn btn-primary">Trade</button>
            </td>
        </tr>
    );
}

export default TableProfileRow