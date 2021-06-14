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
				<h2>Here are some things that I am currently engineering</h2> 
        </font>
        <font color="dbe6fd">  
        <h3>I probably described them in my blog posts, but these are for more detail</h3>
        </font> 

        <div className= 'box'>
        <h3> Thrust Vectoring System </h3>
        <h4>A few years ago, for one of my first serious engineering projects, I made a thrust vectoring system.
         It is a really interesting system that uses 2 servos, an accelerometer, and a microcontroller, to control a 
         tube that houses a rocket motor.
        </h4>
        <h4>Here is a video of a simple demonstration</h4>
        <iframe src="https://onedrive.live.com/embed?cid=73C067F482FC8E49&resid=73C067F482FC8E49%21305642&authkey=ACEWP-tSNr6WqFU" width="180" height="320" ></iframe>
        <h6>You might have to wait a bit because the onedrive api is a bit slow</h6>
        </div>
        </center>
        
    </Layout>
  )
}
export default Blog
