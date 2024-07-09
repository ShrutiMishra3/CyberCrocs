import React from 'react';
import './skills.css';
import Malware from '../../asset/mall.png';
import Croc from '../../asset/crocss.png';
import Cb from '../../asset/Cb.png';
const Skills = () => {
  return (
<section id='skills'>
    <span className="abouttitle">What We Do?</span>
    <span className="aboutdesc">Cyber Crocs will provide cyber security and data protection professional services.
     Including Vulnerability Assesment, External configurations, Risk Prirotization and Remediation
      Recommendation as per standard guidelines. Our team will evaluate IT infrastructure, associated components,
       identifying existing threats and providing remedial solutions to enhance Cyber System Security. </span>
       <div className="aboutbars">
        <div className="aboutbar">
          <img src={Malware} alt="mall" className="aboutbarImg" />
          <div className="aboutbartext">
            <h2 className="gom">MALWARE PROTECTION</h2>
            <p>Malware security protection provides that second vital layer of protection for your computer or network.</p>
          </div>
        </div>
        <div className="aboutbar">
          <img src={Croc} alt="crocodile" className="aboutbarImg" />
          <div className="aboutbartext">
            <h2 className="gom">CYBER-ATTACKS</h2>
            <p>Cyber attacks hit businesses every day.
              “There are two types of companies: those that have been hacked, and those who don’t yet know they have been hacked.”</p>
          </div>
        </div>
        <div className="aboutbar">
          <img src={Cb} alt="Cyber" className="aboutbarImg" />
          <div className="aboutbartext">
            <h2 className="gom">CYBER SECURITY SERVICES</h2>
            <p>Cybersecurity as a Service (CSaaS): By tackling each phase of a cyberattack surface,
               our IT security services bolster your cyber protection.  </p>
          </div>
        </div>
       </div>
</section>
  )
}

export default Skills;
