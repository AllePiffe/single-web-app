import React from "react";

function Nav(attributi) {
    const henderClik = (event) => {
        event.preventDefault()
        attributi.calback(event.target.text);

    }

    return (
        <ul className="navbar navbar-expand navbar-dark bg-dark">
            <li className="nav-item">
                <a className={`nav-link text-white ${attributi.state.page.hash === 'home' ? 'active' : ''}`} href="#/Home" onclik={henderClik}>Home</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link text-white ${attributi.state.page.hash === 'about' ? 'active' : ''}`} href="#/About" onclik={henderClik}>About</a>
            </li>
        </ul>
    )

}

export default Nav;