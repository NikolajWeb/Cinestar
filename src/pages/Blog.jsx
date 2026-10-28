
import PageHeader from "../components/pageHeader/PageHeader";

const Blog = () => {

    return (
        <article>
            <PageHeader
                Title="Blog Arkiv "
                Breadcrum={[
                    { label: "Forside", path: "/" },
                    { label: "Blog Arkiv", path: "/blog" },
                ]}
            />


        </article>
    );
};

export default Blog; 