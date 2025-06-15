import React from "react";
import ReactMarkdown from "react-markdown";

const PostRenderer = ({ content }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostRenderer;
