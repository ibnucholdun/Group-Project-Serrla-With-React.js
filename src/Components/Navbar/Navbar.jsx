import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../../Assets/images/icon-serrla.png'
import './Navbar.css'

const Navbar = ({nav1, nav2, nav3, nav4, route1, route2, route3, route4, route5 = "/"}) => {
  return (
    <header className="sticky-top">
        <nav className="navbar navbar-expand-lg p-2">
            <div className="container">
                <Link to={route5} className="navbar-brand"><img src={Logo} alt="Logo" width="50px" className="d-inline-block align-text-top"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item h5 m-0"><Link to={route1} className="nav-link nav-text fw-normal">{nav1}</Link></li>
                        <li className="nav-item h5 m-0"><Link to={route2} className="nav-link nav-text fw-normal">{nav2}</Link></li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item h5 me-3"><Link to={route3} className="nav-link sign-in fw-normal">{nav3}</Link></li>
                        <li className="nav-item h5"><Link to={route4} className="nav-link sign-up fw-normal">{nav4}</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

Navbar.propTypes = {
    nav1: PropTypes.string.isRequired,
    nav2: PropTypes.string.isRequired,
    nav3: PropTypes.string,
    nav4: PropTypes.string.isRequired,
    route1: PropTypes.string.isRequired,
    route2: PropTypes.string.isRequired,
    route3: PropTypes.string,
    route4: PropTypes.string.isRequired
}
export default Navbar