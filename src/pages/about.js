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
          <img src="https://lh3.googleusercontent.com/dPfJlUCoRsLanRhTGSwv9nFDSBdowvYXfB72BORQCDkPyrkymksNo3-JfdlAFfgq-85X0P3JARQJGnJNRSvU5wzjH-xzAeROuYp_MpFhq298cOIU6qmCRiHqK9bIprAtlpeHs_G2VJA-wx61SfahuzWKuqI6BBfl5sBVfXs7A1snQgUIClDH3oxOyksB5e138QeADQ7T6cUEpLoqs1dKDYWdEFj1QjhVV8uX27C9UT3rFp79vYTmCdys6IlZSIjFov50AIXJKT3t3WQ6A2IcwEMJ2s7JI0v1WYhb1TPuUJzjY1v_bq4F6jRRrqHJu8BTuY3UqmIwvhKuIIXHU7Cjp3zUMre8N1s-rhLEIuJeGII-zHkfAzuqH_DIDSinrnFNpVwR6JHonp_N3qnvx9fITx_jCFRvHAiTm2o21A8OT2FLc76qMd0yFfT4H-wucxMECp29yenRM51DpK6lYyD6qiMQplU7bxHoAI02uMXJAPXfkBuaHX-34j7zoiWotnIlpOEzTCbDWHmutc8wzFBp7gh_d2FW2AwIoSvCSKJxFmnUlU_VnxRH8DcTNyGPg2Sl9778fcqY_nF1GtqlKHg-1QfMfIaEyK_5pBoggSbu6I9utpkL6HSfDmUUQnSsaO0B0MrQDnE_RO3mhm7l9_JgUZsjRRU5x8yT2SLYCP4Z_hQlp7lcrUuCxpETRYFrWdPK39PYwKim9ZdFQIQSErv1ABE=w1233-h924-no?authuser=0"></img>
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
