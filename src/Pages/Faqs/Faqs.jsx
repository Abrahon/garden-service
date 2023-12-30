
import NewsLetter from "../Home/NewLetter/NewsLetter";
import FaqsAccordion from "./FaqsAccordion";
import FaqsBanner from "./FaqsBanner/FaqsBanner";
import FaqsClientSay from "./FaqsClientSay/FaqsClientSay";

const Faqs = () => {
    return (
    <div>
        <FaqsBanner></FaqsBanner>
        <FaqsAccordion></FaqsAccordion>
        <NewsLetter></NewsLetter>
        <FaqsClientSay></FaqsClientSay>
    </div>
        
        
    );
};

export default Faqs;