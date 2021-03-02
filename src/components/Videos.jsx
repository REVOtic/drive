import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Card from './Card';
import "./Videos.css";

function Videos() {
    const [files, setFiles] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {


        return () => {

        }
    }, [])

    return (
        <div className="videos">

        </div>
    )
}

export default Videos