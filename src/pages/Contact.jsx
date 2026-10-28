
import PageHeader from "../components/pageHeader/PageHeader";

const Contact = () => {

    return (
        <article>
            <PageHeader
                Title="Kontakt "
                Breadcrum={[
                    { label: "Forside", path: "/" },
                    { label: "Kontakt", path: "/contact" },
                ]}
            />

        </article>
    );
};

export default Contact; 