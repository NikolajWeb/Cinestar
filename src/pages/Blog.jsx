
import PageHeader from "../components/pageHeader/PageHeader";
import BlogCard from "../components/blogCard/BlogCard";
import Newsletter from "../components/newsletter/Newsletter";
import SoMe from "../components/soMe/SoMe";
import { useLoaderData } from "react-router-dom";


const Blog = () => {
        const { blogs } = useLoaderData();


    return (
        <article>
            <PageHeader
                Title="Blog Arkiv "
                Breadcrum={[
                    { label: "Forside", path: "/" },
                    { label: "Blog Arkiv", path: "/blog" },
                ]}
            />
            <BlogCard blogs={blogs}/>
            <Newsletter />
            <SoMe />

        </article>
    );
};

export default Blog; 