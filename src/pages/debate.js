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
      <center>
        <font color="b2ab8c">  
				<h2>Congressional Debate</h2> 
        </font>
        <font color="dbe6fd">  
        <h3>Besides building and engineering things, I also am the Secratary Tresurer of Ridge Forensics and a national champian Congressional Debater</h3>
        </font> 
        </center>
    </Layout>
  )
}
export default Blog
