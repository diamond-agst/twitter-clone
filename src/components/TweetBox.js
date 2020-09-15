import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import "./TweetBox.css";
import db from "../firebase"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Julia Medelean",
            username: "diamond_agst",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"
        })
        setTweetMessage("");
        setTweetImage("")


    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg" />
                    <input value={tweetMessage} type="text" placeholder="What's happening?" onChange={e => setTweetMessage(e.target.value)} />
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__imageInput" type="text" placeholder="Enter image URL" />
                <Button onClick={sendTweet} className="tweetBox__btn" type="submit">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
