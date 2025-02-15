import { MediumResponse } from "@/types/medium";
import React from "react";
import BlogCard from "./BlogCard";
import "./blog.css";

type BlogListTypes = {
  userData: MediumResponse;
};
const BlogList = ({ userData }: BlogListTypes) => {
  console.log("userData", userData);
  return (
    <div className="blog-list">
      {userData?.items?.map((eachBlog) => (
        <BlogCard details={eachBlog} key={eachBlog.guid} />
      ))}
    </div>
  );
};

export default BlogList;
