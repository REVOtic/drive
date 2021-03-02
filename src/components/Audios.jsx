import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Audios.css";

function Audios() {

    const user = useSelector(selectUser);


    useEffect(() => {

        return () => {
        }

    }, [])

    return (
        <div className="audios">

        </div>
    )
}

export default Audios;
