// import React from 'react';
import Achivement from '../../../assets/images/homeImgs/Achivement.jpg';
import AchivementImage from '../../../assets/images/homeImgs/AchivementImage.jpg';

import { BsPlayCircleFill } from "react-icons/bs";

const WhyUs = () => {
    return (
        <div className="my-9">
        <section className="mx-5 xl:mx-12">
            <div className="xl:px-10 py-7 flex gap-10 flex-col lg:flex-row items-center">
                <div className="rounded-lg xl:p-8 relative flex justify-center lg:w-2/3">
                    <img className='w-40 md:w-72 px-1 rounded-tr-[90px] rounded-bl-[90px]' src={Achivement} alt="Man Working" />
                    <img className='bg-white px-1 w-40 md:w-72 ml-[-20px] rounded-tl-[90px] rounded-br-[90px]' src={AchivementImage} alt="Man Working" />
                    <BsPlayCircleFill className="absolute -bottom-2 shadow-xl rounded-full text-4xl md:text-6xl text-lime-600 bg-white" />
                </div>
                <div className="lg:w-1/2 xl:w-3/5 mt-6 lg:mt-0 xl:px-6">
                    <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                    <h1 className="title-font font-medium text-5xl text-gray-900">Why Choose Us</h1>
                    <p className="leading-relaxed my-4 font-light">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    <div>
                        <div className="flex justify-between">
                            <h1>Decorating</h1>
                            <p>87%</p>
                        </div>
                        <progress className="h-2 w-full" value="87" max="100">87%</progress>

                    </div>
                    <div className='my-4'>
                        <div className="flex justify-between">
                            <h1>Gardening</h1>
                            <p>97%</p>
                        </div>
                        <progress className="h-2 w-full" value="97" max="100">97%</progress>

                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h1>Planing</h1>
                            <p>90%</p>
                        </div>
                        <progress className="h-2 w-full" value="90" max="100">90%</progress>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default WhyUs;