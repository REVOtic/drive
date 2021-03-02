import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Card from './Card';
import "./Photos.css";

function Photos() {


    const user = useSelector(selectUser);


    useEffect(() => {


        return () => {

        }

    }, [])

    return (
        <div className="photos">

        </div>
    )
}

export default Photos
