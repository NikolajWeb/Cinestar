
// Components
import AwardHeader from "../components/awardHeader/AwardHeader";
import Portfolio from "../components/portfolio/Portfolio";
import ProjectsComp from "../components/projectsComp/ProjectsComp";
import SoMe from "../components/soMe/SoMe";
import Services from "../components/services/Services";
import Story from "../components/story/Story"
import Statements from "../components/statements/Statements";
import ContactComp from "../components/contactComp/ContactComp";
import NewestBlog from "../components/newestBlog/NewestBlog";

import { useLoaderData } from "react-router-dom";


const Home = () => {
    const { blogs, reviews } = useLoaderData();

    return (
        <article>
            <AwardHeader />
            <Portfolio />
            <ProjectsComp />
            <Services />
            <Story />
            <Statements statements={reviews} />
            <ContactComp
                Heading={"Kontakt"}
                Header={"Book en samtale med os"}
                InfoText={"Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!"}
            />
            <NewestBlog blogs={blogs} />
            <SoMe />
        </article>
    );
};

export default Home; 