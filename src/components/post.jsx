/*

LICENSE STATEMENT

THIS CODE WAS WRITTEN BY CY WESTBROOK
THIS CODE WAS NOT WRITTEN BY MICHAEL MOSCHELLO
THIS CODE WRITTEN BY CY WESTBROOK HAS BEEN COPIED BY MICHAEL MOSCHELLO
CY TAKES ALL CREDIT FOR THIS CODE
CY TAKES ALL CREDIT FOR ALL ANIMATIONS
CY TAKES ALL CREDIT
.

COPYRIGHT CY WESTBROOK 2021
NOT COPYRIGHT MICHAEL MOSCHELLO NOT 2021
COPYRIGHT RENEWED IN ADVANCE BY CY WESTBROOK 2038

*/


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
