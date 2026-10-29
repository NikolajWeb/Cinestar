import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./Backoffice.module.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import BlogsSection from "./components/blogSection/BlogSection";
import BlogForm from "./forms/BlogForm";

const Backoffice = () => {
  const {
    blogs = [],
  } = useLoaderData();

  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleAdd = () => {
    setSelectedBlog(null);
    setShowForm(true);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedBlog(null);
  };

  return (
    <article className={styles.backoffice}>
      <h1 className={styles.header}>
        DASHBOARD
      </h1>

      <BlogsSection
        blogs={blogs}
        onAdd={handleAdd}
        onEdit={handleEdit}
      />

      {showForm && (
        <BlogForm
          blog={selectedBlog}
          onClose={handleClose}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </article>
  );
};

export default Backoffice;