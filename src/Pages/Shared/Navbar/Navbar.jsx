import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Background from "../../../assets/images/Navbar.jpg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const togglePagesDropdown = () => {
        setIsPagesOpen(!isPagesOpen);
    };

    const navbarBackground = {
        backgroundImage: `URL(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
    };
    return (
        <div>
            <nav className="sticky top-0 z-50" style={navbarBackground}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to="/">
                                    <h1 className="font-bold text-3xl text-white  hover:text-green-600 italic">
                                        Garden Service
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`hidden md:block ${isOpen ? "hidden" : "flex"
                                } items-center`}
                        >
                            <div className="ml-4 flex items-center md:ml-6">
                                <Link
                                    to="/"
                                    className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about-us"
                                    className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About Us
                                </Link>
                                <Link to="/services"><button
                                    onClick={toggleServicesDropdown}
                                    className="flex text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Services <FaAngleDown className="mt-1 ms-1"></FaAngleDown>
                                </button></Link>
                                {isServicesOpen && (
                                    <div className="absolute  mt-44 py-2 w-24 ms-36 bg-white text-green-800 rounded-md shadow-lg">
                                        <Link
                                            to="/services"
                                            className="block px-4 py-2 text-sm hover:text-white hover:bg-green-700"
                                        >
                                            Services
                                        </Link>
                                        <Link
                                            to="/team"
                                            className="block px-4 py-2 text-sm hover:text-white hover:bg-green-700"
                                        >
                                            Team
                                        </Link>
                                    </div>
                                )}
                                <button
                                    onClick={togglePagesDropdown}
                                    className="flex text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Pages <FaAngleDown className="mt-1 ms-1"></FaAngleDown>
                                </button>
                                {isPagesOpen && (
                                    <div className="absolute mt-48 py-2 w-24 ms-60 bg-white text-green-800 rounded-md shadow-lg">
                                        <Link
                                            to="/gallery"
                                            className="block px-4 py-2 text-sm hover:text-white hover:bg-green-700"
                                        >
                                            Gallery
                                        </Link>
                                        <Link
                                            to="/blog"
                                            className="block px-4 py-2 text-sm hover:text-white hover:bg-green-700"
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            to="/pricing"
                                            className="block px-4 py-2 text-sm hover:text-white hover:bg-green-700"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            to="/faqs"
                                            className="block px-4 py-2 text-sm hover:text-white hover:bg-green-700"
                                        >
                                            FAQS
                                        </Link>
                                    </div>
                                )}
                                <Link
                                    to="/contact"
                                    className="text-white hover:bg-green-700 hover:text-white px-3 py-2 ms-5 rounded-tl-lg rounded-br-lg text-sm font-medium border border-white"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about-us"
                            className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About Us
                        </Link>
                        <button
                            onClick={toggleServicesDropdown}
                            className=" text-gray-300 hover:bg-green-700 hover:text-white flex px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services <FaAngleDown className="mt-1.5 ms-1"></FaAngleDown>
                        </button>
                        {isServicesOpen && (
                            <div className="mt-2">
                                <Link
                                    to="/service1"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services
                                </Link>
                                <Link
                                    to="/single-services"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Single Services
                                </Link>
                                <Link
                                    to="/team"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </Link>
                            </div>
                        )}
                        <button
                            onClick={togglePagesDropdown}
                            className=" text-gray-300 hover:bg-green-700 hover:text-white flex px-3 py-2 rounded-md text-base font-medium"
                        >
                            Pages <FaAngleDown className="mt-1.5 ms-1"></FaAngleDown>
                        </button>
                        {isPagesOpen && (
                            <div className="mt-2">
                                <Link
                                    to="/gallery"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    to="/blog"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Blog & Articale
                                </Link>
                                <Link
                                    to="/pricing"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    to="/faqs"
                                    className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    FAQS
                                </Link>
                            </div>
                        )}
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;