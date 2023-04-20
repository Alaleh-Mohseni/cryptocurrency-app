// import axios from "axios"
// import { useEffect } from "react"
// import { Navigate, useNavigate } from "react-router-dom"

function Profile() {
    // const navigate = useNavigate()
    // const token = localStorage.getItem('token')

    // function handleLogOut() {
    //     localStorage.removeItem('token')
    //     navigate('/login')
    // }

    // useEffect(() => {
    //     if(!token) {
    //         return
    //     }

    //     axios.post('...', null, {headers: {
    //         'Authorization': token
    //     }})
    // }, [])

    // if (!token) {
    //     return <Navigate to="/login" />
    // }
    return (
        <div className="profile">
            <button className="btn">Log out</button>
        </div>

    )
}

export default Profile