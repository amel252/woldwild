import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
//  outlet sert a utiliser les routes enfants
import { Outlet } from "react-router-dom";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <Outlet />
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    {" "}
                    &copy; Copyright {new Date().getFullYear()} by worldWise Inc
                </p>
            </footer>
        </div>
    );
}

export default Sidebar;
