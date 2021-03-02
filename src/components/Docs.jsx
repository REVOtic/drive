import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Card from './Card';
import "./Docs.css";

function Docs() {

    const user = useSelector(selectUser);

    useEffect(() => {

        return () => {

        }
    }, [])
    return (
        <div className="docs">


        </div>
    )
}

export default Docs;
