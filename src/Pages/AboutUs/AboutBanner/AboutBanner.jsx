// import React from 'react';
import aboutBannerImg from '../../../assets/images/homeImgs/blog3.jpg';

const AboutBanner = () => {
    const achievementBg = {
        backgroundImage: `URL(${aboutBannerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div style={achievementBg} className=''>
            <div className='py-28 bg-gradient-to-r from-green-950/50 to-green-950/50'>
                <div className="text-center text-white">
                    <h1 className="title-font font-medium text-5xl">About Us</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;