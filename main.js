import './style.css'
import * as THREE from 'three';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer ({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio) ;
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render  ( scene, camera ) ; 

const geometry = new THREE.TorusGeometry( 10,3,16,100 )
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347} );
const torus = new THREE.Mesh( geometry, material  );



scene.add(torus)



const pointlight = new THREE.PointLight(0xffffff)
pointlight.position.set(5,5,5)

scene.add(pointLlight)


function animate (){
  requestAnimationFrame ( animate );

  torus.rotation.x += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.x += 0.01;

    renderer.render( scene, camera );

}



 

