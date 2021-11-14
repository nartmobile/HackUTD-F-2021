import React from "react";
import { TwitterTweetEmbed} from 'react-twitter-embed';
import { useEffect, useState } from "react";


export default function Twitter({ match: { params }, history }) {
    const [isLoading, setLoading] = useState(true);
    const [rows1, setRows] = useState([])
    const [metric, setMetric] = useState(0)
    const [buy, setBuy] = useState("")
    
    var rows = [];
    const showPost = () => {
        console.log(params["id"])
        fetch('/api/' + new URLSearchParams({x: params["id"]})).then(res => res.json()).then(data => {
            for (var i = 0; i < data.tweets.length; i++) {
                rows.push(<TwitterTweetEmbed tweetId={data.tweets[i].id} key={i}/>);
            }
            setRows(rows);
            setMetric(data.weight)
            if(data.weight > 20) {
                setBuy("BUY!");
            }
            else {
                setBuy("DON'T BUY!");
            }
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
        <div className="container mx-auto bg-blue-100">
            <h1 className="flex items-stretch max-w-2x1 max-h-1/2 overflow-auto space-x-5">{rows1}</h1>
            <h1 className = "text-5xl font-bold font-open-sans flex justify-center">TWITTER SAYS {buy}</h1>
        </div>
    ) : (<div className="bg-blue-100 text-5xl font-bold absolute transform -translate-x-1/2 left-1/2 top-1/2 font-open-sans">Loading!</div>
    );
}