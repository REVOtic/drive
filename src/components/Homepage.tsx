import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// @ts-ignore
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Homepage.css";
import { Client, createUserAuth, Identity, KeyInfo, PrivateKey, ThreadID } from '@textile/hub';
import { Buckets, UserAuth } from '@textile/hub'


function Homepage() {
    const user = useSelector(selectUser);

    const identity: Identity = PrivateKey.fromString(user.identity);

    const keyinfo: KeyInfo = {
        key: "bziihv26ota7bqegjxhd3coas4q",
        secret: "ba3po7yxlfklng63e46aemq3cfodtgsyn5rududq"
    };

    async function auth(keyinfo: KeyInfo) {
        // Create an expiration and create a signature. 60s or less is recommended.
        const expiration = new Date(Date.now() + 60 * 10000)
        // Generate a new UserAuth
        console.table(keyinfo);
        const userAuth = await createUserAuth(keyinfo.key, keyinfo.secret!, expiration);
        console.table(userAuth);
        return userAuth
    }

    const getOrCreate = async (auth: UserAuth, bucketName: string) => {
        const buckets = Buckets.withUserAuth(auth)
        // Automatically scopes future calls on `buckets` to the Thread containing the bucket
        const { root, threadID } = await buckets.getOrCreate(bucketName)
        if (!root) throw new Error('bucket not created')
        const bucketKey = root.key
        return { buckets, bucketKey }
    }


    /* const authorize = async (key: KeyInfo, identity: Identity) => {
        const client = await Client.withKeyInfo(key)
        await client.getToken(identity)
        console.log(client)
        return client
    }
 */

    const astronauts = {
        title: "Astronauts",
        type: "object",
        required: ["_id"],
        properties: {
            _id: {
                type: "string",
                description: "The instance's id.",
            },
            name: {
                type: "string",
                description: "The astronauts name.",
            },
            missions: {
                description: "The number of missions.",
                type: "integer",
                minimum: 0,
            },
        },
    }

    async function start(schema: any, key: KeyInfo, identity: Identity) {
        const client = await Client.withKeyInfo(key)
        const token = await client.getToken(identity)
        console.log(client);
        console.log(token);

        /**
         * Setup a new ThreadID and Database
         */
        /* const threadId = ThreadID.fromRandom()
        console.log("New threadId", threadId, " ", typeof (threadId)); */

        /**
         * Each new ThreadID requires a `newDB` call.
         */
        console.log(client);

        /* await client.newDB(threadId, "test");      // doesn't create a new DB
        console.log("new thread created"); */
        /**
         * We add our first Collection to the DB for any schema.
         */
        /* console.log(schema);

        await client.newCollection(threadId, { name: 'Astronaut', schema }); */
        const threads = await client.listThreads();
        console.log(threads);

    }



    useEffect(() => {
        start(astronauts, keyinfo, identity)
    }, [])

    return (
        <div className="homepage">
            Hello homepage
        </div >
    )
}

export default Homepage;
