
import { useState } from "react";
import { useCrud } from "../../hooks/UseCrud";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
    const { create } = useCrud();

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            setLoading(true);

            await create("subscription", {
                email: email.trim(),
            });

            setMessage("Tak for din tilmelding!");
            setEmail("");
        } catch (error) {
            setMessage(
                error.message || "Tilmeldingen mislykkedes."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <article className={styles.newsletterContainer}>
            <div className={styles.infoBox}>
                <p className={styles.header}>
                    En blog, der kan inspirere og hjælpe dig
                </p>

                <p className={styles.infoText}>
                    Få de nyeste opdateringer, tips og indsigter
                    direkte i din indbakke. Vores blog deler viden,
                    inspiration og historier, der kan hjælpe dig
                    med at tage dine projekter til det næste niveau.
                </p>
            </div>

            <form
                className={styles.newsletter}
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className={styles.tilmeld}
                    disabled={loading}
                >
                    {loading ? "Tilmelder..." : "Tilmeld nu"}
                </button>

                {message && (
                    <p className={styles.succes} role="status">
                        {message}
                    </p>
                )}
            </form>
        </article>
    );
};

export default Newsletter;
