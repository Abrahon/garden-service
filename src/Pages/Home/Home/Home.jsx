import Blog from "../../BlogArticle/Blog/Blog";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import CreativeSolution from "../CreativeSolution/CreativeSolution";
import EcoAssociation from "../EcoAssociation/EcoAssociation";
import HowWork from "../HowWork/HowWork";
import NatureLandscape from "../NatureLandscape/NatureLandscape";
import NewsLetter from "../NewLetter/NewsLetter";
import ProfessionalQuality from "../ProfessionalQuality/ProfessionalQuality";
import SocialProof from "../SocialProof/SocialProof";
import TeamSkills from "../TeamSkills/TeamSkills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NatureLandscape></NatureLandscape>
            <Achievement></Achievement>
            <SocialProof></SocialProof>
            <CreativeSolution></CreativeSolution>
            <ProfessionalQuality></ProfessionalQuality>
            <HowWork></HowWork>
            <NewsLetter></NewsLetter>
            <TeamSkills></TeamSkills>
            <EcoAssociation></EcoAssociation>
            <Blog></Blog>
      

        </div>
    );
};

export default Home;