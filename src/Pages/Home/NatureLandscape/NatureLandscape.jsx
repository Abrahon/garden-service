// import React from 'react';
import professionals from '../../../assets/images/homeImgs/professionals.png';
import { GrServices } from 'react-icons/gr';
import Achivement from '../../../assets/images/homeImgs/Achivement.jpg';
import AchivementImage from '../../../assets/images/homeImgs/AchivementImage.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';

const NatureLandscape = () => {
    return (
        <div className="my-12 md:my-0 md:mb-12 lg:my-20">
        <section className="body-font xl:shadow-xl xl:mx-24">
            <div className="md:px-10 lg:px-7 xl:px-10 lg:py-7 flex gap-4 flex-col-reverse lg:flex-row justify-center items-center">
                <div className="lg:w-auto px-4 md:px-0 mt-5 lg:mt-0">
                    <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                    <h1 className="title-font font-medium text-5xl text-gray-900">Beautiful Landscapes Start Here</h1>
                    <p className="leading-relaxed mt-4 font-light">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    <div className="mt-4">
                        <div className='flex items-center'>
                            <img className='w-9 mr-2' src={professionals} alt="Professionals" />
                            <h1 className="text-xl font-bold">Professionals</h1>
                        </div>
                        <p className="mt-3 ml-11 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta vitae doloremque nisi obcaecati? Cupiditate quasi id facilis alias rerum?</p>
                    </div>

                    <div className="mt-4">
                        <div className='flex items-center'>
                            <GrServices className='text-3xl mr-2' />
                            <h1 className="text-xl font-bold">Top Services</h1>
                        </div>

                        <p className="mt-3 ml-10 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta vitae doloremque nisi obcaecati? Cupiditate quasi id facilis alias rerum?</p>
                    </div>
                </div>
                <div className="rounded-lg md:p-8 flex justify-center relative lg:w-4/5">
                    <img className='w-40 md:w-56 xl:w-64 px-1 rounded-tr-[90px] rounded-bl-[90px]' src={Achivement} alt="Man Working" />
                    <img className='bg-white px-1 w-40 md:w-56 xl:w-64 ml-[-20px] rounded-tl-[90px] rounded-br-[90px]' src={AchivementImage} alt="Man Working" />
                    <BsPlayCircleFill className="absolute -bottom-2 shadow-xl rounded-full text-4xl md:text-6xl text-lime-600 bg-white" />
                </div>
            </div>
        </section>
    </div>
    );
};

export default NatureLandscape;