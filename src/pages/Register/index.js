import { useState } from "react"
import { Link } from "react-router-dom";
import CryptoImage from "../../assets/signup.jpg"

const Register = () => {
    const [formInput, setFormInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formError, setFormError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }

        if (!formInput.username && !formInput.email && !formInput.password) {
            setFormError({
                ...inputError,
                username: "Enter your name",
                email: "Enter valid email address",
                password: "Password should not be empty",
            });
            return
        }

        if (formInput.confirmPassword !== formInput.password) {
            setFormError({
                ...inputError,
                confirmPassword: "Password and confirm password should be same",
            });
            return;
        }

        setFormError(inputError)
    };

    return (
        <main>
            <div className="container col-xl-10 col-xxl-8 pt-5">
                <div className="row align-items-center g-lg-5 pt-5">
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 shadow-sm rounded-4 border border-light bg-body-tertiary" onSubmit={validateFormInput}>
                            <h3 className="display-4 fw-bold fs-2 lh-1 text-body-emphasis mb-5 text-center">Create an account</h3>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="username"
                                    name="username"
                                    value={formInput.username}
                                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                                />
                                <label htmlFor="floatingInput">Name</label>
                                <p className="text-danger">{formError.username}</p>
                            </div>
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
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="confirmPassword"
                                    value={formInput.confirmPassword}
                                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                                />
                                <label htmlFor="floatingPassword">Confirm Password</label>
                                <p className="text-danger">{formError.confirmPassword}</p>
                            </div>
                            <div className="checkbox mb-3">
                                <label htmlFor="terms">
                                    <input type="checkbox" value="terms" className="me-2" />I agree to the terms and conditions
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit" value="submit">Sign up</button>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-start align-items-center mt-4">
                                <span className="fw-normal">
                                    Already have an account?
                                    <Link className="text-decoration-none" to="/login"> Login here</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={CryptoImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register