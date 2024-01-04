import React from 'react';
import { SphereGeometry, MeshLambertMaterial,} from 'three';
import * as THREE from 'three';

const Sphere = () => {
    const Radius = 0.3; 
    
     // Create a linear gradient texture
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 1;

  const context = canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#FBFFFF'); // Start color
  gradient.addColorStop(1, '#FDFEFF'); // End color
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradientTexture = new THREE.CanvasTexture(canvas);
  const sphereGeometry = new SphereGeometry(Radius, 64);
  const SphereMaterial = new MeshLambertMaterial({ map: gradientTexture});
  
    return (
        <mesh geometry={sphereGeometry} material={SphereMaterial} position={[1, -2.5, 0.1, 0]} />   
    );
  };
export default Sphere
