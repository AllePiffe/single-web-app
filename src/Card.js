// create card Boostrap https://getbootstrap.com/docs/4.0/components/card/
import React from "react";
import cardImg from "../src/images/imgecard.png";

function Card(attributi) {
    let text_p = "Some quick example text to build on the card title and make up the bulk of the card's content."
    let text_h5 = "Card Title"
    return (
        <div className="card w-c">
            <img src={cardImg} alt="CodingDS IMG"></img>
            <div className="card-body">
                <h5 class="card-title">{text_h5}</h5>
                <p className="card-text">{text_p}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;