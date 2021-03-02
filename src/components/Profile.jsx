import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import "./Profile.css";

function Profile() {



    const user = useSelector(selectUser);

    const dispatch = useDispatch();


    useEffect(() => {


        return () => {

        }
    }, []);

    return (
        <div className="profile">

        </div>
    )
}

export default Profile
