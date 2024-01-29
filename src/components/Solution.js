import React from 'react';
import '../assets/wrapper/Solution.css';
import {Link} from 'react-router-dom';
import circle from '../assets/images/circle.png';
import line from '../assets/images/lines.png';
import ang from '../assets/images/Ang.png';
import js from '../assets/images/js.png';
import py from '../assets/images/py.png';
import node from '../assets/images/node.png';
import ios from '../assets/images/ios.png';
import and from '../assets/images/and.png';
import re from '../assets/images/re.png';
import fl from '../assets/images/fl.png';
import wf from '../assets/images/wf.png';
import fb from '../assets/images/fb.png';
import xd from '../assets/images/xd.png';
import fg from '../assets/images/fg.png';
import ht from '../assets/images/ht.png';
import ko from '../assets/images/ko.png';
import gc from '../assets/images/gc.png';
import st from '../assets/images/st.png';
import sw from '../assets/images/sw.png';
import aws from '../assets/images/aws.png';

const Solution = () => {
  return (
    <div className='solution-container'>
        <div className='sol-background'></div>
        <div id='sol-line1'></div>
        <div id='sol-line2'></div>
        <h1 class='sol-heading-left' >ONE-STOP CREATIVE DESIGN & DEVELOPMENT SOLUTION</h1>
        <h2 className='sol-heading2-left' >Step Tech Is A Creative Design & Software 
          Development Company Based In Melbourne, Australia.</h2>
        <p className='sol-para-left' >We provide creative, IT, and digital marketing solutions to small and medium 
          enterprises using cutting-edge technology. We do not only help businesses with brand 
          designs, websites, apps, and game design and development, 2D & 3D animation, product 
          photography, and videography but also optimize their digital potential with SEO, social 
          media, and search engine management. It’s what makes us a complete software development 
          company.
        </p>
        <Link to='/step-tech-on-designrush' className='btn-design'>
          Step Tech on designrush
        </Link>
        <div className='right-side'>
          <img src='https://i.ibb.co/WDV5tKS/Layer-1.png' alt="layer"/>
          <div className='right-half'>&nbsp;
            <img className='circle' src={circle} alt='web-design' />
            <img className='lines' src={line} alt='lines'/>
            <img className='ang' src={ang} alt='angular'/>
            <img className='js' src={js} alt='javascript'/>
            <img className='py' src={py} alt='python'/>
            <img className='node' src={node} alt='node'/>
            <img className='ios' src={ios} alt='ios'/>
            <img className='and' src={and} alt='android'/>
            <img className='re' src={re} alt='react'/>
            <img className='fl' src={fl} alt='flutter'/>
            <img className='sw' src={sw} alt='swift'/>
            <img className='wf' data-aos="slide-up" data-aos-duration="600" data-aos-easing="ease-in-sine" src={wf} alt='wf'/>
            <img className='fb' data-aos="slide-right" data-aos-duration="600" data-aos-easing="ease-in-sine" src={fb} alt='firebase'/>
            <img className='aws' data-aos="slide-left" data-aos-duration="600" data-aos-easing="ease-in-sine" src={aws} alt='aws'/>
            <img className='xd'  data-aos="slide-up" data-aos-duration="600" data-aos-easing="ease-in-sine" src={xd} alt='xd'/>
            <img className='fg' data-aos="slide-down" data-aos-duration="600" data-aos-easing="ease-in-sine" src={fg} alt='figma'/>
            <img className='ht' data-aos="slide-up" data-aos-duration="600" data-aos-easing="ease-in-sine" src={ht} alt='html'/>
            <img className='ko' data-aos="slide-right" data-aos-duration="600" data-aos-easing="ease-in-sine" src={ko} alt='ko'/>
            <img className='gc' data-aos="slide-left" data-aos-duration="600" data-aos-easing="ease-in-sine"src={gc} alt='googlecloud'/>
            <img className='st' src={st} alt='stack'/>
          </div>
        </div>
    </div>
  )
}

export default Solution
