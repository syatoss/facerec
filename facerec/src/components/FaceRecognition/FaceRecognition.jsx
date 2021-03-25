import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl , box })=> {

    return (
        <div className="center ma">
            <div className="center ma">
                <img
                    alt=""
                    id="inputImage"
                    src={imageUrl}
                    style=
                    {{
                        width:'20em',
                        height: '14em'
                    }}
                />
                <div
                    className="bounding-box"
                    style= {box}
                />
            </div>
        </div>
    )
}

export default FaceRecognition;
