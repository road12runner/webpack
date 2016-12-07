//import login from './login';
// import boostrap from '../css/bootstrap.css';
// import styles from '../css/app.css';


require('../css/bootstrap.css');
require('../css/app.scss');
var img = document.createElement('img');
img.style.height = '25%';
img.style.width = '25%';
img.src = require('../images/webpack.logo.png');
document.getElementById('img_container').appendChild(img);


//require('css!./styles.css');

console.log('Home Page');