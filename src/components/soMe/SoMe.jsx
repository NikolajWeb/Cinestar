
import styles from "./SoMe.module.css";

// Icons
import Facebook from "../../assets/icons/facebook.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import YouTube from "../../assets/icons/youtube.svg";

const SoMe = () => {
    return (
        <section className={styles.SoMeContainer}>
            <h1 className={styles.heading}>
                HAR DU EN IDÉ I TANKERNE? LAD OS STARTE DIT PROJEKT SAMMEN
            </h1>

            <p className={styles.info}>
                Cinestar Studio <br />
                +45 12 34 56 78 <br />
                cinestar@production.dk
            </p>


            <div className={styles.grid}>
                <div className={styles.link}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" className={styles.icon} />
                        <span className={styles.linkText}>Facebook</span>
                    </a>
                </div>

                <div className={styles.link}>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <span className={styles.linkText}>Twitter</span>
                    </a>
                </div>

                <div className={styles.link}>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" className={styles.icon} />
                        <span className={styles.linkText}>LinkedIn</span>
                    </a>
                </div>

                <div className={styles.link}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" className={styles.icon} />
                        <span className={styles.linkText}>Instagram</span>
                    </a>
                </div>

                <div className={styles.link}>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src={YouTube} alt="YouTube" className={styles.icon} />
                        <span className={styles.linkText}>YouTube</span>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default SoMe;
