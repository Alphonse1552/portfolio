import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import "./boxshadow.css"
import "./resize.css"


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
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
<center>
        <font color="b2ab8c">  
				<h1>Contact</h1> 
        </font>
        <font color="dbe6fd">  
        <h3>Here is how to get in touch with me</h3>
      
        <h2>
        <div className = 'center' >
        <i class="material-icons">email</i>
        &nbsp;&nbsp;
        alphonse52leo@gmail.com
        </div>
        </h2>
        </font>
      

  </center>
    </Layout>
  )
}
export default Blog
