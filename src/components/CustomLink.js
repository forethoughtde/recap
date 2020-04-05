import React from 'react';
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'
const CustomLink = ({ to, image })=>{

    if (to && to.match(/^(https:\/\/*|http:\/\/*|mailto:*)/)) {
        return (
            <Link to={to} rel="nofollow noopener" target="_blank"/>
        )
    }

    return (
        <Link to={to}>
            <img src={image} alt=""/>
        </Link>
    );

};

export default CustomLink;

