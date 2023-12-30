// import React from 'react';
import blogLeaves from "../../../assets/images/blog-leaves.png";

const BlogNewsLetter = () => {
    const newsBackground = {
        backgroundImage: `URL(${blogLeaves})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      };
    return (
        <div className="w-full p-4 md:p-10 bg-green-100" style={newsBackground}>
        <div className="lg:w-3/4 my-5 md:my-10 lg:scale-110 bg-gradient-to-r from-green-950/75 to-green-950/75 shadow-2xl py-6 xl:p-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center xl:gap-8 mt-3 text-white">
            <div className="md:w-1/2 md:px-4 px-4 mb-3">
              <h1 className=" font-semibold">Natural Landscaping</h1>
              <h2 className=" text-2xl font-semibold my-3">Our NewsLetter</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                temporibus saepe doloribus maiores exercitationem aut.
              </p>
            </div>
            <div className="px-5 sm:px-0">
              <input
                className="xl:w-64 px-3 py-1 me-4 bg-transparent border placeholder-white focus:outline-0"
                type="text"
                placeholder="Email"
              />
              <button className="text-white border border-white rounded-tl-3xl hover:bg-green rounded-br-3xl py-2 px-5 text-sm font-semibold mt-3 hover:bg-green-600 hover:border-green-600 sm:mt-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BlogNewsLetter;