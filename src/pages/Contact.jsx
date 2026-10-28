
import PageHeader from "../components/pageHeader/PageHeader";
import ContactComp from "../components/contactComp/ContactComp";

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
            <ContactComp
             Heading={"Kontakt"}
             Header={"Tøb ikke med at tage kontakt"}
             InfoText={"Har du spørgsmål eller brug for mere information om vores tjenester og processer? Vores team står klar til at hjælpe dig. Kontakt os, og lad os tage en uforpligtende samtale om dine behov og idéer."}
             hasBackground={true}
            />

        </article>
    );
};

export default Contact; 