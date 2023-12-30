// import React from 'react';

import BlogBanner from "../BlogBanner/BlogBanner";
import CreativeSolution from "../BlogCreativeSolution/CreativeSolution";
import BlogNewsLetter from "../BlogNewsLetter/BlogNewsLetter";
import Query from "../Query/Query";

const Blog = () => {
  return (
    <div>
      <BlogBanner></BlogBanner>
      <CreativeSolution></CreativeSolution>
      <BlogNewsLetter></BlogNewsLetter>
      <Query></Query>
    </div>
  );
};

export default Blog;