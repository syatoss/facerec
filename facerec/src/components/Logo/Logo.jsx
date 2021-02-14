import './Logo.css'
import brain from './brain.png'
import Tilt from 'react-tilt'

export const Logo = ()=>{
    return (

        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className='Tilt-inner'>
                    <img src={brain} alt='Logo' style={{paddingTop:25,width:50,height:50}} />
                </div>
            </Tilt>  
        </div>
    )
}


export default Logo;