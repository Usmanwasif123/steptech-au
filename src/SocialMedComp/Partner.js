import React, {useState} from 'react';
import '../assets/SocialMedWrapper/Partner.css';

const paragraphStyles ={
    WebkitLineClamp: 8,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

const Partner = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`smm-section6 ${isOpen ? 'open' : ''}`}>
        <h1>Best Web and App Development Company in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wyoming, USA</h1>
        <div id='line-smm'></div>
        <p style={isOpen ? null : paragraphStyles}>
            Are you also looking for the best web and app development company in the USA? Then stop scrolling anymore. 
            Step Tech Global is the best web and mobile app development services provider, but there are more-in-one 
            solutions for all your digital needs. We’ve driven the rollercoaster of startups, so we understand the 
            complexity and conquests of building a prosperous business in Wyoming. We collaborate with you as developers
             and business consultants, assisting you in voyaging the digital landscape and reaching your full potential. 
            No matter what type or size of business you have, we always provide our clients with exceptional service 
            according to their needs. We offer our clients numerous web development services, such as PHP development, 
            ruby web development, c++ web programming, ASP.net web development Services, and many more. Our website 
            development service diminishes the time-consuming coding process for various systems and streamlines your 
            site development and management.<br/><br/>
            Step Tech Global boasts an extraordinary, close-knit team with experts in all facets of app development 
            services, which we offer our clients iOS app development, android app development, react native app 
            development, and much more.  As a well-known leader in digital marketing, Step Tech Global has more than 
            300+ employees. You can trust us in every project we handle to deliver customized solutions across long-term 
            strategic goals. We serve more than only apps. We deliver our expertise and experience. Our fast, susceptible,
            and hyperscale mobile app development will help you make headway of the curve in no time!<br/><br/>
            To offer our clients a straight path to success, we stay updated with the current trends and modernization 
            and explore various custom solutions, like blockchain development, AR VR development, AI software development,
            and NFT marketplace development. These state-of-the-art solutions allow us to be your trusted technology 
            partner. With a global clientele, we tend to build futuristic Software products that help our clients overhaul
            their conventional & complex challenges. We ensure a smart, collective, and systematized management of all 
            human resources working towards our organization’s common and eventual goal. We aim to establish forward-
            looking solutions to secure growth for our clients seeking a technological conversion in their conventional 
            business modules.<br/><br/>
            Our services also include Game development using the latest technologies and advanced trends.  We offer our 
            clients the best 2D game development, board game development services, 3D Game Development, RGP Base Games, 
            Card Games, etc. We leverage our all-encompassing game development services to create thrilling games for iOS,
            Android, Windows, and the Web with invigorating game progression. Let our best RPG game developers understand
            and refine your gaming ideas to build persuasive gameplay with our custom game development services. Embrace 
            the advanced technologies by collaborating with our experts to select the perfect database, language, and 
            framework for building springy games.<br/><br/>
            Are you ready to reach your business’s full potential with the best web development company in USA? At Step 
            Tech Global, When you partner with us, you will work with knowledgeable professionals dedicated to exceeding 
            your expectations. We’ve already worked with thousands of businesses like yours in dimension and niche, so you
            can expect us to have an exhaustive understanding of your needs, industry regulations, and requirements. So 
            partner with us right now and give your business new heights with our expertise!! 
        </p>
        <button className={`smmbtn-read ${isOpen ? 'open' : ''}`} onClick={()=> setIsOpen(!isOpen)}>{isOpen ? 'read less': 'read more'}</button>
    </div>
  )
}

export default Partner
