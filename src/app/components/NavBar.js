import React from 'react';
import logo from '../assets/images/avatars.svg'
import '../assets/css/navbar.css'
import {Link, useLocation} from "react-router-dom";
import i18next from '../../i18n'

const NavBar = () =>{
    const location = useLocation();
    return(
        <nav className="navbar navbar-expand-lg navbar-dark py-4 bg-secondary" id='mainNav'>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Software developer" width="30" height="30" className="logo"/>
                    {process.env.REACT_APP_RAW_URI}</a>
                <div className="d-flex flex-row-reverse">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className="d-flex justify-content-end">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className={location.pathname === '/' ? "nav-link active" : "nav-link" }
                                        to="/"
                                    >
                                        {i18next.t('home')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={location.pathname === '/blog' ? "nav-link active" : "nav-link" }
                                        to="/blog"
                                    >
                                        {i18next.t('blog')}
                                    </Link>
                                </li>
                                {localStorage.token && <li className="nav-item">
                                    <Link
                                      className={"nav-link"}
                                      onClick={()=>{
                                          localStorage.removeItem('token')
                                      }}
                                      to="/login"
                                    >
                                        {i18next.t('logout')}
                                    </Link>
                                </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;