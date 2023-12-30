// import React from 'react';
import servicesBgImg from '../../../assets/images/garden-working.jpg';

const ServicesBanner = () => {
    const servicesBg = {
        backgroundImage: `URL(${servicesBgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
    }
    return (
        <div style={servicesBg} className=''>
        <div className='py-28 bg-gradient-to-r from-green-950/50 to-green-950/50'>
            <div className="text-center text-white">
                <h1 className="title-font font-medium text-5xl">Services</h1>
            </div>
        </div>
    </div>
    );
};

export default ServicesBanner;