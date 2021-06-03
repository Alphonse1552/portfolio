import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

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
              images {
                title
              }
            }
          }
        }
      }
    `
  )
  return (

    <Layout>
      	<div style={{ textAlign: 'center' }}>
				<h1>Greetings!</h1>
				<h2>I'm Michael, here are some things I am working on</h2>
      
      <div className="columnCentered">

      {
        data.allContentfulMichaelPortfolio.edges.map(edge=>
         
          <Post
            style={{ textAlign: 'center' }}
            title={edge.node.firstPost} 
            content={edge.node.bodyofpost.bodyofpost}
            date={edge.node.time}
            />
        
          
        )
      }
      
      </div>
      </div>
    </Layout>
  )
}
export default Blog
