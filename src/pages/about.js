import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import styled from "styled-components"
import "./pagestyle.css"

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
				<h1>About me</h1>
        </font>  
        
        <font color="dbe6fd">  
        
          <h2> Hi, I am Michael, a student currently studying at Ridge High School</h2>
         
          <div class="img">
          <img src="https://lh3.googleusercontent.com/DHyItYzPbvReqojSFPGct58HaB9VTOzfFzq6yNR0vNWp3ArhE1Alcsvt2j_XC3hij-8wHrqvJ-RHHelo4eYAbq8y7b7ladOsWeORWfpYxbGxDMnWIDNsFCHW5uX5Phu2cOkCJInPwJr__s0gbCIkAxkH_gpNzCV_KUKPWtfyYIUpMZUA3ilzq5RPy0U9F3_sxquH8OZX_HARESHTxc8PfsJHgBSUd06O-BjULXTSm4HPvvMiIZbT0YboTfYutM2cvn0EqzPQpyqqGwj3VnON3Dy_wNj1k-OzDrxl1X1Y1eAXb8Ix6JMQq0a0UhuHFkJQFoNm8tUBe4huicJi3vIHVz_R2fM5KR5glMOmeUvl8quRtJ-xaNlGcF6vavJIw2NSqg_82GkJ4LcBhesjX7-n-EVN5zRFCMw0r9IMPiH9MHAi9R_0lKl9Gpl1DtAgltclhMvD2gBou5mQ1kZPdV2MPYKSXNqbpRjKoDIRw8mQ4UlIRxyglx73kszdZ0XcV0370YF478L6ElqqDz5x-iNL7BVvp-A7h0NvAsTRLiAiPdcXx77vExm0fnmpllMVBzfRhGWxGcAgXBd3e3KVLNWppLLuh81uc_Z33PV8WNrzAXrlx2tDbGWzxzyi6ppYr_ImOAR6Xc1PIKL8CyBz9QPge17R9N0WbWaV8KShKngU-XwbvBbjJrtliWECLzXC1kwbiUtYWdUxRqQwsA9Kq3arZWM=w1233-h924-no?authuser=0"></img>
          </div>
          <h3>Besides debating, engineering things, and being a student. I spend my free time golfing, and playing video games.</h3>

        </font> 
        </center>
    </Layout>
  )
}
export default Blog
