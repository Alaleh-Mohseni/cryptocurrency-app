import { Link } from "react-router-dom"
import Logo from "../../assets/Easy-Crypto-Logo_1-1.png"

const HeaderHome = () => {
    return (
        <div className="container-fluid pe-5">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <div className="col-md-3 mb-2 mb-md-0">
                    <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="logo" width="180" height="120" />
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-link px-3 link-secondary">Home</li>
                    <li className="nav-link px-3">Features</li>
                    <li className="nav-link px-3"><Link className="text-decoration-none" to="/coins">Coins</Link></li>
                    <li className="nav-link px-3">Contact</li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    </Link>
                    <Link to="/register">
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HeaderHome