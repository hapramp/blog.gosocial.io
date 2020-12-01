

// import React from 'react';
// import Home from '../components/Home';
// import { Helmet } from 'react-helmet'
// import { withPrefix } from 'gatsby';
// import '../styles/global.css';

// const Index = () => {
//   return (
//     <div>
//       <Helmet>
//         <html lang="en" />
//         <title>{`GoSocial: Photography, Writing, Art, & Design Challenges`}</title>
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href={`${withPrefix('/')}img/apple-touch-icon.png`} />
//         <link
//           rel="icon"
//           type="image/png"
//           href={`${withPrefix('/')}img/favicon.png`}
//           sizes="32x32" />
//         <link
//           rel="icon"
//           type="image/png"
//           href={`${withPrefix('/')}img/favicon.png`}
//           sizes="16x16" />

//         <link
//           rel="mask-icon"
//           href={`${withPrefix('/')}img/safari-pinned-tab.png`}
//           color="#ff4400" />


//         <meta name="theme-color" content="#264BBB" />
//         <meta name="description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
//         <meta name="image" content="https://getgosocial.ap/img/web_preview.png" />

//         <meta itemprop="name" content="GoSocial: Creative Challenges - Exciting Rewards" />
//         <meta itemprop="description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
//         <meta name="keywords" content="go, gosocial, challenges, contests, rewards, win, earn, creative, design, photography, writing, learn, hapramp studio, best, social media, community, skills, creative journey, self-challenges" />
//         <meta itemprop="image" content="https://getgosocial.app/img/web_preview.png" />


//         <meta property="og:title" content="GoSocial: Creative Challenges - Exciting Rewards" />
//         <meta property="og:description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
//         <meta property="og:image" content="https://getgosocial.app/img/web_preview.png" />
//         <meta property="og:url" content="https://getgosocial.app/" />
//         <meta property="og:site_name" content="GoSocial" />
//         <meta property="og:type" content="website" />

//         <meta property="twitter:card" content="summary_large_image" /> 
//         <meta property="twitter:site" content="GoSocial" />
//         <meta property="twitter:title" content="GoSocial: Creative Challenges - Exciting Rewards" />
//         <meta property="twitter:description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
//         <meta property="twitter:image" content="https://getgosocial.app/img/web_preview.png" />
        
//         <link href="https://fonts.googleapis.com/css?family=Roboto:400,900i&display=swap" rel="stylesheet" />
//         <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124845462-6" />
//         <script>
//          { `window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments)}
//           gtag('js', new Date());

//           gtag('config', 'UA-124845462-6');`}
//         </script>
//       </Helmet>
//       <Home />
//     </div>
//   );
// };

// export default Index;


import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import contestIcon from '../img/contest.svg';
import challengesIcon from '../img/challenges.svg';
import blogIcon from '../img/blog.svg';
import announcementIcon from '../img/announcement.svg';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="bg-center bg-no-repeat bg-secondary bg-cover"
          style={{
            backgroundImage: `url('/img/home-jumbotron.jpg')`,
          }}
        >
          <div className="max-w-4xl mx-auto text-white text-center py-10 sm:py-20">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black sm:font-black italic text-white"> Keep Reading, Keep Going!</h1>
            <h5 className="mt-2 text-base sm:text-base md:text-lg px-4 leading-tight">Discover everything GoSocial: Challenges, contests, updates, and inspiration.</h5>
          </div>
        </div>
        <section>
          <div className="container mr-auto ml-auto">
            <div className="sm:mt-10">
              <div className="flex h-20 sm:hidden bg-gray-245 py-4 text-gray-70 w-screen overflow-y-hidden">
                <div className="flex h-24 overflow-x-auto">
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12 ml-4" to="/tags/contest/">
                    <img className="mr-2" src={contestIcon} alt="" />
                    Contests
                  </Link>
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12" to="/tags/challenge/">
                    <img className="mr-2" src={challengesIcon} alt="" />
                    Challenges
                  </Link>
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12" to="/tags/general/">
                    <img className="mr-2" src={blogIcon} alt="" />
                    General
                  </Link>
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12" to="/tags/announcement">
                    <img className="mr-2" src={announcementIcon} alt="" />
                    Announcements
                  </Link>
                  <div className="p-1"></div>
                </div>
                
              </div>
              <h3 className="mt-5 sm:mt-0 text-base sm:text-2xl uppercase text-primary font-bold pl-4 pr-4">Latest</h3>
              <div className="mt-5 sm:mt-10"><BlogRoll /></div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
