import HeaderRow from "../HeaderRow";

const Table = ({ rows }) => {
    return (
        <div>
            <table className="table table-body table-hover">
                <HeaderRow />
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default Table