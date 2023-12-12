import { useState } from "react";
import "./CardsBooks.css"
import { CiShoppingCart } from "react-icons/ci";

const CardBooks = (props) => {
    return (
        <div class="card-book">
            <div class="card-title">{props.title}</div>
            <div class="card-subtitle">{props.subtitle}</div>
            <div class="card-footer">
                <div class="card-price"><span>$</span>{props.price}</div>

                <button class="card-btn">
                <CiShoppingCart className="imgs-links" />
                </button>
            </div>
        </div>
    )
}

export default CardBooks;