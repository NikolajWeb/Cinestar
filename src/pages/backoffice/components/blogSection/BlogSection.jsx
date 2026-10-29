import { useCrud } from "../../../../hooks/UseCrud";
import { toast } from "react-toastify";
import styles from "./BlogSection.module.css";

const BlogsSection = ({ blogs = [], onAdd, onEdit }) => {
  const { remove } = useCrud();

  const handleDelete = async (blog) => {
    const confirmed = window.confirm(
      `Er du sikker på, at du vil slette "${blog.title}"?`
    );

    if (!confirmed) return;

    try {
      await remove("blog", blog._id);

      toast.success("Blogindlægget blev slettet!", {
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Kunne ikke slette blogindlægget:", error);

      toast.error(
        error?.message || "Kunne ikke slette blogindlægget.",
        {
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Blogindlæg</h2>

        <button type="button" onClick={onAdd}>
          Tilføj blogindlæg
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Billede</th>
            <th>Teaser</th>
            <th>Beskrivelse</th>
            <th>Oprettet</th>
            <th>Handlinger</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>

              <td>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width="60"
                  />
                )}
              </td>

              <td>{blog.teaser}</td>

              <td>
                {blog.description
                  ? `${blog.description.slice(0, 120)}${
                      blog.description.length > 120 ? "..." : ""
                    }`
                  : ""}
              </td>

              <td>
                {blog.created
                  ? new Date(blog.created).toLocaleDateString("da-DK")
                  : "Ukendt"}
              </td>

              <td>
                <button
                  type="button"
                  onClick={() => onEdit(blog)}
                >
                  Rediger
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(blog)}
                >
                  Slet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {blogs.length === 0 && (
        <p>Der er ingen blogindlæg endnu.</p>
      )}
    </section>
  );
};

export default BlogsSection;
