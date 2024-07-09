import React from 'react';
import './works.css';
import w1 from '../../asset/bec1.png';
import w2 from '../../asset/beb2.png';
import w3 from '../../asset/bec3.png';
const Works = () => {
  return (
   <section id='works'>
    <h2 className="workstitle">Cyber Crocs</h2>
    <span className="worksdesc">Cyber Crocs will provided cyber security and data protection professional services.
     Including Vulnerability Assesment, External configurations, Risk Prirotization and Remediation
      Recommendation as per standard guidelines.</span>
    <div className="worksImgs">
    <img src={w1} alt="1" className="worksimg" />
    <img src={w2} alt="2" className="worksimg" />
    <img src={w3} alt="3" className="worksimg" />
    </div>
    <button className="worksBtn">See More</button>

   </section>
  )
}

export default Works;
