import { useCrud } from "../../../../hooks/UseCrud";
import { toast } from "react-toastify";
import styles from "./MessagesSection.module.css";

const MessagesSection = ({ messages = [] }) => {
    const { remove, update } = useCrud();

    const handleDelete = async (message) => {
        const confirmed = window.confirm(
            `Er du sikker på, at du vil slette beskeden fra "${message.name}"?`
        );

        if (!confirmed) return;

        try {
            await remove("message", message._id);

            toast.success("Beskeden blev slettet!", {
                autoClose: 3000,
            });
        } catch (error) {
            console.error("Kunne ikke slette beskeden:", error);

            toast.error(
                error?.message || "Kunne ikke slette beskeden.",
                {
                    autoClose: 3000,
                }
            );
        }
    };

    const handleStatusChange = async (message) => {
        try {
            await update("message", {
                id: message._id,
                status: !message.status,
            });

            toast.success("Status blev opdateret!", {
                autoClose: 2000,
            });
        } catch (error) {
            console.error("Kunne ikke opdatere status:", error);

            toast.error(
                error?.message || "Kunne ikke opdatere status.",
                {
                    autoClose: 3000,
                }
            );
        }
    };

    return (
        <section className={styles.messagesContainer}>
            <div className={styles.header}>
                <h2>Beskeder</h2>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Email</th>
                        <th>Emne</th>
                        <th>Beskrivelse</th>
                        <th>Status</th>
                        <th>Handlinger</th>
                    </tr>
                </thead>

                <tbody>
                    {messages.map((message) => (
                        <tr key={message._id}>
                            <td>{message.name}</td>

                            <td>{message.email}</td>

                            <td>{message.subject}</td>

                            <td>{message.description}</td>

                            <td>
                                <label className={styles.toggle}>
                                    <input
                                        type="checkbox"
                                        checked={!!message.status}
                                        onChange={() => handleStatusChange(message)}
                                    />

                                    <span className={styles.slider}></span>
                                </label>
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(message)}
                                >
                                    Slet
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {messages.length === 0 && (
                <p>Der er ingen beskeder endnu.</p>
            )}
        </section>
    );
};

export default MessagesSection;