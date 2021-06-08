import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import styled from "styled-components"

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
        <font color="b2ab8c">  
				<h1>Greetings!</h1>
        </font>  
        <font color="dbe6fd">  
				<h2>I'm Michael, here are some things I am working on</h2> 
        </font> 
        
      
      {
        data.allContentfulMichaelPortfolio.edges.map(edge=>
         
          <Post
            title={edge.node.firstPost} 
            content={edge.node.bodyofpost.bodyofpost}
            date={edge.node.time}
            />
        )
      }
    </Layout>
  )
}
export default Blog
