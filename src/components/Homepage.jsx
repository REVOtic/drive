import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Card from "./Card";
import "./Homepage.css";
import { Client, createUserAuth } from '@textile/hub';


function Homepage() {

    const [userAuth, setUserAuth] = useState(null);
    const user = useSelector(selectUser);

    const keyinfo = {
        key: "b5zpamgtqqj2ksfukwzpywwumua",
        secret: "b4suuh4urqiba3pugjcroxvuyunkx2a4ku4dbkfq"
    };

    async function auth(keyinfo) {
        // Create an expiration and create a signature. 60s or less is recommended.
        const expiration = new Date(Date.now() + 60 * 1000)
        // Generate a new UserAuth
        await createUserAuth(keyinfo.key, keyinfo.secret ?? '', expiration).then(userauth => setUserAuth(userauth)).catch(e => console.log(e));
        return userAuth
    }

    async function setupDB(auth, identity) {
        // Initialize the client
        const client = Client.withUserAuth(auth)

        // Connect the user to your API
        const userToken = await client.getToken(identity)

        // Create a new DB
        const threadID = await client.newDB(undefined, 'nasa')

        // Create a new Collection from an Object
        const buzz = {
            name: 'Buzz',
            missions: 2,
            _id: '',
        }
        await client.newCollectionFromObject(threadID, buzz, { name: 'astronauts' })

        // Store the buzz object in the new collection
        await client.create(threadID, 'astronauts', [buzz])

        return threadID
    }

    const authorize = auth(keyinfo);


    useEffect(() => {
        // setupDB(authorize, user.identity);
    }, [])

    return (
        <div className="homepage">
            <div className="cards">

            </div>
        </div >
    )
}

export default Homepage;
