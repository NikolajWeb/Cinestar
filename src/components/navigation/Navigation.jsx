import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import burgerIcon from "../../assets/icons/burger_menu.svg";
import xIcon from "../../assets/icons/x_icon.svg";
import logo from "../../assets/logo.png"

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navigation}>

            {!menuOpen && (
                <img
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                />
            )}

            <div className={styles.burger} onClick={toggleMenu}>
                <img
                    src={menuOpen ? xIcon : burgerIcon}
                    alt={menuOpen ? "Luk menu" : "Åbn menu"}
                    className={menuOpen ? styles.closeIcon : styles.burgerIcon}
                />
            </div>

            <div
                className={`${styles.navOverlay} ${menuOpen ? styles.navOverlayActive : ""
                    }`}
            >

                <ul className={styles.navLinks}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Forside
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Blog
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Faq
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Kontakt
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                            onClick={closeMenu}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;