import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

let App = document.getElementById('App');
App.style.width = '100vw';
App.style.height = '100vh';

App.appendChild(Header);
App.appendChild(Body);
App.appendChild(Footer);
