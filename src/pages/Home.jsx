
// Components
import AwardHeader from "../components/awardHeader/AwardHeader";
import Portfolio from "../components/portfolio/Portfolio";
import ProjectsComp from "../components/projectsComp/ProjectsComp";
import SoMe from "../components/soMe/SoMe";
import Services from "../components/services/Services";

const Home = () => {

    return (
        <article>
        <AwardHeader/>
        <Portfolio/>
        <ProjectsComp/>


        <Services/>
        <SoMe/>
        </article>
    );
};

export default Home; 