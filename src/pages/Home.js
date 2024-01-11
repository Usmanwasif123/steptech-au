import React from 'react';
import Navbar from '../components/Navbar';
import Quote from './Quote';
import { Canvas } from '@react-three/fiber';
import Sphere from '../components/Sphere';
import Tetra from '../components/Tetra';
import { OrbitControls } from '@react-three/drei';
import Tetra1 from '../components/Tetra1';
import Tetra2 from '../components/Tetra2';
import About from '../components/About';
import Solution from '../components/Solution';
import Services from '../components/Services';
import Process from '../components/Process';
import Presentation from '../components/Presentation';
import Partner from '../components/Partner';
import Chooseus from '../components/Chooseus';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Brand from '../components/Brand';

const Home = () => {
  return (
    <div>
      <Canvas style={{position: 'absolute', zIndex: '5'}}>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[10, 15, 10]} angle={0.5} />
       <Sphere/>
       <Tetra/>
       <Tetra1/>
       <Tetra2/>
      </Canvas>
      <Navbar/>
      <Quote/>
      <About/>
      <Solution/>
      <Services/>
      <Process/>
      <Brand/>
      <Presentation/>
      <Partner/>
      <Chooseus/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
