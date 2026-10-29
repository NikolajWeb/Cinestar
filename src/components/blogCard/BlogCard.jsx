
import styles from "./BlogCard.module.css";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blogs }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.blogGrid}>
            {blogs.map((blog) => (
                <article
                    className={styles.blogCardContainer}
                    key={blog._id}
                >
                    <div className={styles.card}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                        />

                        <div className={styles.infoBox}>
                            <p className={styles.header}>
                                {blog.title}
                            </p>

                            <p className={styles.teaser}>
                                {blog.teaser}
                            </p>
                        </div>

                        <button
                            className={styles.button}
                            onClick={() =>
                                navigate(`/blog/${blog._id}`)
                            }
                        >
                            Læs mere
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default BlogCard;
