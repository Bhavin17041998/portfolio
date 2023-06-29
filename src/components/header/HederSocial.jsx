import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HederSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://in.linkedin.com/' rel="noreferrer" target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' rel="noreferrer" target="_blank"><FaGithub /></a>
        <a href='https://facebook.com' rel="noreferrer" target="_blank"><FaFacebookSquare /></a>
    </div>
  )
}

export default HederSocial