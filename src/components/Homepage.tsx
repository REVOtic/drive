import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// @ts-ignore
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Homepage.css";
import { Client, createUserAuth, Identity, KeyInfo, PrivateKey, ThreadID, Where } from '@textile/hub';
import { Buckets, UserAuth } from '@textile/hub'
import Card from "./Card";


function Homepage() {
    const user = useSelector(selectUser);
    const [files, setFiles] = useState();
    const identity: Identity = PrivateKey.fromString(user.identity);

    const keyinfo: KeyInfo = {
        // @ts-ignore
        key: process.env.REACT_APP_KEY,
        secret: process.env.REACT_APP_SECRET
    };

    let token = null;

    const getFiles = async (key: KeyInfo, identity: Identity) => {
        const client = await Client.withKeyInfo(key)
        token = await client.getToken(identity)
        const query = new Where('user').eq(user.identity);
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
        <div className="homepage">
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

export default Homepage;
