import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import "./Upload.css";
import { IconButton } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { Client, createUserAuth, Identity, KeyInfo, PrivateKey, ThreadID } from '@textile/hub';
const React = require('react');
const CreateIPFSClient = require('ipfs-http-client');



const ipfsClient = CreateIPFSClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });


function Upload() {

    const [ext, setExt] = useState("");
    const [process, setProcess] = useState("");
    const [exist, setExist] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    let ftype = null;

    const [added_file_hash, setFileHash] = useState(null);

    const user = useSelector(selectUser);

    const identity = PrivateKey.fromString(user.identity);

    const history = useHistory();

    const keyinfo = {
        key: process.env.REACT_APP_KEY,
        secret: process.env.REACT_APP_SECRET
    };

    const dataschema = {
        title: "Drive Data",
        type: "object",
        required: ["_id"],
        properties: {
            _id: {
                type: "string",
                description: "The instance's id.",
            },
            user: {
                type: "string",
                description: "The user's identity",
            },
            file: {
                description: "The hashed value of file",
                type: "string",
            },
            ftype: {
                description: "The type of file being uploaded",
                type: "string",
            },
            name: {
                description: "The name of the file uploaded",
                type: "string",
            },
            description: {
                description: "The description of the file",
                type: "string",
            },
            date: {
                description: "The date of the file",
                type: "string"
            }
        },
    }

    async function push(schema, key, identity) {
        const client = await Client.withKeyInfo(key)
        const token = await client.getToken(identity)

        const file = {
            user: user.identity,
            file: added_file_hash,
            ftype: ftype,
            name: name,
            description: desc,
            date: date,
            id: ''
        }

        let threads = await client.listThreads();
        if (threads.length === 0) {
            /**
             * Setup a new ThreadID and Database
             */
            const threadId = ThreadID.fromRandom()

            /**
             * Each new ThreadID requires a `newDB` call.
             */

            await client.newDB(threadId, "data");
            console.log("new thread created");

            /**
             * We add our first Collection to the DB for any schema.
             */

            await client.newCollection(threadId, { name: 'data', schema: schema });
        }


        threads = await client.listThreads();
        /* await client.deleteDB(ThreadID.fromString(threads[0].id.toString()));
        console.log("Test db deleted"); */
        const datathreadId = ThreadID.fromString(threads[0].id.toString());

        // Creating a schema instance (adding data to the collection)
        await client.create(datathreadId, 'data', [file]);
        console.log("Data Added Successfully");

    }

    const captureFile = function (event) {
        setProcess("Wait till we process the file");
        event.stopPropagation()
        event.preventDefault();
        saveToIpfs(event.target.files);
        const extension = String(event.target.files[0].name.split('.').pop()).toLowerCase();
        setExt(extension);
    }

    const saveToIpfs = async function ([file]) {
        try {
            const added = await ipfsClient.add(file)
            setFileHash(added.cid.toString())
        } catch (err) {
            console.error(err)
        }
        setProcess("");
    }

    const fileExists = async () => {

    }

    const pushFiles = async () => {

        await push(dataschema, keyinfo, identity);
    }

    const handleSubmit = function (event) {
        event.preventDefault();
        console.log(ext);
        if (ext === 'jpg' || ext === 'png' || ext === 'jpeg' || ext === 'gif') ftype = "image";
        else if (ext === 'mp4' || ext === 'mov' || ext === 'wmv') ftype = "video";
        else if (ext === 'doc' || ext === 'pdf' || ext === 'docx') ftype = "document";
        else if (ext === 'mp3' || ext === 'wav') ftype = "audio";

        if (added_file_hash && name && desc && date) {

            pushFiles();

            history.push("/");
        }
    }




    if (ipfsClient) {
        return (
            <div className="upload" >
                <div className="upload__form" >
                    <form id='capture-media' onSubmit={handleSubmit} className="ui form" >
                        <div className="upload__formLeft" style={{ backgroundImage: added_file_hash ? `url(https://ipfs.infura.io/ipfs/${added_file_hash})` : "none", }
                        }>
                            <input className="input" type='file' accept='jpg, jpeg, png, pdf, mp3, mp4' name='input-file' id='input-file' onChange={captureFile} required />
                            <IconButton id="icon-button" onClick={(e) => document.getElementById('input-file').click()
                            }> <PublishIcon /></IconButton >
                            <h4>{added_file_hash ? "File Processed Successfully" : process} </h4>
                        </div>
                        < div className="upload__formRight" >

                            <input className="input" value={name} placeholder="Name of your file" onChange={(e) => setName(e.target.value)} type='text' name='name' id='file-name' required />
                            <input className="input" value={desc} placeholder="A description of your file" onChange={(e) => setDesc(e.target.value)} type='text' name='desc' id='description' required />
                            <input
                                className="ui input"
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                            <button className="ui button" type="submit" > Upload </button>
                        </div>
                    </form>
                </div>
            </div>

        )

    }
}

export default Upload;
