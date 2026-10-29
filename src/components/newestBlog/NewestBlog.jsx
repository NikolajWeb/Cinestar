import styles from "./NewestBlog.module.css";
import { useNavigate } from "react-router-dom";

const NewestBlog = ({ blogs }) => {
    const navigate = useNavigate();

    // Finder det nyeste blogindlæg
    const newestBlog = [...blogs].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )[0];

    if (!newestBlog) return null;

    return (
        <article className={styles.newestBlogContainer}>
            <div className={styles.infoStart}>
                <p className={styles.heading}>Blog</p>
                <h1 className={styles.header}>Vores seneste blog</h1>
                <p className={styles.infoText}>
                    Hold dig opdateret med de seneste nyheder, indblik og historier
                    fra Cinestar. Vi deler inspiration, tips og bag kulisserne
                    fra vores spændende projekter og produktioner.
                </p>
            </div>

            <div className={styles.blogContainer}>
                <img
                    src={newestBlog.image}
                    alt={newestBlog.title}
                    className={styles.img}
                />

                <p className={styles.blogTitle}>
                    {newestBlog.title}
                </p>

                <p className={styles.blogTeaser}>
                    {newestBlog.teaser}
                </p>

                <p className={styles.time}>
                    Oprettet d. {new Date(newestBlog.created).toLocaleDateString("da-DK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
            </div>

        </article>
    );
};

export default NewestBlog;