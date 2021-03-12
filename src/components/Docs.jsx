import { PrivateKey } from '@textile/crypto';
import { Client, Where } from '@textile/hub-threads-client';
import ThreadID from '@textile/threads-id';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Card from './Card';
import "./Docs.css";

function Docs() {

    const user = useSelector(selectUser);
    const [files, setFiles] = useState();
    const identity = PrivateKey.fromString(user.identity);

    const keyinfo = {
        key: process.env.REACT_APP_KEY,
        secret: process.env.REACT_APP_SECRET
    };

    let token = null;

    const getFiles = async (key, identity) => {
        const client = await Client.withKeyInfo(key)
        token = await client.getToken(identity)
        const query = new Where('ftype').eq('document');
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
        <div className="docs">
            <div className="cards">
                {/* @ts-ignore */}
                {files?.map(file => <Card
                    filehash={file.file}
                    filename={file.name.substr(0, 21) + '...'}
                    date={file.date}
                    desc={file.desc.substr(0, 28) + '...'}
                    id={file.id}
                    key={file.id}
                    ftype={file.ftype}
                />)}
            </div>
        </div >
    )
}

export default Docs;
