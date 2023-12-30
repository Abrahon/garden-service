// import React from 'react';

import CreativeSolution from "../../Home/CreativeSolution/CreativeSolution";
import NewsLetter from "../../Home/NewLetter/NewsLetter";
import OurPricing from "../../Pricing/OurPricing/OurPricing";
import AllServices from "../AllServices/AllServices";
import ServicesBanner from "../ServicesBanner/ServicesBanner";


const Services = () => {
  
    return (
        <div>
        <ServicesBanner></ServicesBanner>
        <CreativeSolution></CreativeSolution>
        <AllServices></AllServices>
        <OurPricing></OurPricing>
        <NewsLetter></NewsLetter>
    </div>
    );
};

export default Services;