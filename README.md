<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Michael Moschello's Portfolio website
</h1>
Greetings all who have made it thus far, or are Mrs. Tan.
Regardless, here is my portfolio website, I wrote it in Gatsby.js, and BOY is it a programming experience that I was not expecting. So just a sparknotes on gatsby, it is a static site generator. The static site part of this means that what Gatsby will produce are static HTML files that we load up on to a server.Now this works differently than how a lot of websites work where you visit a website and it has to go query a database or do some programming on the server itself in order to serve your web pages. So Gatsby is going to break that convention and have all of the stuff already pre-configured ahead of time and just serve that up. In that case, Gatsby is not static, and to do that, we gotta use a bunch of node.js, and JAVASCRIPT(my favorite : ) ). The final finished product that Gatsby will spit out, which is a Gatsby static site, and again this will include HTML CSS JavaScript images all the stuff that we need for our site to run, Gatsby will generate it for us so we want to think of Gatsby as a tool that will help us build a final product but we’re not just like in queueing and throwing Gatsby into an existing site necessarily.In order to do all of this generation Gatsby is going to use Node JS. Node will be running in a development environment on your computer itself. However the final sight when you ship a Gatsby sight live because it’s static it will not need Node JS on the server itself.It’s using node to help generate the files as part of its tooling system but the final result does not require node to run on the server side(sorry this kinda turned into a rant). Ok, but one of the great things about Gatsby is that it’s going to use the GraphQL querying language to get data from anywhere. Graphiql is an evolution of how to make API calls simpler and more efficient. And it’s a really great tool to make non-static stuff and interact with a bunch of APIs(sorry this kinda turned into a rant).
 
So enough about Gatsby, let's look at my website.
 
So my website is essentially split into 2 sections, the first being the header module and post stuff for interacting with the contentful api, and the bottom half being the actual layout of my pages.
 
My header.js initialises my header module and puts in my menu bar, with layout.css doing the styling of that and the background and the font for the entire site.
 
We then go to layout js, which essentially makes the website stuff from the header become continuous through all of the pages, and makes a blueprint of what each page has to be made out of. 
 
Then we go to post.jsx(which is written in react, a whole new programming language) and postmodule.css, which take the api entries from contentful and display them in a nice post format. 
 
The second half of my website is just the page files, so just a general overview of what each one does, index is the homepage and shows the blog stuff. About is my about page. Blog.js is like my default export thing that needs to happen with gatsby as it wrenders that first before adding the rest of the static page on top of it(it is a long and complicated story). Debate is my debate page and engineering is my engineering page. However, you might notice a bunch of css around, so box shadow is for my static post boxes(I can't reuse the ones from contentful as those are written in react and are meant for non-static stuff). I need to use a typescript file because I imported it just to extract the file, but now if I don't have it, my website kinda breaks so I'm just going to leave it in there. And finally page style.css just formats images.
 
I worked really hard on making sure this stuff all works for mobile, and it does, for the most part, but I have been struggling with some of the embedded files and need more time to work out those kinks.
 
SO FINALLY, at the end of this long readme that you really don't need to read, I have deployed my site at a custom domain using netlify(that I helped akash also do) at alphonse5.ga.
 
I loved this APCSA final project, and honestly, I learned a lot. Thank you Mrs. Tan