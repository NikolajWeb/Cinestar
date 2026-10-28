import styles from "./PageHeader.module.css";
import { Link } from "react-router-dom";

const PageHeader = ({ Title, Breadcrum = [] }) => {
    return (
        <section className={styles.PageHeader}>
            <h1 className={styles.PageHeaderTitle}>
                {Title}
            </h1>

            <nav
                className={styles.PageHeaderBreadcrum}
                aria-label="Breadcrumb"
            >
                <ol>
                    {Breadcrum.map((item, index) => (
                        <li key={item.label}>
                            {index > 0 && (
                                <span aria-hidden="true"> / </span>
                            )}

                            {item.path && index !== Breadcrum.length - 1 ? (
                                <Link to={item.path}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </section>
    );
};

export default PageHeader;
