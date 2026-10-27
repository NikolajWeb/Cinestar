import styles from "./Story.module.css";
import CEO from "../../assets/filming.jpg"

const Story = () => {
    return (
        <section className={styles.StoryContainer}>
            <div className={styles.infoHeader}>
                <p className={styles.heading}>Historien</p>
                <h1 className={styles.header}>Historien bag cinestar</h1>

                <p className={styles.infoText}>
                    Cinestar blev grundlagt med en passion for at fortælle historier, der fanger og bevæger sit publikum. Virksomheden begyndte som en lille uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og visuelt engagerende indhold.
                </p>
            </div>

            <div className={styles.ceoContainer}>
                <h2 className={styles.ceoName}>Dyas Kardinal</h2>
                <p className={styles.ceoTitle}>Ceo af cinestar</p>
                <img src={CEO} alt="CEO" className={styles.ceoIMG} />
            </div>
        </section>
    );
};

export default Story;