// import React from 'react';
import AchivementImage from '../../../assets/images/homeImgs/AchivementImage.jpg';
import { BsArrowRight } from 'react-icons/bs';

const Achievement = () => {
    const achievementBg = {
        backgroundImage: `URL(${AchivementImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center'
    }
    return (
        <div style={achievementBg}>
        <div className='py-28 bg-gradient-to-r from-slate-950/60 to-slate-950/60'>
            <div className="text-center text-white">
                <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                <h1 className="title-font font-medium text-5xl">Beautiful Landscapes Start Here</h1>
                <p className="mt-4 font-normal">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                <div className='flex justify-center'>
                    <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-8 text-sm mt-5 hover:bg-green-600">Learn more <BsArrowRight className='ml-1 text-lg'/></button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Achievement;