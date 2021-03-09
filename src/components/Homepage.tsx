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






    useEffect(() => {

    }, [])

    return (
        <div className="homepage">
            Hello homepage
        </div >
    )
}

export default Homepage;
