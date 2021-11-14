import React from "react";

export default function About({ match: { params }, history }) {


return (
    <div>
        <h2 id="inspiration" className = "text-5xl font-bold md:ml-72 md:py-5 font-open-sans">Inspiration</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">We've seen how the rise of social media is touching every corner of our lives. With the recent trends and ease of access that stock trading has reached the global community, it is now worth taking a look at the investing craze on Twitter.</p>
        <h2 id="what-it-does" className = "font-open-sans text-5xl font-bold md:ml-72">What it does</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">This app allows users to search for a stock ticker and see how active discussion has been and whether or not based on that level of engagement the stock is worth investing into.</p>
        <h2 id="how-we-built-it" className = "font-open-sans text-5xl font-bold md:ml-72">How we built it</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">We built the backend off of the Twint API which allowed us to search Twitter for a given query as well as gather information on each Tweeter such as their the number of followers they have. It was connected to the frontend using Flask and the website was developed using React.</p>
        <h2 className = "font-open-sans text-5xl font-bold md:ml-72" id="challenges-we-ran-into">Challenges we ran into</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">It was particularly hard finding a suitable API to search Twitter with as gaining official access was outside our timeframe, and the rest of the options were rate-limited. None of us had worked with React or Flask before either, so this was our first time attempting to create a full-stack application. Getting the code to work properly was one challenge, but getting it to look right and behave properly was a new task that we were unfamiliar with.</p>
        <h2 className = "font-open-sans text-5xl font-bold md:ml-72" id="accomplishments-that-were-proud-of">Accomplishments that we're proud of</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">The speed at which we were all able to pick up our respective technologies and frameworks to create a prototype of a product.</p>
        <h2 className = "font-open-sans text-5xl font-bold md:ml-72" id="what-we-learned">What we learned</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">We learned how different and comprehensive each task is in creating a full-stack application, as well as the importance of teamwork and focus during the short time period.</p>
        <h2 className = "font-open-sans text-5xl font-bold md:ml-72" id="whats-next-for-tweetybets">What's next for TweetyBets</h2>
            <p className = "font-open-sans md:ml-72 md:py-5 w-1/4">We would like to continue to improve the algorithm that determines when to buy (by implementing more parameters) as well as having cleaner website code and a less buggy design. We'd also like to implement the official Twitter API as it would reduce response times and is better supported. Finally, we hope to deploy our website!</p>
    </div>
    
)

}