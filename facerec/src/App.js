import './App.css';
import { Logo } from './components/Logo/Logo.jsx'
import 'tachyons'
import { Navigation } from './components/Navigation/Navigation.jsx'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import { useState , useEffect } from 'react'
import Rank from './components/Rank/Rank.jsx'
import Clarifai from 'clarifai'
import Particles from 'react-particles-js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx'

process.nextTick = setImmediate;

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


const MODEL = 'https://api.clarifai.com/Celebrity'

const app = new Clarifai.App({
    apiKey: "c1b3909c46704142b1e41f1e0f64ddaf"

});


const App = ()=> {

    const [input , setInput] = useState('')
    const [imageUrl , setImageUrl] = useState('')
    const [box , setBox] = useState({})
    const [ firstLoad , setFirstLoad ] = useState(true)


    const calculataFaceLocal = (data)=> {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);

        setBox({
            left: clarifaiFace.left_col * width,
            top: clarifaiFace.top_row * height,
            right: width - (clarifaiFace.right_col * width),
            bottom: height - (clarifaiFace.bottom_row * height)
        })
    }

    useEffect(()=> {
        if( firstLoad ) {
            setFirstLoad(false);
            return;
        }

        app.models.predict(Clarifai.FACE_DETECT_MODEL,
            imageUrl)
            .then(res=> {calculataFaceLocal(res)})
            .catch(err => {console.log(err)})
    }
     , [imageUrl]);


    const submit =()=> { setImageUrl(input) }

    const changeInput = (e)=>{
        setInput(e.target.value)
    }

    return (
    < div className = "App">

            <Particles
                params={particles_config}
                className='particles'
            />
            <Navigation  />
            <Logo />
            <Rank />
            <ImageLinkForm
                changeInput={changeInput}
                submit={submit}
            />
            <FaceRecognition
                imageUrl={imageUrl}
                box={box}
            />
        </div>
    );
}

export default App;
