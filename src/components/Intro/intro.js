import React from 'react';
import './intro.css';
import bg from '../../asset/image.png';
import btnImg from '../../asset/Training.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent"> 
        <span className="welcome">Welcome,</span>
        <span className="introtext">To The <span className="depname">CyberCrocs</span><br/>SafeGuard Cyber Solutions</span>
        <p className="intropara">CyberCrocs provides Cyber Security and data protection services to Clients. Including RaaS, VAPT , <br/> 
        Identifying existing threats and providing remedial solutions to enhance system security </p>
       <Link><button className="btn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
        <img src={btnImg} alt="Training" className='btnImg' />Trainings
        </button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
