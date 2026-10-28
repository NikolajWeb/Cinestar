
import { useLoaderData } from "react-router-dom";

// Components
import Faq from "../components/faq/Faq";
import SoMe from "../components/soMe/SoMe";

const FAQ = () => {
    const { faqs } = useLoaderData();

    return (
        <article>
            <Faq faqs={faqs} />
            <SoMe />
        </article>
    );
};

export default FAQ;
