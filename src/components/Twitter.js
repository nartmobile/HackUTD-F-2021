import React from "react";
import { TwitterTweetEmbed} from 'react-twitter-embed';
import { useEffect, useState } from "react";


export default function Twitter({ match: { params }, history }) {
    const [isLoading, setLoading] = useState(true);
    const [rows1, setRows] = useState([])
    
    var rows = [];
    const showPost = () => {
        console.log(params["id"])
        fetch('/api/' + new URLSearchParams({x: params["id"]})).then(res => res.json()).then(data => {
            for (var i = 0; i < data.tweets.length; i++) {
                rows.push(<TwitterTweetEmbed tweetId={data.tweets[i].id} key={i}/>);
            }
            setRows(rows);
        })
        }
    
    useEffect(() => {
        if (isLoading == false) {
            console.log(rows1.length);
            return
        }   
        showPost();
        setLoading(false);
        console.log("after setLoading");
        console.log(isLoading);
        console.log(rows1.length);
           
    })

    return isLoading ? ( <div>Loading</div>) : rows1.length ? (
        <div className="bg-blue-100">
            <div className="container mx-auto">
                <h1 className="flex items-stretch overflow-auto space-x-5">{rows1}</h1>
            </div>
        </div>
    ) : (<div className="bg-blue-100 text-5xl font-bold absolute transform -translate-x-1/2 left-1/2 top-1/2 font-open-sans">Loading!</div>
    );
}