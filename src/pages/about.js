import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
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
          <div class="container">
          <div class="img">
          <img src="https://lh3.googleusercontent.com/t9GPoeBCVs6XviBi9Q2UgP83vFqR5eVk2X9ZrnszMiFh5mOXhgMc4dxS2TdJF5tiYLMbRaK2-lNNoeqVldFv3wa2pnBu6tEkyb1245f3ZBkFWs_uF-j_IZ-9B1izwU3eTJMNnbAzgDKTodExbx1hUgIQflan8_D7CFBUkmnxgBAYbCWXNtQRnax1buLEkbzpeFGhq6XJqOZEWjJM5bquq9XZj3tQu-J3R8QexJJpExlVZKZ6cpe96Pozfe5Y8nczcX3oxIeN64OpTNN43stPziIkHD4gHutbADU61tRtl7SjQvHzYWYI6aNIvCrrRg2tmLOpby0rkS8ScJGEfuBHE4YE5L3Ho-Xr47hODyoSjwe17TGs3X2m9X_Iy03AfDAbmPfqzcVnv1L3K9eRC2wIVi8cFaeMKEa7WnPCQK6OVQnSotTeVyywix05u9D3p0BPo5EydShOWyUOFbYQ2GNbvNXxkniTDOd3qtwExpR7HysXyOE30cxHI6BgyVDIk03ynjjaAgarKreTQcYeFIATpdH_sB6Qgc6AieuS2DvVvrNHoW_sDL3D1CRmWNpynI6qqsBp4ZzphypGjkwxNtNd2S5IAoTr7_FLbkHbxDP3V0qk-k5ncBRhWE7d7bZuaK6q1K_354iTsHH8_b6h3NhEhFsZ9YiUt8oRGG10yArXHuDb6cTNhEETcQ4iFgj6RMIVH_QTj8OXW3ZJ2kjmpuLH07w=w319-h240-no?authuser=0"></img>
          <div class="middle">
          <h3>
          <Link
          to="/contact"
          style={{
          textDecoration: `blink`,
          textAlign: 'center',
          }}
          >
          <font color="#000"> 
          Contact
          </font>
          </Link>
          </h3>
          </div>
          </div>
          <h3>Besides debating, engineering things, and being a student. I spend my free time golfing, and playing video games.</h3>
        </div>
        </font> 
        </center>
    </Layout>
  )
}
export default Blog
