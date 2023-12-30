// import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ContactCard = () => {
    return (
        <section className="">
            <div className="container flex flex-col gap-20 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
                <div className=" lg:mt-0">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">
                            Naturel Landscaping
                        </h2>
                        <h1 className="lg:text-5xl mt-4 font-bold leading-none sm:text-2xl">
                            Please Get In Touch
                        </h1>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-start mt-4 w-full font-semibold tracking-wide rounded-md"
                    >
                        Learn more <BsArrowRight className="ml-1 align-middle text-lg" />
                    </button>
                </div>
                <div className="text-center lg:max-w-md xl:max-w-lg lg:text-left">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                        repellat velit rem ratione saepe dolor consequuntur esse tenetur?
                        Odit dignissimos quam ad temporibus ex quis! Labore odio et
                        perferendis aut?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;