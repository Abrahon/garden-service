// import React from 'react';
import Achivement from '../../../assets/images/homeImgs/Achivement.jpg';
import AchivementImage from '../../../assets/images/homeImgs/AchivementImage.jpg';
import gardenWorking from '../../../assets/images/garden-working.jpg';
import { BsArrowRight } from 'react-icons/bs';

const BestCeo = () => {
    return (
        <div className="my-9">
            <section className="body-font">
                <div className="py-7 flex flex-col-reverse lg:flex-row justify-center items-center">
                    <div className="lg:w-1/3 mt-9 lg:mt-0 px-6 lg:px-0">
                        <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                        <h1 className="title-font font-medium text-5xl text-gray-900">Best CEO</h1>
                        <p className="leading-relaxed mt-4 font-light">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                        <button className="flex items-center border-2 border-black rounded-tl-3xl rounded-br-3xl py-3 px-8 text-sm mt-5 hover:bg-green-600 hover:text-white hover:border-green-600">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                    </div>
                    <div className="flex lg:justify-center lg:ml-7 h-24 md:h-48 lg:h-52">
                        <img className='w-24 md:w-48 xl:w-52 rounded-tr-[90px] rounded-bl-[90px]' src={Achivement} alt="Man Working" />
                        <img style={{ clipPath: 'circle(50% at 50% 50%)' }} className='md:mx-1 w-24 md:w-48 xl:w-52' src={gardenWorking} alt="Man Working" />
                        <img className='w-24 md:w-48 xl:w-52 rounded-tl-[90px] rounded-br-[90px]' src={AchivementImage} alt="Man Working" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestCeo;