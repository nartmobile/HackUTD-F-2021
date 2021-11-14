from logging import debug
from flask import Flask
import os, json, search, score

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index(searchTerm):
    searchTerm = request.args.get("searchTerm")
    if os.path.exists("./outputFiles/tweets.json"):
        os.remove("./outputFiles/tweets.json")
    if os.path.exists("./outputFiles/usernames.json"):
        os.remove("./outputFiles/usernames.json")
    
    # run search by keyword
    search.searchTweet(str(searchTerm))
    
    # map tweets to author
    tweets = []
    with open("./outputFiles/tweets.json", encoding = "utf-8") as tweetsFile:
        for jsonObj in tweetsFile:
            tweetsDict = json.loads(jsonObj)
            tweets.append(tweetsDict)

    for i in tweets:
        search.searchUser(str(i["username"]))

    print("Finished adding users")

    weight = score.calcScore()


    resultDict = {
        "weight": weight,
        "tweets": tweets
    }
    return json.dumps(resultDict, indent = 4)

if __name__ == "__main__":
    app.run(debug=True)