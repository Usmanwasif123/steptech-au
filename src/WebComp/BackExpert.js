import React, {useState} from 'react';
import '../assets/WebWrapper/BackExpert.css';


const BackExpert = () => {
  const [content, setContent] = useState({
    paragraph: 'We bring authentically and trusted web development solutions with our ExpressJS development experts. Projects requiring lightweight and user-friendly web app solutions are done with utmost perfection. With our years of experience and unparalleled skills, we will build exceptional applications customized for your business needs. Get connected now.',
  });

  const handleButtonClick = (category) => {
    switch (category) {
      case 'php':
        setContent({
          paragraph: 'We bring authentically and trusted web development solutions with our ExpressJS development experts. Projects requiring lightweight and user-friendly web app solutions are done with utmost perfection. With our years of experience and unparalleled skills, we will build exceptional applications customized for your business needs. Get connected now.',
        });
        break;
        case 'nodejs':
          setContent({
            paragraph: 'We leverage AngularJS when developing captivating web applications, capturing its data binding and possession injection to diminish the need to write large code.',
          });
          break;
          case 'laravel':
            setContent({
              paragraph: 'Our software engineers use VUE JS to calculate, manipulate, and validate different data to create dynamic and reciprocal user experiences.',
            });
            break;
            case 'c#':
            setContent({
              paragraph: 'Our Web Development experts have years of generic experience working with HTML programming to develop best-of-kind custom websites and applications.',
            });
            break;
            case '.net':
              setContent({
                paragraph: 'Our Web Engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and reciprocal user experiences.',
              });
              break;
              case 'expressjs':
                setContent({
                  paragraph: 'Our Web Engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and reciprocal user experiences.',
                });
          }
    };
  return (
    <div className='web-section9'>
      <h1>
      Our Back-End Developer Expertise
      </h1>
      <p className='backexp-p'>
      We optimize functionality, security, and performance, ensuring a solid foundation that supports your platform’s 
      growth and evolution. Step Tech Global boasts expertise in various back-end technologies such as PHP, Node JS, 
      Laravel, C#, .NET, and Express JS. This allows us to build powerful, scalable, and secure web applications.
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
