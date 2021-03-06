import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import "./layout.css"
const Header = () => (
 
  <header
  
    style={{
      background: `#293b5f`,
      marginBottom: `1.25rem`,
      textAlign: 'center',
    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '0 auto',
        padding: ` 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>
        
      <h1 style={{}}>
        <Link
          to="/"
          style={{
            textAlign: 'center',
            textDecoration: `blink`,
          }}
        >
          
          <font color="dbe6fd"> 
       
          Michael Moschello
        
          </font>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h1>
      </div>


 
       <font color="dbe6fd"> 
       
        <h3>

        <Link
        
          to="/about"
          style={{
            textDecoration: `blink`,
            textAlign: 'center',
          }}
        >
          <font color="dbe6fd"> 
          About
          </font>
        </Link>
        &nbsp;  |  &nbsp;
   
        <Link
          to="/engineering"
          style={{
            textAlign: 'center',
            textDecoration: `blink`,
          }}
        >
         
          <font color="dbe6fd"> 
          Engineering
          </font>
        </Link>
        
        &nbsp;  |  &nbsp;
      
      
        <Link
          to="/debate"
          style={{
            textAlign: 'center',
            textDecoration: `blink`,  
          }}
        >
          <font color="dbe6fd"> 
          Debate
          </font>
        </Link>
        &nbsp;  |  &nbsp;
      
      
        <Link
          to="/contact"
          style={{
            textAlign: 'center',
            textDecoration: `blink`,  
          }}
        >
          <font color="dbe6fd"> 
          Contact
          </font>
        </Link>
        </h3>
      
        </font>   
    </div>
  
  </header>
 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
