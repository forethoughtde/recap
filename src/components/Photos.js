import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import api from './../api'

const Photos = ()=>{
    const [photos, setPhotos] = useState([]);

    useEffect(()=>{
        api['fetchPhotos']().then(data=>setPhotos(data))
    }, []);

    return (
        <div>
            {
                photos.map(photo=>(
                    <Link to={'photos/' + photo.id} key={photo.id}>
                        <img src={photo.thumbnailUrl} alt=""/>
                    </Link>
                ))
            }
        </div>
    )
};


export default Photos;
