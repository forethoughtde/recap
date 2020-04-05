import React, { useState, useEffect} from 'react';
import api from './../api'

const PhotoDetails = (props) => {

    const [photo, setPhoto] = useState({});

    useEffect( () => {
        console.log('called');
        api['fetchPhoto'](props.match.params.id).then(data =>{console.log(data);setPhoto(data);})
    });

    return (
        <div>
            <h1>{photo.title}</h1>
            <img src={photo.url} alt=""/>
        </div>
    );
}

export default PhotoDetails;
