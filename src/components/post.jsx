import * as React from "react"

import ReactMarkdown from "react-markdown"

import * as postStyle from "./post.module.css"

const Post = ({ title, content, date, index = 0 }) => {
  return (
    <div
      className={postStyle.container}
      style={{ animationDelay: index * 0.1 + "s" }}
    >
      <h3 className={postStyle.title}>{title}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <h6 className={postStyle.date}>{date}</h6>
    </div>
  )
}

export default Post
