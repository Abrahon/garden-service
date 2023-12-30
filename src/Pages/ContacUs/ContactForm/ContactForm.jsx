// import React from 'react';
import { FaEnvelopeOpenText, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
    return (
        <section className="py-6  dark:text-gray-100">
            <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3">
                    <form
                        noValidate=""
                        action=""
                        className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="flex  text-sm">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full pe-3 px-4 me-3 py-3 rounded-md border border-black focus:border-violet-400"
                            />
                            <input
                                type="number"
                                name="telephone"
                                id="telephone"
                                placeholder="Your Telephone"
                                className="w-full pe-3 px-4 py-3 rounded-md border border-black focus:border-violet-400"
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                className="w-full pe-3 px-4 py-3 rounded-md border focus:ring-violet-400 border-black"
                                spellCheck="false"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full py-2 font-semibold rounded border-2 rounded-tl-2xl rounded-br-2xl bg-green-800 text-white"
                        >
                            Submit Button
                        </button>
                    </form>
                </div>
                <div className="bg-green-800 w-full px-6 py-16 rounded-md text-white sm:px-12 md:px-16 xl:col-span-2">
                    <h1 className="text-white text-xl font-bold">
                        More Complete Information
                    </h1>
                    <p className="text-white mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
                        quibusdam!
                    </p>

                    <div className="flex items-center">
                        <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-3 text-sm mt-5 text-white">
                            <FaPhoneAlt className="ml-1 text-lg" />
                        </button>
                        <div className="pt-5 pl-3">
                            <h3 className="mb-1 text-lg font-bold">+656 763 345</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-3 text-sm mt-5 text-white">
                            <FaEnvelopeOpenText className="ml-1 text-lg" />
                        </button>
                        <div className="pt-5 pl-3">
                            <h3 className="mb-1 text-lg font-bold">contact@naturel.com</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-3 text-sm mt-5 text-white">
                            <FaMapMarkerAlt className="ml-1 text-lg" />
                        </button>
                        <div className="pt-5 pl-3">
                            <h3 className="mb-1 text-lg font-bold">London Eye, London, UK</h3>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ContactForm;