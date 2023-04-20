import { useState } from "react";
import { Link } from "react-router-dom"
import Image from "../../assets/login.jpg"

const Login = () => {
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });

    const [formError, setFormError] = useState({
        email: "",
        password: "",
    });

    const handleUserInput = (name, value) => {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };

    const validateFormInput = (event) => {
        event.preventDefault();

        let inputError = {
            email: "",
            password: "",
        }

        if (!formInput.email && !formInput.password) {
            setFormError({
                ...inputError,
                email: "Enter valid email address",
                password: "Password should not be empty",
            });
            return
        }

        setFormError(inputError)
    };



    return (
        <main>
            <div className="container col-xl-10 col-xxl-8 pt-5">
                <div className="row align-items-center g-lg-5 pt-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={Image} class="d-block mx-lg-auto img-fluid img-logo" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-4 bg-body-tertiary" onSubmit={validateFormInput}>
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-5 text-center fs-1">Login</h1>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={formInput.email}
                                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                                <p className="text-danger">{formError.email}</p>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={formInput.password}
                                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                <p className="text-danger">{formError.password}</p>
                            </div>
                            <div className="checkbox mb-3 d-flex justify-content-between">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                                <span className="text-body-secondary"><Link className="text-decoration-none" to="">Forgot Password?</Link></span>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                            <hr className="mb-3 mt-4" />
                            {/* <p className="text-body-secondary"><Link className="text-decoration-none" to="">Forgot Password?</Link></p> */}
                            <p className="text-body-secondary">Don't have an account?<Link className="text-decoration-none" to="/register"> Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login