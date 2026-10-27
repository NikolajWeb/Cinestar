
import { useLoaderData } from "react-router-dom";
import styles from "./Backoffice.module.css";

// Components
import BlogsSection from "./components/blogSection/BlogSection";

const Backoffice = () => {
  const { blogs = [], faqs = [], reviews = [] } = useLoaderData();

  const handleAdd = () => {
    console.log("Tilføj blogindlæg");
  };

  const handleEdit = (blog) => {
    console.log("Rediger blogindlæg:", blog);
  };

  return (
    <article className={styles.backoffice}>
      <h1 className={styles.header}>DASHBOARD</h1>

      <BlogsSection
        blogs={blogs}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />
    </article>
  );
};

export default Backoffice;
