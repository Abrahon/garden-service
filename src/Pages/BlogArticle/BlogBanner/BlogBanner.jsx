// import React from 'react';
import blogBannerImg from '../../../assets/images/garden-working.jpg';

const BlogBanner = () => {
    const achievementBg = {
        backgroundImage: `URL(${blogBannerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div style={achievementBg} className=''>
        <div className='py-28 bg-gradient-to-r from-green-950/50 to-green-950/50'>
            <div className="text-center text-white">
                <h1 className="title-font font-medium text-5xl">Blog & Article</h1>
                <p className='text-xl mt-2 text-white font-semibold'>Home / Blog</p>
            </div>
        </div>
    </div>
    );
};

export default BlogBanner;