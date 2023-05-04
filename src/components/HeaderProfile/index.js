const HeaderProfile = ({ coin }) => {
    return (
        <>
            <div className="d-flex align-items-center col-lg-6">
                <div className="">
                    <p className="fa-bolder fs-1">${coin[0].current_price}</p>
                </div>
                <div className="ms-4">
                    {coin[0].price_change_percentage_24h < 0 ? (
                        <p className="red px-2 text-white rounded-5">{coin[0].price_change_percentage_24h}%</p>
                    ) : (
                        <p className="green px-2 text-white rounded-5">+{coin[0].price_change_percentage_24h}%</p>
                    )
                    }
                </div>
            </div>
            <div className="col-lg-6">
                <div className="text-center fw-bold fs-4">
                    <p className="text-capitalize">{coin[0].id} USD
                        <span className="text-uppercase">({coin[0].symbol}-USD)</span>
                    </p>
                </div>
            </div>
            <div className="d-flex align-items-center col-lg-6 fw-semibold text-secondary pt-2">
                <div className="profile-list">
                    <p>Summary</p>
                </div>
                <div className="profile-list ps-3">
                    <p>Chart</p>
                </div>
                <div className="profile-list ps-3">
                    <p>Conversations</p>
                </div>
                <div className="profile-list ps-3">
                    <p>Historical Data</p>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center col-lg-6 changes">
                <div className="shadow-sm rounded-2 px-4 py-2">
                    <span><i className="fa fa-calendar pe-3"></i></span>
                    <span>{coin[0].last_updated}</span>
                </div>
            </div>
        </>
    )
}

export default HeaderProfile