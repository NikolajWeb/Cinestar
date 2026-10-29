
import PageHeader from "../components/pageHeader/PageHeader";
import Newsletter from "../components/newsletter/Newsletter";
import SoMe from "../components/soMe/SoMe";

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
            <Newsletter />
            <SoMe />

        </article>
    );
};

export default Blog; 