// import React from 'react';

import ContactBanner from "../ContactBanner/ContactBanner";
import ContactCard from "../ContactCard/ContactCard";
import ContactForm from "../ContactForm/ContactForm";
import LocationMap from "../Map/LocationMap";
const ContactUs = () => {
    return (
        <div>
           
            <ContactBanner></ContactBanner>
            <ContactCard></ContactCard>
            <ContactForm></ContactForm>
            <LocationMap></LocationMap>
        </div>
    );
};

export default ContactUs;