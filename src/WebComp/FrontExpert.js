import React, {useState} from 'react';
import '../assets/WebWrapper/FrontExpert.css';


const FrontExpert = () => {
  const [content, setContent] = useState({
    paragraph: 'Our ReactJS developers construct hard software for your company that includes web browsers and mobile application interfaces for users.',
  });

  const handleButtonClick = (category) => {
    switch (category) {
      case 'reactjs':
        setContent({
          paragraph: 'Our ReactJS developers construct hard software for your company that includes web browsers and mobile application interfaces for users.',
        });
        break;
        case 'angluar':
          setContent({
            paragraph: 'We utilized AngularJS when building fascinating website applications, grabbing its data mandatory and occupancy injection to reduce the need to write an extensive code.',
          });
          break;
          case 'vue':
            setContent({
              paragraph: 'To compute, adapt, and validate different information to generate dynamic and reciprocating user experiences, our software developers utilize VUE JS.',
            });
            break;
            case 'html':
            setContent({
              paragraph: 'Our Web Development experts have decades of broad expertise with HTML programming for developing individual distinctive websites and applications.',
            });
            break;
            case 'js':
              setContent({
                paragraph: 'Javascript is generally employed for web development. JavaScript enables to execution of complicated features on web pages.',
              });
          }
    };
  return (
    <div className='web-section8'>
      <h1>
      Our Front- End Developer Expertise
      </h1>
      <p className='frontexp-p'>
      Our designers push the bounds of creativity, and the <b>front-end developers</b> match this with gorgeous, pixel-perfect code, utilizing the 
      most recent developments to develop your ideal website. Step Tech concentrates not only on the visual appeal of a website but also on 
      its feel; we look at the entire digital experience.

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
