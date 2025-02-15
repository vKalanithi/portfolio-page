import React from "react";
import BlogList from "./BlogList";
import { MediumResponse } from "@/types/medium";

type props = {
  mediumData: MediumResponse;
};
const Medium = ({ mediumData }: props) => {
  return (
    <div className="medium-container">
      <p className="header">My Writings</p>
      <BlogList userData={mediumData} />
    </div>
  );
};

export default Medium;
