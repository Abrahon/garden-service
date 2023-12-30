// import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Achivement from '../../../assets/images/homeImgs/Achivement.jpg'
const ProfessionalQuality = () => {
    const achievementBg = {
        backgroundImage: `URL(${Achivement})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center'
    }
    return (
        <div className="my-24" style={achievementBg}>
        <div className='py-28 bg-gradient-to-r from-slate-950/60 to-slate-950/60'>
            <div className="text-center text-white">
                <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                <h1 className="title-font font-medium text-5xl">Professional quality from start to finish</h1>
                <p className="mt-4 font-normal">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                <div className='flex justify-center'>
                    <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-8 text-sm mt-5 hover:bg-green-600 hover:border-green-600">More Information <BsArrowRight className='ml-1 text-lg'/></button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProfessionalQuality;