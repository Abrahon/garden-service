import { ImQuotesRight } from 'react-icons/im';

import { BsStarFill } from "react-icons/bs";

const FaqsClientSay = () => {
    
    return (
        <div>
        <section>
            <div className="my-10">
                <div className="text-center">
                    <h3 className="text-xl">Naturel Landscaping</h3>
                    <h1 className="text-3xl font-bold mt-1">What client say</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-5 sm:m-4 ">
                    <div className="card-body ">
                        <div className="shadow-2xl p-10 w-full rounded-r-3xl">
                            <div className='flex justify-center text-green-700 mb-2'>
                                <ImQuotesRight className='w-20 h-20'></ImQuotesRight>
                            </div>

                            <div className="text-center">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste harum ipsa cupiditate. Labore aspernatur illum, voluptate at corporis quas ipsa aut, nam, laborum odio possimus qui exercitationem quaerat doloremque.</p>
                            </div>

                            <div className="flex justify-center gap-3 m-2 text-yellow-500 my-5">
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                            </div>
                        </div>

                        <div className="avatar text-center">
                            <img className="inline-block -mt-6  h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">Victor</h1>
                            <h3 >client</h3>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="shadow-2xl p-10 w-full rounded-r-3xl">

                            <div className='flex justify-center text-green-700 mb-2'>
                                <ImQuotesRight className='w-20 h-20'></ImQuotesRight>
                            </div>

                            <div className="text-center">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste harum ipsa cupiditate. Labore aspernatur illum, voluptate at corporis quas ipsa aut, nam, laborum odio possimus qui exercitationem quaerat doloremque.</p>
                            </div>

                            <div className="flex justify-center gap-3 m-2 text-yellow-500 my-5">
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                            </div>
                        </div>

                        <div className="avatar text-center">
                            <img className="inline-block -mt-6 h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">Hazel</h1>
                            <h3 >client</h3>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="shadow-2xl p-10 w-full rounded-r-3xl">

                            <div className='flex justify-center text-green-700 border-green-500 mb-2'>
                                <ImQuotesRight className='w-20 h-20'></ImQuotesRight>
                            </div>

                            <div className="text-center">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste harum ipsa cupiditate. Labore aspernatur illum, voluptate at corporis quas ipsa aut, nam, laborum odio possimus qui exercitationem quaerat doloremque.</p>
                            </div>

                            <div className="flex justify-center gap-3 m-2 text-yellow-500 my-5">
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                            </div>
                        </div>

                        <div className="avatar text-center">
                            <img className="inline-block -mt-6 h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">Arura</h1>
                            <h3 >client</h3>
                        </div>

                    </div>




                </div>
            </div>
        </section>
    </div>
    );
};

export default FaqsClientSay;