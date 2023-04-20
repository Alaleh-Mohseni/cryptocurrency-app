import './style.css'

function Error() {
    return (
        <div className="error-box">
          <div className="dot"></div>
          <div className="dot two"></div>
          <div className="face2">
            <div className="eye"></div>
            <div className="eye right"></div>
            <div className="mouth sad"></div>
          </div>
          <div className="shadow move"></div>
          <div className="message">
            <h1 className="alert">Error!</h1>
            <p>oh no, something went wrong.</p>
          </div>
          <button className="button-box">
            <h1 className="red">try again</h1>
          </button>
        </div>
      )
}

export default Error