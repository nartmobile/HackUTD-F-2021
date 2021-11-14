import React from "react";
import { TwitterTweetEmbed} from 'react-twitter-embed';
import { useEffect, useState } from "react";


export default function Twitter({ match: { params }, history }) {
    const [isLoading, setLoading] = useState(true);
    const [rows1, setRows] = useState([])
    
    var rows = [];
    const showPost = () => {
        fetch(`/${params.value}`).then(res => res.json()).then(data => {
            for (var i = 0; i < data.length; i++) {
                rows.push(<TwitterTweetEmbed tweetId={data[i].id} key={i}/>);
                
            }
            setRows(rows);
        })
        }
    
    useEffect(() => {
        // fetch(`/${params}`).then(res => res.json()).then(data => {
           showPost();
           console.log(rows1.length)
           setLoading(false);
           
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