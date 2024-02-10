import React, {useState} from 'react';
import '../assets/WebWrapper/BackExpert.css';


const BackExpert = () => {
  const [content, setContent] = useState({
    paragraph: 'Our PHP developer turns your concept into online web solutions and advances within the favorable timeframe and budget with a cleverly joined DevOps workflow, constant feedback, and an outcome-oriented strategy.',
  });

  const handleButtonClick = (category) => {
    switch (category) {
      case 'php':
        setContent({
          paragraph: 'Our PHP developer turns your concept into online web solutions and advances within the favorable timeframe and budget with a cleverly joined DevOps workflow, constant feedback, and an outcome-oriented strategy.',
        });
        break;
        case 'nodejs':
          setContent({
            paragraph: 'Our Node. JS experience helps organizations of every kind, whether they are startups or established businesses seeking a unique web-based application. Our professionals use agile Node.JS techniques to create backend and server-side apps.',
          });
          break;
          case 'laravel':
            setContent({
              paragraph: "Our Laravel Expert Team turns your business's ideas into interactive reality, giving customers the best browsing experience possible.",
            });
            break;
            case 'c#':
            setContent({
              paragraph: 'Our experts specialize in enterprise-level software development using C#. We manage everything from custom software solutions to hybrid mobile applications for you.',
            });
            break;
            case '.net':
              setContent({
                paragraph: 'Our Web Engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and reciprocal user experiences.With a .Net system that is tailored to suit your requirements, we are prepared to handle both your internal and external activities. Get unique Windows programs intended that work across many devices.',
              });
              break;
              case 'expressjs':
                setContent({
                  paragraph: 'Our ExpressJS developers provide proper and dependable web development solutions. Projects requiring lightweight and user-friendly web app solutions are finished with the greatest of attention.',
                });
          }
    };
  return (
    <div className='web-section9'>
      <h1>
      Our Back-End Developer Expertise
      </h1>
      <p className='backexp-p'>
      Collaborating with Step Tech involves working with some of Australia's top <b>back-end developers</b>. Our developers work with a variety of 
      languages and frameworks, including PHP, Laravel,.NET, and more. After meticulously thinking we start coding to make sure that the system
      we used in overall development is simple and logical. 
      </p>
      <button className='php-btn' onClick={() => handleButtonClick('php')}>php</button>
      <button className='nodejs-btn' onClick={() => handleButtonClick('nodejs')}>nodejs</button>
      <button className='laravel-btn' onClick={() => handleButtonClick('laravel')}>laravel</button>
      <button className='chashtag-btn' onClick={() => handleButtonClick('c#')}>c#</button>
      <button className='net-btn' onClick={() => handleButtonClick('.net')}>.net</button>
      <button className='expressjs-btn' onClick={() => handleButtonClick('expressjs')}>expressjs</button>
      <p className='para'>{content.paragraph}</p>
    </div>
  )
}

export default BackExpert
