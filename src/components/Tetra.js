import React from 'react';
import { TetrahedronGeometry, MeshLambertMaterial,} from 'three';
import * as THREE from 'three';


const Tetra = () => {
    const size = 0.3; 

     // Create a linear gradient texture
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#FBFFFF'); // Start color
  gradient.addColorStop(1, '#FBFFFF'); // End color
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradientTexture = new THREE.CanvasTexture(canvas);
  const tetraGeometry = new  TetrahedronGeometry(size);
  const TetraMaterial = new MeshLambertMaterial({ map: gradientTexture});
  
    return (
      <mesh geometry={tetraGeometry} material={TetraMaterial} position={[-1, 1.7, 0.5]}
      />       
    );
  };
export default  Tetra
