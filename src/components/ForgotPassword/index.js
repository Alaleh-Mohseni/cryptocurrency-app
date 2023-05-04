const ForgotPassword = () => {
    return (
        <main>
            <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center justify-content-center pt-5">
                <div className="container pt-5">
                    <div className="d-flex justify-content-center align-items-center pt-5">
                        <div xs={12} className="d-flex align-items-center justify-content-center col-5">
                            <div className="signin-inner my-3 my-lg-0 bg-white shadow-sm border rounded-4 border-light p-4 p-lg-5 w-100 fmxw-500">
                                <h3>Forgot your password?</h3>
                                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="floatingInput">Your Email</label>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-primary" type="submit">Recover Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForgotPassword