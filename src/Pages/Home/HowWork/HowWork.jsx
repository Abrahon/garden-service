// import React from 'react';
import { BsArrowRight, BsClock, BsFillBookmarkFill, BsFillTvFill } from "react-icons/bs";

const HowWork = () => {
    return (
        <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-full gap-5 m-5">
            <h1 className="font-bold">Natural landscaping <br /><span className="text-3xl font-bold">How We Works</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi laborum porro, itaque repellendus exercitationem quod, incidunt harum, cupiditate inventore optio corporis sint vel magnam beatae recusandae nihil voluptatibus expedita?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
            <div className="text-center">
            <div className="flex justify-center">
               
                <BsFillTvFill className="text-3xl"></BsFillTvFill>
                
                </div>
                <h2 className="text-2xl font-semibold mb-2">Projects Deal</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro reiciendis. Dignissimos laboriosam voluptate distinctio molestiae sint eaque illum ullam libero quos, inventore architecto ipsam. Nisi incidunt perferendis eveniet consequuntur?</p>
                </div>
                <div className="flex justify-center">
                    <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                </div>

            </div>
            <div className="text-center">
            <div className="flex justify-center">
                
                <BsFillBookmarkFill className="text-3xl"></BsFillBookmarkFill>
                
                </div>
                <h2 className="text-2xl font-semibold mb-2">Planing</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro reiciendis. Dignissimos laboriosam voluptate distinctio molestiae sint eaque illum ullam libero quos, inventore architecto ipsam. Nisi incidunt perferendis eveniet consequuntur?</p>
                </div>
                <div className="flex justify-center">
                    <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                </div>

            </div>
            <div className="text-center">
                <div className="flex justify-center">
                <BsClock className="text-3xl"></BsClock>
                
                </div>
                <h2 className="text-2xl font-semibold mb-2">Execution</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro reiciendis. Dignissimos laboriosam voluptate distinctio molestiae sint eaque illum ullam libero quos, inventore architecto ipsam. Nisi incidunt perferendis eveniet consequuntur?</p>
                </div>
                <div className="flex justify-center">
                    <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                </div>

            </div>
        </div>
    </div>
    );
};

export default HowWork;