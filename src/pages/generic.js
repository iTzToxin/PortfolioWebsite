import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic from '../assets/images/TGPscreenshot.png'
import pic2 from '../assets/images/Code.jpg'

class Generic extends React.Component 
{
  render() 
  {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic} alt="" /></span>
            <h1>The Gauntlet Prismatic</h1>
            <h2>Unreal Engine 4,  April 2017 - June 2018</h2>
            <h2>Lead Gameplay Programmer</h2>
            <p> TGP was a project developed in the Unreal Engine by a team of 17 people. As lead gameplay programmer I worked mainly on player functionality,
               including fundamental mechanics such as the fast paced movement as well as the combat abilities. I implemented systems that allowed gameplay designers
                to rapidly test and modify aspects of the players abilities. All of the gameplay systems were built in C++ and exposed to the Unreal editor for designers to be able to use them in Blueprinting.</p>
          </section> 
        </div>

        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic2} alt="" /></span>
            <h1>Personal C++ Engine</h1>
            <h2>January 2017 - Current</h2> 
            <p> This engine was originally created as a part of some of my classes in college, however I've continued development on my own as a means to practice and build integral 
              systems used in the games industry. Over time I have built a wide variety of different 
              systems including: Entity Component System, Script binding, Reflection, Networking, Animation, AI.</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
