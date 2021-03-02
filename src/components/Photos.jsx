import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Card from './Card';
import "./Photos.css";

function Photos() {

    const [files, setFiles] = useState([]);
    const user = useSelector(selectUser);


    useEffect(() => {


        return () => {

        }

    }, [])

    return (
        <div className="photos">
            {files.map(file => <Card
                filehash={file.filehash}
                filename={file.filename}
                date={file.date}
                desc={file.desc}
                id={file.id}
                key={file.id}
                ftype={file.ftype} />)}
        </div>
    )
}

export default Photos
