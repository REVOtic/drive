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
            {files.map(file => <Card
                filehash={file.filehash}
                filename={file.filename}
                date={file.date}
                desc={file.desc}
                id={file.id}
                key={file.id}
                ftype={file.ftype}
            />)}
        </div>
    )
}

export default Videos