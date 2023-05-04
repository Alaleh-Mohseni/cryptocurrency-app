import "./style.css"
import Logo from "../../assets/Easy-Crypto-Logo_1-1.png"

const Sidebar = () => {
    return (
        <div className="sidebar flex-shrink-1 px-3 pt-3 col-lg-2 bg-dark text-light">
            <div className="sidebar-logo pb-3">
                <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="logo" width="180" height="120" />
            </div>
            <div className="sidebar-list d-flex flex-column justify-content-between ps-2 pb-2 border-bottom">
                <ul>
                    <li>
                        <span><i className="fa fa-user-circle"></i></span>
                        <span className="ps-2">Profile</span>
                    </li>
                    <li>
                        <span><i className="fa fa-home"></i></span>
                        <span className="ps-2">Dashboard</span>
                    </li>
                    <li>
                        <span><i className="fa fa-wallet"></i></span>
                        <span className="ps-2">Wallet</span>
                    </li>
                    <li>
                        <span><i className="fa fa-bell"></i></span>
                        <span className="ps-2">Notification</span>
                    </li>
                    <li>
                        <span><i className="fa fa-arrow-right-arrow-left"></i></span>
                        <span className="ps-2">Trade</span>
                    </li>
                    <li>
                        <span><i className="fa fa-repeat"></i></span>
                        <span className="ps-2">Exchange</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-form ps-2 pt-2">
                <ul>
                    <li className="d-flex align-items-center">
                        <span><i className="fa fa-circle-info"></i></span>
                        <span className="ps-2">Information</span>
                    </li>
                    <li>
                        <span><i className="fa fa-bookmark"></i></span>
                        <span className="ps-2">News</span>
                    </li>
                    <li>
                        <span><i className="fa fa-sliders-h"></i></span>
                        <span className="ps-2">Account Settings</span>
                    </li>
                    <li>
                        <span><i className="fa fa-sign-out-alt"></i></span>
                        <span className="ps-2">Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5">
                <div className="d-flex flex-column align-items-center justify-content-center px-2 py-3 shadow-sm rounded-4 mx-2 bg-body">
                    <h6 className="fw-bold pb-1 text-dark">Help Center</h6>
                    <p className="help-text">Having trouble in EasyCrypto?</p>
                    <p className="help-text">Please contact us for more question.</p>
                    <button className="btn btn-primary text-capitalize btn-help">Go to help center</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar