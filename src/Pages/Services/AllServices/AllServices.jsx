// import React from 'react';
import service1 from '../../../assets/images/homeImgs/blog3.jpg';
import service2 from '../../../assets/images/homeImgs/blog1.jpg';
import service3 from '../../../assets/images/homeImgs/skill2.jpg';
import { BsArrowRight, BsPlayCircleFill } from "react-icons/bs";

const AllServices = () => {
    const servicesData = [
        {
            id: 1,
            img: service1,
            title: 'Creative Planting',
            des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, dolore.',
        },
        {
            id: 2,
            img: service2,
            title: 'Creative Solutions',
            des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, dolore.',
        },
        {
            id: 3,
            img: service3,
            title: 'Irrigation System',
            des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, dolore.',
        },
    ]
    return (
        <div className='flex justify-center my-20'>
        <div className='mx-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                servicesData.map(service =>
                    <div key={service.id} className="xl:w-96 shadow-xl px-2 py-5 rounded-lg">
                        <BsPlayCircleFill className="relative top-32 left-32 text-3xl text-black bg-white rounded-full" />
                        <img className="h-64 md:h-80 md:w-80 mx-auto" src={service?.img} alt="" />
                        <div className="text-center mt-2">
                            <h1 className="text-xl font-semibold">{service?.title}</h1>
                            <p>{service?.des}</p>
                            <div className="flex justify-center">
                                <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </div>
    );
};

export default AllServices;