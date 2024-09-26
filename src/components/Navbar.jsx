import {useState, useEffect} from 'react'

export default function Navbar(){

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">The Cozy Fork</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link" href="https://localhost:7091/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://localhost:7091/Menu">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://localhost:7091/Booking">Book a table</a>
                            </li>
                        </ul>
                        <div className="navbar-nav">
                            <button className="btn btn-primary my-1" style={{marginRight: 0.5 + 'rem', letterSpacing: 1 + 'px'}}>Sign In</button>
                            <button className="btn btn-outline-primary my-1"  style={{letterSpacing: 1 + 'px'}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
