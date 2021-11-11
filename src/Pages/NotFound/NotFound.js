import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%'}} src="https://i.ibb.co/LZwkZm4/404.png" alt="" />
            <Link to="/"><button className="btn btn-info">Go Back</button></Link>
        </div>
    );
};

export default NotFound;