import { BsArrowRight, BsPlayCircleFill } from "react-icons/bs";
import Achivement from '../../../assets/images/homeImgs/Achivement.jpg';
import AchivementImage from '../../../assets/images/homeImgs/AchivementImage.jpg';

const CreativeSolution = () => {
    return (
        <div className="">
        <section className="body-font px-7 xl:mx-20">
            <div className="xl:px-10 py-7 flex flex-col-reverse lg:flex-row items-center">
                <div className="mt-10 lg:mt-0 xl:pr-16">
                    <p className="text-2xl font-semibold mb-3">Natural Landscaping</p>
                    <h1 className="title-font font-medium text-5xl text-gray-900">Creative Solutions</h1>
                    <p className="leading-relaxed mt-4 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iste ducimus optio voluptate, provident pariatur itaque, facere quo aperiam fuga repudiandae non atque nisi architecto fugiat nemo corrupti tempora. Maxime corrupti dolorum temporibus illo ea possimus quod repellendus nesciunt officia!</p>

                    <button className="flex items-center border-2 border-black rounded-tl-3xl rounded-br-3xl py-3 px-8 text-sm mt-5 hover:bg-green-600 hover:text-white hover:border-green-600">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                </div>
                <div className="md:flex gap-3 md:gap-7 lg:ml-5 xl:ml-24">
                    <div className="lg:w-80 shadow-xl px-2 py-5 rounded-lg">
                        <BsPlayCircleFill className="relative top-32 left-32 text-3xl text-white"/>
                        <img className="h-64 w-72 mx-auto" src={Achivement} alt="" />
                        <div className="text-center mt-2">
                            <h1 className="text-xl font-semibold">Creative Decorating</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, dolore.</p>
                            <div className="flex justify-center">
                                <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-80 shadow-xl px-2 py-5 rounded-lg">
                        <BsPlayCircleFill className="relative top-32 left-32 text-3xl text-white"/>
                        <img className="h-64 w-72 mx-auto" src={AchivementImage} alt="" />
                        <div className="text-center mt-2">
                            <h1 className="text-xl font-semibold">Creative Gardening</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, dolore.</p>
                            <div className="flex justify-center">
                                <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default CreativeSolution;