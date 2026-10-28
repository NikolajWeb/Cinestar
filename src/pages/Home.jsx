
// Components
import AwardHeader from "../components/awardHeader/AwardHeader";
import Portfolio from "../components/portfolio/Portfolio";
import ProjectsComp from "../components/projectsComp/ProjectsComp";
import SoMe from "../components/soMe/SoMe";
import Services from "../components/services/Services";
import Story from "../components/story/Story"
import ContactComp from "../components/contactComp/ContactComp";

const Home = () => {

    return (
        <article>
        <AwardHeader/>
        <Portfolio/>
        <ProjectsComp/>
        <Services/>
        <Story/>
        <ContactComp
             Heading={"Kontakt"}
             Header={"Book en samtale med os"}
             InfoText={"Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!"}
            />
        <SoMe/>
        </article>
    );
};

export default Home; 