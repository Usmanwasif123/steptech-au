import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const materials = [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png') }), // Adjust path
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png') }), // Adjust path
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png') }), // Adjust path
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png') }), // Adjust path
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png') }), // Adjust path
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://imgtr.ee/images/2024/02/20/078be0c22df45ec68a636526f0a045ab.png') }), // Adjust path
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

     // Increase the scale of the cube
     cube.scale.set(2.5, 2.5, 2.5); // Adjust the scale as needed


    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.0005; // Adjust speed of rotation
  
  // Rotate the cube left to right
  cube.rotation.y = Math.sin(time);

  // Rotate the cube up to down
  cube.rotation.x = Math.cos(time);

  // Rotate the cube right to left (opposite of left to right)
  cube.rotation.y = -Math.sin(time);

  // Rotate the cube down to up (opposite of up to down)
  cube.rotation.x = -Math.cos(time);

  // Rotate the cube around the z-axis
  cube.rotation.z += 0.01; // Adjust the speed and direction as needed

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
        height: '80vh',
        position: 'absolute',
        zIndex: '4',
        overflow: 'hidden', // Hide scrollbar
      }}
    />
  );
};

export default Cube;
