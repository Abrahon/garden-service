// import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import blog1 from "../../../assets/images/homeImgs/blog1.jpg";
import blog2 from "../../../assets/images/homeImgs/blog2.jpg";
import blog3 from "../../../assets/images/homeImgs/blog3.jpg";
const Blog = () => {
    return (
        <div className="container mx-auto px-4">
        <div className="my-16">
          <div className="text-center">
            <h3 className="font-accent text-primary text-xl">
              Naturel Landscaping
            </h3>
            <h2 className="font-bold text-4xl">Blog & Articale</h2>
          </div>
          <div className="grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            <div className="rounded-md shadow-md">
              <img
                src={blog1}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72"
              />
              <div className="flex flex-col justify-start items-center p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide">
                    MinimaList garden design
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quibusdam delectus nulla veniam unde libero
                    praesentium, sed dolorem dolore optio.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-start w-full py-3 font-semibold tracking-wide rounded-md hover:text-green-700"
                >
                  Learn more{" "}
                  <BsArrowRight className="ml-1 align-middle text-lg" />
                </button>
              </div>
            </div>
  
            <div className="rounded-md shadow-md">
              <img
                src={blog2}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide">
                    MinimaList rooftop design
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio ipsa optio culpa enim exercitationem ipsam nihil
                    minima voluptatibus excepturi corrupti!
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-start w-full py-3 font-semibold tracking-wide rounded-md hover:text-green-700"
                >
                  Learn more{" "}
                  <BsArrowRight className="ml-1 align-middle text-lg" />
                </button>
              </div>
            </div>
  
            <div className="rounded-md shadow-md">
              <img
                src={blog3}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-wide">
                    MinimaList decorating rooftop
                  </h2>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    corrupti dicta nobis reprehenderit quam ullam veniam?
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-start w-full py-3 font-semibold tracking-wide rounded-md  hover:text-green-700"
                >
                  Learn more{" "}
                  <BsArrowRight className="ml-1 align-middle text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;