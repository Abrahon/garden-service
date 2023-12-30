import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services/Services";
import TeamExpert from "../../Pages/TeamExpert/TeamExpert/TeamExpert";
import AboutUs from "../../Pages/AboutUs/AboutUs/AboutUs";
import Blog from "../../Pages/BlogArticle/Blog/Blog";
import Faqs from "../../Pages/Faqs/Faqs";
import Gallery from "../../Pages/Gallerys/Gallery/Gallery";
import Pricing from "../../Pages/Pricing/Pricing/Pricing";
import ContactUs from "../../Pages/ContacUs/ConactUs/ContactUs";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
        path:'/',
        element:<Home></Home>
     },
     {
        path: "/about-us",
        element:<AboutUs></AboutUs> 
      },
      {
        path: "/services",
        element:<Services></Services>
      },
      {
        path: "/team",
        element:<TeamExpert></TeamExpert>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path:"/faqs",
        element:<Faqs></Faqs>
      },
      {
        path:"/gallery",
        element:<Gallery></Gallery>
      },
      // {
      //   path:"/pricing",
      //   element:<Pricing></Pricing>
      // },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>
      }
      
      
    ],
  },
]);
