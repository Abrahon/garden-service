
import { FaEnvelopeOpenText, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="px-20 divide-y bg-green-700 text-white">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/4">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex justify-center space-x-3 lg:justify-start"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    className="flex-shrink-0 w-5 h-5 rounded-full"
                                >
                                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                </svg>
                            </div>
                            <span className="self-center text-3xl font-bold italic">
                                Gardeno
                            </span>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                            hic cum. Explicabo, veniam quibusdam! Eum.
                        </p>
                        <div className="flex mt-3 font-bold">
                            <FaMapMarkerAlt className="mt-0.5 me-1"></FaMapMarkerAlt>{" "}
                            <span>London Eye, London, UK</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 text-sm sm:gap-x-10 gap-y-8">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase">Navigation</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Services
                                    </a>
                                </li>
                            </ul>
                            <div className="flex mt-3 font-bold">
                                <FaEnvelopeOpenText className="mt-0.5 me-1"></FaEnvelopeOpenText>{" "}
                                <span>contact@naturel.com</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase">Quick Link</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Bookings
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Pages
                                    </a>
                                </li>
                            </ul>
                            <div className="flex mt-3 font-bold">
                                <FaPhoneAlt className="mt-0.5 me-1"></FaPhoneAlt>{" "}
                                <span>+656 763 345</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase">Services</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">
                                        404
                                    </a>
                                </li>
                            </ul>
                            <div className="flex justify-start space-x-3">
                                <Link to='/'>
                                    <FaFacebook className="text-xl"></FaFacebook>
                                </Link>
                                <Link to='/'>
                                    <FaTwitter className="text-xl"></FaTwitter>
                                </Link>
                                <Link to='/'>
                                    <FaYoutube className="text-xl"></FaYoutube>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="py-6 text-sm text-center">
                    © 1968 Company Co. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;