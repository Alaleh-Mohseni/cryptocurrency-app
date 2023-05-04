const Table = ({ rows }) => {
    return (
        <table className="table table-body table-hover">
            <thead>
                <tr className="table-body">
                    <th>#</th>
                    <th>logo</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>24h %</th>
                    <th>Market Cap</th>
                    <th>Volume (24h)</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Table