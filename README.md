# HackUTD Fall 2021 - TweetyBets

## Inspiration
We've seen how the rise of social media is touching every corner of our lives. With the recent trends and ease of access that stock trading has reached the global community, it is now worth taking a look at the investing craze on Twitter.

## What it does
This app allows users to search for a stock ticker and see how active discussion has been and whether or not based on that level of engagement the stock is worth investing into.

## How we built it
We built the backend off of the Twint API which allowed us to search Twitter for a given query as well as gather information on each Tweeter such as their the number of followers they have. It was connected to the frontend using Flask and the website was developed using React.

## Challenges we ran into
It was particularly hard finding a suitable API to search Twitter with as gaining official access was outside our timeframe, and the rest of the options were rate-limited. None of us had worked with React or Flask before either, so this was our first time attempting to create a full-stack application. Getting the code to work properly was one challenge, but getting it to look right and behave properly was a new task that we were unfamiliar with.

## Accomplishments that we're proud of
The speed at which we were all able to pick up our respective technologies and frameworks to create a prototype of a product.

## What we learned
We learned how different and comprehensive each task is in creating a full-stack application, as well as the importance of teamwork and focus during the short time period.

## What's next for TweetyBets
We would like to continue to improve the algorithm that determines when to buy (by implementing more parameters) as well as having cleaner website code and a less buggy design. We'd also like to implement the official Twitter API as it would reduce response times and is better supported. Finally, we hope to deploy our website!

### Dependencies
[Modified version of Twint](https://github.com/himanshudabas/twint) `pip3 install --user --upgrade git+https://github.com/himanshudabas/twint.git@origin/twint-fixes#egg=twint`

[Flask](https://pypi.org/project/Flask/) `pip install flask`

[dotenv](https://pypi.org/project/python-dotenv/) `pip install python-dotenv`

[Node.js](https://nodejs.org/en/)

[React](reactjs.org/)