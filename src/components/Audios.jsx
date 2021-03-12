import { PrivateKey } from '@textile/crypto';
import { Client, Where } from '@textile/hub-threads-client';
import ThreadID from '@textile/threads-id';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Audios.css";

function Audios() {

    const user = useSelector(selectUser);

    const [files, setFiles] = useState([]);

    const identity = PrivateKey.fromString(user.identity);

    const keyinfo = {
        key: process.env.REACT_APP_KEY,
        secret: process.env.REACT_APP_SECRET
    };

    let token = null;

    const getFiles = async (key, identity) => {
        const client = await Client.withKeyInfo(key)
        token = await client.getToken(identity)
        const query = new Where('ftype').eq('audio');
        const threads = await client.listThreads();
        const datathreadId = ThreadID.fromString(threads[0].id.toString());
        const recievedFiles = await client.find(datathreadId, 'data', query);
        // @ts-ignore
        setFiles(recievedFiles.map(file => ({ file: file.file, desc: file.description, date: file.date, ftype: file.ftype, name: file.name, id: file._id })));

    }

    useEffect(() => {
        getFiles(keyinfo, identity)
    }, [keyinfo])

    return (
        <div className="audios">
            {files.map(file => <div id={file.id} className="audiofile">
                <audio controls preload="true" ><source src={`https://ipfs.infura.io/ipfs/${file.file}`} type="" /></audio><div className="audio__info">
                    <div className="audio__meta"><h4>{file.name.substr(0, 20)}</h4><span>{file.date}</span></div>

                    <div className="audio__footer">
                        <p>{file.desc.substr(0, 29) + '...'}</p> <a href={`https://ipfs.infura.io/ipfs/${file.file}`}>View</a>
                    </div>
                </div></div>)}
        </div>
    )
}

export default Audios;
