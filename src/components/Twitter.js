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
        //fetch(`/api/${params.id}`).then(data => {
            console.log(data);
            console.log(data[0]);
            console.log(data.tweets[0]);
            // console.log(data.tweets[0].id);
            for (var i = 0; i < data.tweets.length; i++) {
                rows.push(<TwitterTweetEmbed tweetId={data.tweets[i].id} key={i}/>);
                console.log(rows);
            }
            setRows(rows);
        })
        console.log("rows after fetch");
        console.log(rows1);
        }
    
    useEffect(() => {

        // fetch(`/${params}`).then(res => res.json()).then(data => {
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
        <div className="container mx-auto">
            <h1>{rows1}</h1>
             {/* <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
            <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            />
            <TwitterTweetEmbed
                tweetId={'933354946111705097'}
            /> */}
        </div>
    ) : (<div> There are no tweets</div>
    );
}