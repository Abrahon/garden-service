// import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const FaqsAccordion = () => {
    return (
        <section className="my-10">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="p-2  tracking-wider text-center text-lg font-bold">
                Naturel Landscaping
              </p>
              <h2 className=" mb-1 text-4xl font-bold leading-none text-center sm:text-3xl">
                Our Questions
              </h2>
              <div className="flex justify-center mb-12">
                <button className="flex items-center text-sm mt-4 hover:text-lime-400">
                  Learn more <BsArrowRight className="ml-1 text-lg" />
                </button>
              </div>
            </div>
            <p className="text-justify">
             
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:px-8 lg:px-12 xl:px-32">
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-bold">
                Can you install outdoor lighting?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                  cum unde repudiandae nihil? Quibusdam sequi, repellat eos
                  numquam quo voluptatum et magnam ipsam laudantium soluta dolorum
                  voluptate dolores saepe praesentium.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-bold">
                Can you install outdoor lighting?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  neque in fugiat magni, quas animi enim veritatis deleniti ex.
                  Impedit.
                </p>
              </div>
            </details>
  
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-bold">
                Do understand my vision?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                  autem eaque unde possimus quae.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-bold">
                Do understand my vision?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                  autem eaque unde possimus quae.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-bold">
                What style should my garden be?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                  autem eaque unde possimus quae.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer text-xl font-bold">
                What style should my garden be?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates aspernatur dolores in consequatur doloremque
                  inventore reprehenderit, consequuntur perspiciatis architecto.
                </p>
                <p>
                  Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                  veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                  autem eaque unde possimus quae.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    );
};

export default FaqsAccordion;