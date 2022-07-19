import React from "react";

function Navbar(attr){

    const handlerClick = (event) => {
        attr.clickCallback(event.target.innerText);
        event.preventDefault()
    }


    return(
        <ul className="navbar navbar-expand navbar-dark bg-dark">
            {attr.label.map((obj) => (
            <li key={obj.name} className="nav-item">
                <a onClick={handlerClick}
                    className={`text-white nav-link ${attr.state.page.hash === obj.name ? 'active' : ''}`}
                    href={`#/${obj.name}`}>{obj.name}</a>
            </li>
            ))}
        </ul>
    )
}
export default Navbar;
