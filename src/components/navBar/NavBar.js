import React from "react";
import { Link } from "react-router-dom";
import { IoIosHome} from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

import "../../Styles/NavBar.css"
// import Logo from "../imgs/omega-minimal.png"

const NavBar = () => {
    return (
        <nav>
            {/* <div className="area-logo"><img className="logo" src={Logo} alt="Logo omegas"></img></div> */}

            <h1>Omegas Books</h1>

            <div className="area-routes">
                <ul>
                    <Link to="/" className="link"><li><IoIosHome className="imgs-links" />Home</li></Link>
                    <Link to="/Cart" className="link"><li><CiShoppingCart className="imgs-links" />Carrinho</li></Link>
                </ul>

            </div>
            <div className="area-search">
                <input type="text" className="search" placeholder="Buscar..."/>
                <FaSearch size="1.5em" className="search-icon" />
            </div>
        </nav>
    );
}

export default NavBar;