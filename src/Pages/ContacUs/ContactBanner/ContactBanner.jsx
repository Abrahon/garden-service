// import React from 'react';
import banner from '../../../assets/images/homeImgs/AchivementImage.jpg';

const ContactBanner = () => {
    return (
        <div
            className="hero flex items-center justify-center"
            style={{
                backgroundImage: `url(${banner})`,
                height: '50vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold text-white">Contact Us</h1>
                    <p className='text-xl text-white font-semibold'>Home / Contact Us</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;