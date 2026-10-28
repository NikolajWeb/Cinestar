
import { useState } from "react";
import styles from "./ContactComp.module.css";
import { useCrud } from "../../hooks/UseCrud.jsx";

// Icons
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const ContactComp = ({
    Heading,
    Header,
    InfoText = [],
    hasBackground = true,
}) => {
    const { create } = useCrud();

    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const closeStatus = () => {
        setStatus({ type: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setStatus({ type: "", message: "" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            description: formData.get("description"),
        };

        try {
            await create("message", data);

            setStatus({
                type: "success",
                message:
                    "Tak for din besked! Vi vender tilbage hurtigst muligt.",
            });

            form.reset();
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error.message ||
                    "Beskeden kunne ikke sendes. Prøv igen senere.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const infoText = Array.isArray(InfoText)
        ? InfoText.join(" ")
        : InfoText;

    return (
        <section
            className={`${styles.ContactContainer} ${
                hasBackground ? styles.withBackground : ""
            }`}
        >
            <div className={styles.infoStart}>
                <p className={styles.heading}>{Heading}</p>
                <h1 className={styles.header}>{Header}</h1>
                <p className={styles.infoText}>{infoText}</p>
            </div>

            <div className={styles.contactInfo}>
                <div className={styles.infoCards}>
                    <FaPhone />
                    <p className={styles.cardInfo}>
                        +45 12 34 56 78
                    </p>
                </div>

                <div className={styles.infoCards}>
                    <FaMapMarkerAlt />
                    <p className={styles.cardInfo}>
                        Fotovej 66, 8456 Cineby
                    </p>
                </div>

                <div className={styles.infoCards}>
                    <IoMailSharp />
                    <p className={styles.cardInfo}>
                        cinestar@production.dk
                    </p>
                </div>
            </div>

            <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
            >
                <div className={styles.formGroup}>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Dit navn"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="Din e-mailadresse"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        placeholder="Hvad drejer din henvendelse sig om?"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <textarea
                        id="contact-description"
                        name="description"
                        placeholder="Skriv din besked her..."
                        rows={6}
                        required
                    />
                </div>

                {status.message && status.type === "error" && (
                    <p
                        className={styles.errorMessage}
                        role="alert"
                    >
                        {status.message}
                    </p>
                )}

                <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Sender..." : "Send besked"}
                </button>
            </form>

            {status.message && status.type === "success" && (
                <div
                    className={styles.successOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="success-title"
                >
                    
                    <div className={styles.successContent}>
                        <h2 id="success-title">
                            Besked sendt!
                        </h2>

                        <p>{status.message}</p>

                        <button
                            type="button"
                            className={styles.successCloseButton}
                            onClick={closeStatus}
                        >
                            Luk
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactComp;
