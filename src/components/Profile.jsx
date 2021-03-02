import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import "./Profile.css";

function Profile() {

    const [files, setFiles] = useState([]);

    const user = useSelector(selectUser);

    const dispatch = useDispatch();


    useEffect(() => {


        return () => {

        }
    }, []);

    return (
        <div className="profile">
            <div className="profile__user">
                <Avatar style={{ width: "100px", height: "100px", border: "4px solid white", background: "white" }} src={user.photoUrl} />
                <div className="profile__details">
                    <div className="profile__detailsItem"><div>Name:</div> <span>{user.displayName}</span></div>
                    <div className="profile__detailsItem"><div>Email:</div>   <span>{user.email}</span></div>
                    <div className="profile__detailsItem"><div>Usage:</div>   <span>{files.length} files</span></div>
                </div>
            </div>
            <Button onClick={() => dispatch(logout())}>Signout</Button>
        </div>
    )
}

export default Profile
