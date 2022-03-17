import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

const Navbar = () => {
    const{favoritePokemons } = useContext (FavoriteContext);
        const logoImg = "https://crisgon.github.io/pokedex/src/images/logo.png"
        const logobalImg = "https://icon-library.com/images/pokedex-icon/pokedex-icon-13.jpg"
    return(
        <nav>
            <div>
                <img src={logoImg}
                className="navbar-img"
                />
                <a href="#">
                <img src={logobalImg}
                className="logobalImg"
                /></a>
            </div>
            <div>{favoritePokemons.length} 🧡</div>
        </nav>
    )
}

export default Navbar