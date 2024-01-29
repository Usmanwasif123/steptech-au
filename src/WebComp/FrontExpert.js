import React, {useState} from 'react';
import '../assets/WebWrapper/FrontExpert.css';


const FrontExpert = () => {
  const [content, setContent] = useState({
    paragraph: 'ReactJS is popular for its flexibility, adjustability, and convenience. Our ReactJS developers create hard software for your business involving web browsers and mobile application user interfaces.',
  });

  const handleButtonClick = (category) => {
    switch (category) {
      case 'reactjs':
        setContent({
          paragraph: 'ReactJS is popular for its flexibility, adjustability, and convenience. Our ReactJS developers create hard software for your business involving web browsers and mobile application user interfaces.',
        });
        break;
        case 'angluar':
          setContent({
            paragraph: 'We leverage AngularJS when developing captivating web applications, capturing its data binding and possession injection to diminish the need to write large code.',
          });
          break;
          case 'vue':
            setContent({
              paragraph: 'Our software engineers use VUE JS to calculate, manipulate, and validate different data to create dynamic and reciprocal user experiences.',
            });
            break;
            case 'html':
            setContent({
              paragraph: 'Our Web Development experts have years of generic experience working with HTML programming to develop best-of-kind custom websites and applications.',
            });
            break;
            case 'js':
              setContent({
                paragraph: 'Our Web Engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and reciprocal user experiences.',
              });
          }
    };
  return (
    <div className='web-section8'>
      <h1>
      Our Front- End Developer Expertise
      </h1>
      <p className='frontexp-p'>
      Our front-end development experts understand your business objectives and develop top-quality solutions that meet 
      your needs, influencing the best front-end development technologies and practices. Our front-end experts will 
      utilize tested best techniques and their in-front-end development to give you a customer-centric and appealing web 
      application.
      </p>
      <button className='reactjs-btn' onClick={() => handleButtonClick('reactjs')}>reactjs</button>
      <button className='angular-btn' onClick={() => handleButtonClick('angluar')}>angular</button>
      <button className='vue-btn' onClick={() => handleButtonClick('vue')}>vue</button>
      <button className='html-btn' onClick={() => handleButtonClick('html')}>html</button>
      <button className='js-btn' onClick={() => handleButtonClick('js')}>js</button>
      <p className='para'>{content.paragraph}</p>
    </div>
  )
}

export default FrontExpert
