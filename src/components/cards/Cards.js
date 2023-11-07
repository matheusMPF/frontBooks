import React from "react";
import "./Cards.css"
import { Link } from "react-router-dom";

const Cards = (props) => {
    return (

        <Link to={props.link} className="custom-link">
            <li className="card">
                <div className="card-info">
                    <span className="span-title-card">{props.info}</span>
                </div>

                <img className="img-card" src={props.srcImg} alt={props.altImg} />

                <p className="description">{props.description}</p>
            </li>
        </Link>
    )

}

export default Cards;