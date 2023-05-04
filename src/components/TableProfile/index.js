const TableProfile = ({ rows }) => {
    return (
        <div>
            <table className="table table-body table-hover table-borderless">
                <thead>
                    <tr className="table-body bg-light">
                        <th className="ps-4">Name</th>
                        <th>Assets Price</th>
                        <th>Change</th>
                        <th>Volume</th>
                        <th>Trade</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default TableProfile