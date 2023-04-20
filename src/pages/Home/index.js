import HeaderHome from "../../components/HeaderHome"
import HomeImage from "../../assets/home.jpg"

const Home = () => {
    return (
        <div className="Home">
            <HeaderHome/>
            <main>
                <div className="container col-xxl-8 px-4 pt-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={HomeImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="800" height="600" loading="lazy" />
                        </div>
                        <div className="col-lg-6 pt-5">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-5">Cryptocurrency Exchange</h1>
                            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start pt-4">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Get Started</button>
                                <button type="button" className="btn btn-outline-primary btn-lg px-4">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home