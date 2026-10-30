
import { useState, useEffect } from "react";
import styles from "./Statements.module.css";
import { MdFormatQuote } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Statements = ({ statements = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Automatisk rotation hvert 5. sekund
    useEffect(() => {
        if (statements.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                (prev + 1) % statements.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [statements.length]);

    // Ingen anmeldelser
    if (!statements.length) return null;

    // Hent forrige og næste anmeldelse
    const getStatement = (offset) => {
        const index =
            (activeIndex + offset + statements.length) %
            statements.length;

        return statements[index];
    };

    const renderCard = (statement, position) => {
        if (!statement) return null;

        return (
            <article
                className={`${styles.sliderCards} ${styles[position]}`}
                key={position}
            >
                <div className={styles.stars}>
                    {[...Array(Number(statement.rating) || 0)].map(
                        (_, index) => (
                            <FaStar key={index} />
                        )
                    )}
                </div>

                <p className={styles.cardText}>
                    "{statement.text}"
                </p>

                <div className={styles.grid}>
                    <div className={styles.personInfo}>
                        <h2 className={styles.name}>
                            {statement.name}
                        </h2>

                        <p className={styles.role}>
                            {statement.position}
                        </p>
                    </div>

                    <MdFormatQuote className={styles.icon} />
                </div>
            </article>
        );
    };

    return (
        <section className={styles.statementsContainer}>

            <div className={styles.infoStart}>
                <p className={styles.heading}>
                    Udtalelser
                </p>

                <h1 className={styles.header}>
                    Hvad siger vores samarbejdspartnere om os?
                </h1>

                <p className={styles.infoText}>
                    “Cinestar er en fantastisk samarbejdspartner,
                    der formår at kombinere kreativitet med
                    professionalisme. Deres evne til at skabe
                    unikke og engagerende produktioner er
                    imponerende, og resultatet taler altid
                    for sig selv.”
                </p>
            </div>

            <div className={styles.sliderContainer}>

                <div className={styles.sliderTrack}>

                    {statements.length > 1 &&
                        renderCard(getStatement(-1), "previous")
                    }

                    {renderCard(getStatement(0), "active")}

                    {statements.length > 1 &&
                        renderCard(getStatement(1), "next")
                    }

                </div>

            </div>

        </section>
    );
};

export default Statements;
