import styles from "./PageFooter.module.css";
import logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img
                src={logo}
                alt="Logo"
                className={styles.logo}
            />
            <p className={styles.copyright}>COPYRIGHT 202 © CINESTAR | POWERED BY ROMETHEM E STUDIO</p>
        </footer>
    );
};

export default Footer;