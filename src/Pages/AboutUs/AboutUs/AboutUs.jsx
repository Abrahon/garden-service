// import React from 'react';

import ProfessionalQuality from "../../Home/ProfessionalQuality/ProfessionalQuality";
import SocialProof from "../../Home/SocialProof/SocialProof";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutNature from "../AboutNature/AboutNature";
import BestCeo from "../BestCeo/BestCeo";
import WhyUs from "../WhyUs/WhyUs";

const AboutUs = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutNature></AboutNature>
            <SocialProof></SocialProof>
            <WhyUs></WhyUs>
            <ProfessionalQuality></ProfessionalQuality>
            <BestCeo></BestCeo>
        </div>
    );
};

export default AboutUs;