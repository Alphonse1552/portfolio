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
          <div class="shadow">
          <div class="img">
          <img src="https://lh3.googleusercontent.com/yqFfGgG0xgCnHgNO7v92QQ-HSTpD3OFEm4hK-V-NfjufXw997Cvn-Guv9O74NswgmLW6GH9POgIAmj7biI1LLreRPhhkUy7Uj13QQhhuK1yU5nJQQuhCfr8WsvcoXpwjLLeBsWn8JDxWGE9P-f8m7VOuT6BQLt7SdLfmtrrRVlGJoj4L7h80TtALC4IY48F2w4HlZQd9bAba2LV96p73h8yWCswhuzuVSyqrrDkvzIqh5vwa1Oe-lm9Q4zBtLF6NtUiRfi1CC34LhrZqiums58nRp5PnvlPW47F9oCU0oRLLrQB8H6O_hMHGjqrKzZC9PuOTdEsEqPPXnO2J3CEGijKeLqPch7EKM0OxATyZnSC5EJWFcN3guXonT8vu3fv-iu-6mremGXhi05jVlMG0TICXbzEvjCqdyafHIqthfVUQ360PYAEZWSZP0N8swBpEEl-lf1m9iQyFlaBP_SlbcAtCBdW3XEakRRS5EgNYMkLVxknjQhw5rZWcYnK39MPjJ3IQmeRZNLJ09LO3vEswRDuXbmCGxM7LgOqVO3NfqrBhHwOWrvERHKegnzNAKRolNSef8FMnGlyIaXs2YgWcOCEWVYVFJxqPo5kfm86j_Ru4m9GKtCDqQ-4pLGksklFU4i87RkLmmSnUBJC45GgYfnVUYWTOl4eijsRnLvQKfuaECxC-nqBpga9rhrnnbvmo15jTnggIlzD-__pD-w3vrZU=w1233-h924-no?authuser=0"></img>
          </div>
          </div>
          <h3>Besides debating, engineering things, and being a student. I spend my free time golfing, and playing videogames.</h3>

        </font> 
        </center>
    </Layout>
  )
}
export default Blog
