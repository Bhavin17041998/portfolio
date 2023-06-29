import React from 'react'
import './portfolio.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3_2 from '../../assets/img3_2.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import laravel from '../../assets/laravel.webp';
import ci from '../../assets/ci.webp';

const Portfolios = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img5}  alt="1"/>
          </div>         
          <h3>
            E-commerce Shop
          </h3>
          <div className="portfolio__item-cta">
            <img src={laravel} alt="laravel" title='Laravel' />
            {/* <a href='https://github.com' rel="noreferrer" className='btn' target='_blank'>Github</a> */}
            {/* <a href='https://github.com' rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img2}  alt="1"/>
          </div>
          <h3>
            GMI Profiler
          </h3>
          <div className="portfolio__item-cta">
            <img src={laravel} alt="laravel" title='Laravel' />
            {/* <a href='https://github.com' rel="noreferrer" className='btn' target='_blank'>Github</a>
            <a href='https://github.com' rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img4}  alt="1"/>
          </div>
          <h3>
            Portfolio
          </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' rel="noreferrer" className='btn' target='_blank'>Github</a>
            <a href='https://github.com' rel="noreferrer"  className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img1}  alt="1"/>
          </div>         
          <h3>
            Viksat Admin Panel
          </h3>
          <div className="portfolio__item-cta">
            <img src={laravel} alt="laravel" title='Laravel' />
            <a href='https://viksat.swaratechnologies.in/' rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img6}  alt="1"/>
          </div>         
          <h3>
            Salon Management System
          </h3>
          <div className="portfolio__item-cta">
            <img src={ci}  alt="ci" title='Codeigniter'/>
            {/* <a href='https://github.com' rel="noreferrer" className='btn' target='_blank'>Github</a>
            <a href='https://github.com' rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img3_2}  alt="1"/>
          </div>
          <h3>
            MCQMANIA
          </h3>
          <div className="portfolio__item-cta">
            <img src={laravel} alt="laravel" title='Laravel' />
            {/* <a href='https://github.com' rel="noreferrer" className='btn' target='_blank'>Github</a>
            <a href='https://github.com' rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolios