import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow
}
from 'react-icons/fa';

import { rhythm } from "../utils/typography";
import './bio.css';

const Bio = (props) => {
  const { location } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter,
            instagram,
            linkedin,
            stackoverflow
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata;
  return (
    <>
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          Written by <strong>{author}</strong> who lives and works in Raleigh as a software engineer and data scientist.
        </p>
      </div>
      <div className='social-sidebar' style={ (location && location.pathname === rootPath ? { marginBottom: rhythm( 1 / 2) } : {} ) }>
        <a href={`https://www.twitter.com/${social.twitter}`}><FaTwitterSquare color='black' /></a>
        <a href={`https://www.instagram.com/${social.instagram}`}><FaInstagram color='black' /></a>
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}><FaLinkedin color='black' /></a>
        <a href={`https://stackoverflow.com/${social.stackoverflow}`}><FaStackOverflow color='black' /></a>
      </div>
    </>
  )
}

export default Bio
