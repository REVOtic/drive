import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Homepage.css";
import { Client, createUserAuth, ThreadID } from '@textile/hub';


function Homepage() {
    const user = useSelector(selectUser);

    const keyinfo = {
        key: "b5zpamgtqqj2ksfukwzpywwumua",
        secret: "b4suuh4urqiba3pugjcroxvuyunkx2a4ku4dbkfq"
    };

    async function auth(keyinfo) {
        // Create an expiration and create a signature. 60s or less is recommended.
        const expiration = new Date(Date.now() + 60 * 10000)
        // Generate a new UserAuth
        console.table(keyinfo);
        const userAuth = await createUserAuth(keyinfo.key, keyinfo.secret, expiration);
        console.table(userAuth);
        return userAuth
    }

    async function setupDB(auth, identity) {
        // Initialize the client
        const client = Client.withUserAuth(auth)

        // Connect the user to your API
        // const userToken = await client.getToken(identity)

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

    const client = Client.withUserAuth(auth(keyinfo));
    console.table("The client", client);

    const buzz = {
        name: 'Buzz',
        missions: 2,
        _id: '',
    }

    async function start(client, schema) {
        /**
         * Setup a new ThreadID and Database
         */
        const threadId = ThreadID.fromRandom();
        console.log("New threadId", threadId);

        /**
         * Each new ThreadID requires a `newDB` call.
         */
        await client.newDB(threadId, 'first');      // doesn't create a new DB
        console.log("new thread created");
        /**
         * We add our first Collection to the DB for any schema.
         */
        await client.newCollection(threadId, { name: 'Astronaut', schema });
    }


    useEffect(() => {
        // setupDB(auth(keyinfo), user.identity);
        start(client, buzz);
    }, [])

    return (
        <div className="homepage">
            Hello homepage
        </div >
    )
}

export default Homepage;
