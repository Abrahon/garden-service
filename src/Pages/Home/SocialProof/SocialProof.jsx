// import React from 'react';
import { MdOutlineSupervisedUserCircle } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import Professional from '../../../assets/images/homeImgs/professionals.png';

const SocialProof = () => {
    return (
        <section className='relative top-[-40px]'>
        <div className='grid grid-cols-4 justify-center'>
            <div>
                <MdOutlineSupervisedUserCircle className='mx-auto text-3xl md:text-7xl bg-white rounded-full p-2' />
                <div className='text-center'>
                    <h1 className='md:text-4xl font-bold my-4'>48</h1>
                    <p>User Experience</p>
                </div>
            </div>
            <div>
                <HiOutlineUsers className='mx-auto text-3xl md:text-7xl bg-white rounded-full p-2' />
                <div className='text-center'>
                    <h1 className='md:text-4xl font-bold my-4'>100+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
            <div>
                <img className='w-[36px] md:w-20 mx-auto bg-white rounded-full p-2' src={Professional} alt="" />
                <div className='text-center'>
                    <h1 className='md:text-4xl font-bold my-4'>50</h1>
                    <p>Application</p>
                </div>
            </div>
            <div>
                <MdOutlineSupervisedUserCircle className='mx-auto text-3xl md:text-7xl bg-white rounded-full p-2' />
                <div className='text-center'>
                    <h1 className='md:text-4xl font-bold my-4'>90</h1>
                    <p>Cool Number</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SocialProof;