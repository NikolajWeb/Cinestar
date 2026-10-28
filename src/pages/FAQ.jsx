
import { useLoaderData } from "react-router-dom";

// Components
import PageHeader from "../components/pageHeader/PageHeader";
import Faq from "../components/faq/Faq";
import SoMe from "../components/soMe/SoMe";

const FAQ = () => {
    const { faqs } = useLoaderData();

    return (
        <article>
            <PageHeader
                Title="Faq"
                Breadcrum={[
                    { label: "Forside", path: "/" },
                    { label: "FAQ", path: "/faq" },
                ]}
            />
            <Faq faqs={faqs} />
            <SoMe />
        </article>
    );
};

export default FAQ;
