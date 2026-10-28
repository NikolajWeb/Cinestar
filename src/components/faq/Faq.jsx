import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


import { useState } from "react";
import styles from "./Faq.module.css";

// Importér din dataloader her, hvis nødvendigt

const FAQ = ({ faqs = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <section className={styles.faqContainer}>
            <div className={styles.infoStart}>
                <p className={styles.heading}>
                    Ofte stillede spørgsmål
                </p>

                <h1 className={styles.header}>
                    De mest almindelige spørgsmål, vi får
                </h1>

                <p className={styles.infoText}>
                    Her finder du svar på de spørgsmål, vi oftest
                    bliver stillet om vores processer, tjenester og
                    produktioner. Har du brug for yderligere
                    information? Tøv ikke med at kontakte os!
                </p>
            </div>

            <div className={styles.faqList}>
                {faqs.slice(0, 4).map((faq, index) => (
                    <div
                        className={styles.faqItem}
                        key={faq._id}
                    >
                        <button
                            className={`${styles.question} ${openIndex === index ? styles.active : ""
                                }`}
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${faq._id}`}
                        >
                            <span>{faq.question}</span>

                            <span className={styles.icon}>
                                {openIndex === index ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </span>
                        </button>

                        <div
                            id={`faq-answer-${faq._id}`}
                            className={`${styles.answerWrapper} ${openIndex === index
                                ? styles.open
                                : ""
                                }`}
                            hidden={openIndex !== index}
                        >
                            <p className={styles.answer}>
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
