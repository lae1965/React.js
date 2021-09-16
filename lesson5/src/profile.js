import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {
    return (
        <>
            <Link to="/">
                <span style={{display: 'block'}}>Home</span>
            </Link>
            <h3>This is profile page</h3>
            <input type="checkbox" /*checked={showName} value={showName} onClick={setShowName}*/></input>
        </>
    )    
}