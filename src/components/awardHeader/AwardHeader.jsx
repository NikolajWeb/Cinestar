import styles from "./AwardHeader.module.css";
import StudioBG from "../../assets/studio.jpg"
import Award1 from "../../assets/awards/award1.png"
import Award2 from "../../assets/awards/award2.png"
import Award3 from "../../assets/awards/award3.png"

const AwardHeader = () => {
    return (
        <section className={styles.awardContainer}>

            <div className={styles.headerContainer}>
                <p className={styles.name}>Cinestar Studio</p>
                <h1 className={styles.headerTitle}>Film & TV <br /><span className={styles.orangeText}>Produktion</span></h1>
                <p className={styles.infoText}>Vi skaber levende fortællinger, der fanger dit publikum. Fra ide til færdigt produkt leverer vi professionelle film- og tv- løsninger, der gør din historie uforgelmmelig.</p>
            </div>

            <div className={styles.awards}>
                <img src={Award1} alt="Sun Dance" />
                <img src={Award2} alt="Winner" />
                <img src={Award3} alt="Sun Dance" />
            </div>
        </section>
    );
};

export default AwardHeader;