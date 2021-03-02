import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Audios.css";

function Audios() {
    const [files, setFiles] = useState([]);
    const user = useSelector(selectUser);


    useEffect(() => {

        return () => {
        }

    }, [])

    return (
        <div className="audios">
            {files.map(file => <div className="audiofile">
                <audio controls preload><source src={`https://ipfs.infura.io/ipfs/${file.filehash}`} type="" /></audio><div className="audio__info">
                    <div className="audio__meta"><h4>{file.filename.substr(0, 20)}</h4><span>{file.date}</span></div>

                    <div className="audio__footer">
                        <p>{file.desc.substr(0, 29) + '...'}</p> <a href={`https://ipfs.infura.io/ipfs/${file.filehash}`}>View</a>
                    </div>
                </div></div>)}
        </div>
    )
}

export default Audios;
