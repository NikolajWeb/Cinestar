import styles from "../blogDetails/BlogDetails.module.css"
import PageHeader from "../pageHeader/PageHeader";

import { useLoaderData, useParams } from "react-router-dom";

const BlogDetail = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const blogs = Array.isArray(data)
        ? data
        : data?.blogs;

    if (!Array.isArray(blogs)) {
        console.error("Uventet data fra loader:", data);
        return <p>Blogdata kunne ikke indlæses.</p>;
    }

    const blog = blogs.find(
        (blog) => String(blog._id) === id
    );

    if (!blog) {
        return <p>Bloggen blev ikke fundet.</p>;
    }

    return (
        <article>
            <PageHeader
                Title="Blog Arkiv "
                Breadcrum={[
                    { label: "Forside", path: "/" },
                    { label: "Blog Arkiv", path: "/blog" },
                    { label: "Blog", path: "/blog" },
                ]}
            />
            <div className={styles.blogContainer}>
                <img src={blog.image} alt={blog.title} className={styles.img} />
                <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.time}>
                    Oprettet d. {new Date(blog.created).toLocaleDateString("da-DK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>

                <div className={styles.context}>
                    {blog.description
                        ?.split(".")
                        .filter(sentence => sentence.trim() !== "")
                        .map((sentence, index) => (
                            <p key={index}>{sentence.trim()}.</p>
                        ))}
                </div>

            </div>
        </article>
    );
};

export default BlogDetail;
