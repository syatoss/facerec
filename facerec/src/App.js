import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo/Logo.jsx' 
import 'tachyons'
import { Navigation } from './components/Navigation/Navigation.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import { useState } from 'react'
import Rank from './components/Rank/Rank.jsx' 
import Particles from 'react-particles-js'

const particles_config = {
    particles: {
        number: {
            value:150,
            density: {
                enable: true,
                value_area: 1000 
            }
        }
    }
};
function App() {
    

    return ( 
    < div className = "App">

            <Particles params={particles_config} className='particles' />
            <Navigation  />
            <Logo />
            <Rank />
            <ImageLinkForm />
            {/* <FaceRecognition /> */}
        </div>
    );
}

export default App;