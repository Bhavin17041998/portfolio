import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'

export const Footer = () => {
  // const [name, setName] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/name")
  //     .then((res) => res.json())
  //     .then((data) => setName(data.name));
  // }, []);

  return (

    <footer>
      <a href="/#" className='footer__logo' rel="noreferrer">Bhavin Panchal</a>

      <ul className='permalinks'>
        <li><a href="/#" rel="noopener noreferrer">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" target='_blank' rel="noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer" ><FiInstagram /></a>
        <a href="https://twiiter.com" target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bhavin Panchal. All rights Reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;