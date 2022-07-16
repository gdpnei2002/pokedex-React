/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {
    const{favoritePokemons } = useContext (FavoriteContext);
    const logoImg = "https://crisgon.github.io/pokedex/src/images/logo.png"
    
    return(
        <nav>
            <div>
                <img src={logoImg}
                className="navbar-img"/>
            </div>
            <div>{favoritePokemons.length} 🧡</div>
        </nav>
    )
}

export default Navbar