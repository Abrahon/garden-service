// import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { GiBamboo, GiMapleLeaf } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";

const OurPricing = () => {
    return (
        <div className="my-10">
            <section className="body-font mx-5 xl:mx-20">
                <div className="md:px-10 py-7 flex flex-col-reverse lg:flex-row justify-center items-center">
                    <div className="mt-10 lg:mt-0 xl:pr-16">
                        <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                        <h1 className="title-font font-medium text-5xl text-gray-900">Our Pricing</h1>
                        <p className="leading-relaxed mt-4 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iste ducimus optio voluptate, provident pariatur itaque, facere quo aperiam fuga repudiandae non atque nisi architecto fugiat nemo corrupti tempora. Maxime corrupti dolorum temporibus illo ea possimus quod repellendus nesciunt officia!</p>

                        <button className="flex items-center border-2 border-black rounded-tl-3xl rounded-br-3xl py-3 px-8 text-sm mt-5 hover:bg-green-600 hover:text-white hover:border-green-600">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                    </div>
                    <div className="md:flex gap-3 md:gap-7 lg:ml-5 xl:ml-24">
                        <div className="lg:w-80 shadow-xl px-4 lg:px-2 py-10 rounded-lg">
                            <div className='flex gap-7'>
                                <GiMapleLeaf className="text-[#79a33a] text-7xl" />
                                <div>
                                    <h3 className='text-2xl font-bold'>Basic Plan</h3>
                                    <h1 className='text-5xl font-bold text-[#79a33a]'>$90</h1>
                                </div>
                            </div>
                            <hr className='border-2 my-4 w-11/12 mx-auto' />
                            <div className="ms-3 lg:ms-5">
                                <ul>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>Architecto beatae vite</span>
                                    </li>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>Dicta sunt explicabo</span>
                                    </li>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>enim ad minima veniam</span>
                                    </li>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>magni dolores eos qui</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <button className="flex items-center rounded-tl-3xl rounded-br-3xl py-3 px-8 mt-5 bg-[#79a33a] text-white">Select Plan <BsArrowRight className='ml-10 text-lg' /></button>
                            </div>
                        </div>
                        <div className="lg:w-80 shadow-xl px-4 lg:px-2 py-10 rounded-lg">
                            <div className='flex gap-7'>
                                <GiBamboo className="text-[#79a33a] text-7xl" />
                                <div>
                                    <h3 className='text-2xl font-bold'>Medium Plan</h3>
                                    <h1 className='text-5xl font-bold text-[#79a33a]'>$90</h1>
                                </div>
                            </div>
                            <hr className='border-2 my-4 w-11/12 mx-auto' />
                            <div className="ms-3 lg:ms-5">
                                <ul>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>Architecto beatae vite</span>
                                    </li>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>Dicta sunt explicabo</span>
                                    </li>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>enim ad minima veniam</span>
                                    </li>
                                    <li className='my-3 flex items-center gap-5'>
                                        <ImLeaf className='text-[#79a33a]' /> <span>magni dolores eos qui</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <button className="flex items-center rounded-tl-3xl rounded-br-3xl py-3 px-8 mt-5 bg-[#79a33a] text-white">Select Plan <BsArrowRight className='ml-10 text-lg' /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurPricing;