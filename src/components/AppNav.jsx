import styles from "./AppNav.module.css";
// <NavLink> : comme Link, mais détecte automatiquement si le lien correspond à la page actuelle afin de pouvoir le mettre en évidence.meme changé le background
import { NavLink } from "react-router-dom";

function AppNav() {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="cities">Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries">Countries</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default AppNav;

// ✅ Link : pour un lien normal (bouton "Retour", "Voir le produit", etc.).
// ✅ NavLink : pour les menus de navigation (navbar, sidebar, onglets), car il permet de mettre en évidence la page courante.
