import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar bg-danger">
            <h1 className="display-1">EatHub<i className="fas fa-utensils"/></h1>
            <Link to="/search" className="navlink smallh1"><h1 className="display-4">Search</h1></Link>
            <Link to="/profile" className="navlink smallh1"><h1 className="display-4">Profile</h1></Link>
        </div>
    )
}

export default Navbar
