import { BsArrowRight } from "react-icons/bs";
import banner from "../../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
        <img src={banner} className="h-[60vh] lg:h-[85vh] w-full" alt="Banner" />
        <div className="absolute leading-6 top-24 lg:mx-8 xl:mx-0 xl:top-48 align-middle xl:left-20 p-6">
          <h3 className="text-xl font-semibold pb-2 tracking-widest text-white">
            Naturel Landscaping
          </h3>
          <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-widest font-bold mb-4 text-green-200">
            Landscaping Excellence{" "}
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-widest font-bold mb-4 text-green-400">
            Creative Solutions{" "}
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-widest font-bold mb-4 text-green-500 italic">
            Best Quality
          </h1>
          <div className="flex lg:pt-5">
            <div className="flex me-8">
              <Link to="/">
                <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-8 text-sm mt-5 text-white hover:text-green-700 hover:bg-white">
                  Learn more <BsArrowRight className="ml-1 text-lg" />
                </button>
              </Link>
            </div>
            <div className="flex ">
              <Link to="/">
                <button className="flex items-center border-2 rounded-tl-2xl rounded-br-2xl py-3 px-8 text-sm mt-5 text-white hover:text-green-700 hover:bg-white">
                  Learn more <BsArrowRight className="ml-1 text-lg" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;