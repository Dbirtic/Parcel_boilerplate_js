import './scss/app.scss';
import header from './components/header'

const app = () => {
    document.getElementById('header').innerHTML = header();
}

// Init app
app();