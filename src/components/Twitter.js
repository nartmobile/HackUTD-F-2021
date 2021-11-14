import React from "react";
import { TwitterTweetEmbed} from 'react-twitter-embed';
import { useEffect, useState } from "react";


export default function Twitter({ match: { params }, history }) {
    const [state, setstate] = useState(`${params.id}`)
    useEffect(() => {
        // fetch(`/${params}`).then(res => res.json()).then(data => {
        //     for (var i = 0; i < data.length; i++) {
        //         <Twitter data={data[i]} />
        //     }
        console.log(state)
    })

    return (
        <div className="container mx-auto">
            <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
            <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
            <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
        </div>
    );
}