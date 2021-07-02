import React from 'react';
import 'Styles/containers/About.scss';
import AboutIllustration from 'Images/question.svg';

const About = () => (
  <div className="about">
    <h1 className="about__title">What is this?</h1>
    <div className="about__description">
      <p>
        This is a simple expenses tracking app built with React. I made it because I wanted
        to get familiar with the
        {' '}
        <a href="https://www.amcharts.com/">amCharts</a>
        {' '}
        Javascript library for building charts. I got inspired by
        {' '}
        <a href="https://monefy.me/">Monefy</a>
        {' '}
        , one of my favorite apps.
      </p>
    </div>
    <div className="about__acknowledgements">
      <h2>Acknowledgements:</h2>
      <ul>
        <li>
          <a href="https://icons8.com/">Icons8</a>
          {' '}
          for the awesome icons.
        </li>
        <li>
          <a href="https://undraw.co/">unDraw</a>
          {' '}
          for the cool illustrations.
        </li>
      </ul>
    </div>
    <figure className="about__illustration">
      <img src={AboutIllustration} alt="Question mark illustration" />
    </figure>
  </div>
);

export default About;
