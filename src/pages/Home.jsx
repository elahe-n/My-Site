import React from 'react'
import portrait from '../assets/Elahe.jpg'

function home() {
  return (
    <article>
    <img className="elaheimg" src={portrait} alt="Elahe Nourkami" />
    <h1>Elahe Nourkami</h1>
    <h4>Web Developer and Designer</h4>
    <br/>
    <section id='Skills' className="Skills">
        <h3>Skills</h3>
        <ul>
          <li>Design high and low fidelity wireframes and prototypes using Adobe XD, Figma</li>
          <li>CMS website Design (WordPress, Drupal and Jooma)</li>
          <li>HTML, CSS, Java Script, React and Node js</li>
          <li>Adobe Photoshop, Illustrator, After Effect, Audition and Premier </li>
          <li>Firebase</li>
        </ul> 
      </section> 

      <br/>
      <section id="Experience" className="Experience">
        <h3>Experience</h3>
        <ul>
          <li>Software Testing Engineer  2014 - 2021 </li>
          <li>Software support specialist     				 2011 – 2014</li>
          <li>IT manager 					              2009 - 2011</li>
        </ul> 
      </section> 
      <br/>
      <br/>
      <br/>

</article>
  )
}

export default home
