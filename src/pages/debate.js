import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import "./boxshadow.css"
const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulMichaelPortfolio(sort:{fields:id, order:DESC}) {
          edges {
            node {
              firstPost
              id
              bodyofpost {
                bodyofpost
                id
              }
              time
            }
          }
        }
      }
    `
  )
  return (

    <Layout>
      <center>
        <font color="b2ab8c">  
				<h2>Congressional Debate</h2> 
        </font>
        <font color="dbe6fd">  
        <h3>Besides building and engineering things, I also am the Secretary Treasurer of Ridge Forensics and a national champion Congressional Debater </h3>
        </font> 
      <div className = 'box'>
      <h2>2021 Season</h2>
        <h3>My current debate record with all of the tournaments that I have attended thus far in the 2021 season</h3>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTsAFbdWX9ZyVG9m92b0mR56gNQTfi_XjF71lD0UhxKyGXkv3qrncb193-SawcBKL7DH5xeP3ACu52l/pub?embedded=true" width="600" height="400"></iframe>
      </div>
       
      <div className = 'box'>
        <h2>2021 NCFL Grand Nationals</h2>
        <h4>From May 28th to May 30th, I competed in a Congressional Debate national tournament,
           that I qualified for known as the NCFL, or National Cathlioc Forensics league.
           In this toutorment I made it to the quarterfinals
        </h4>
        <h4>Here is the document I used outlining all of my speeches and refutations I made during the tournament</h4>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTK6Q7gV8jO34rPjhTGSYWnG43vT3ljvazCkr1ITzvKz2NnyapCwJNwD_H4dDIN89rS2aLd3eAWlvW1/pub?embedded=true" width="600" height="400" ></iframe>
        </div>
        </center>
        <h5>I am currently working out the kinks with having things resize to different screen sizes in regards to the embeds </h5>
    </Layout>
  )
}
export default Blog
