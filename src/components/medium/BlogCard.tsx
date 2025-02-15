import { FeedItem } from "@/types/medium";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";
import moment from "moment";
import Link from "next/link";

type BlogCardTypes = {
  details: FeedItem;
};
const BlogCard = ({ details }: BlogCardTypes) => {
  const bloglink = details?.link || "";
  return (
    <div className="card-container">
      <Link href={bloglink} target="_blank">
        <p className="lite">{details?.title}</p>
      </Link>
      <div className="card-footer">
        <p className="lite">{moment(details?.pubDate).format("DD MMM YYYY")}</p>
        <IconButton
          LinkComponent={"a"}
          href={bloglink}
          target="_blank"
          color="primary"
        >
          <OpenInNewIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default BlogCard;
