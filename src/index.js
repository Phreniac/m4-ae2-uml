import Home from './classes/Home.js';
import About from './classes/About.js';


const home = new Home();
const about = new About();

console.log('Home: ', home.obtenerBotonesNav());
console.log('About: ', about.obtenerCoordenadas());