// import React from 'react';
import Query1 from "../../../assets/images/homeImgs/blog3.jpg";
import Query2 from "../../../assets/images/garden-working.jpg";

import { BsPlayCircleFill } from "react-icons/bs";

const Query = () => {
    return (
        <div className="my-9">
            <section className="mx-5 xl:mx-12">
                <div className="xl:px-10 py-7 flex gap-10 flex-col lg:flex-row items-center">
                    <div className="rounded-lg xl:p-8 relative flex justify-center lg:w-2/3">
                        <img
                            className="w-40 md:w-72 px-1 rounded-tr-[90px] rounded-bl-[90px]"
                            src={Query1}
                            alt="Man Working"
                        />
                        <img
                            className="bg-white px-1 w-40 md:w-72 ml-[-20px] rounded-tl-[90px] rounded-br-[90px]"
                            src={Query2}
                            alt="Man Working"
                        />
                        <BsPlayCircleFill className="absolute -bottom-2 shadow-xl rounded-full text-4xl md:text-6xl text-lime-600 bg-white" />
                    </div>
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                            <details>
                                <summary className="text-green-800 text-xl py-2 outline-none cursor-pointer focus:font-extrabold">
                                    Can you install outdoor lighting?
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Unde neque in fugiat magni, quas animi enim veritatis
                                        deleniti ex. Impedit.
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary className="text-green-800 text-xl py-2 outline-none cursor-pointer focus:font-extrabold">
                                    Do you understan the vision?
                                </summary>
                                <div className="px-4 pb-4">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                                        aspernatur quae, eos explicabo odit minima libero veniam
                                        similique quibusdam doloribus facilis ipsa accusantium vel
                                        maiores corrupti! Libero voluptate a doloribus?
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary className="text-green-800 text-xl py-2 outline-none cursor-pointer focus:font-extrabold">
                                    What style my garden should be?
                                </summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                                        voluptates aspernatur dolores in consequatur doloremque
                                        inventore reprehenderit, consequuntur perspiciatis
                                        architecto.
                                    </p>
                                    <p>
                                        Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                                        veritatis velit quasi cupiditate unde eaque! Iure,
                                        voluptatibus autem eaque unde possimus quae.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Query;