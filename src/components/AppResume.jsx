import React, { useState,useEffect } from 'react';
import Header from './header';
import About from './about';
import Resume from './resume';
import Contact from './contact';
import Footer from './footer';
import Portfolio from './portfolio';
import {mainData,resumeData, portfolioData} from '../resumeData/resumeData.json';

export default function AppResume (){
  const [main, setmain]=useState(mainData);
  const [resume, setResume]=useState(resumeData);
  const [portfolio, setPortfolio]=useState(portfolioData);


  useEffect(() => {
    console.log('use effect called');
    setmain(mainData);
    setResume(resumeData);
    setPortfolio(portfolioData);
  }, [main, resume, portfolio]);

    return (
      <div className="App">
        <Header data={main} />
        <About data={main} />
        <Resume data={resume} title={main.occupation} />
        <Portfolio data={portfolio} />
        <Contact data={main} />
        <Footer data={main} />
      </div>
    );
}
