from logging import debug
from types import MethodType
from flask import Flask
import os, json, search, score

app = Flask(__name__)

@app.route('/api/<searchTerm>')
def index(searchTerm):
    if os.path.exists("./outputFiles/tweets.json"):
        os.remove("./outputFiles/tweets.json")
    if os.path.exists("./outputFiles/usernames.json"):
        os.remove("./outputFiles/usernames.json")
    
    # resultDict = {
    #     "weight": 0,
    #     "tweets": []
    # }
    # print("Before check")
    # print(searchTerm)
    # # run search by keyword, if undefined break
    # if len(str(searchTerm)) > 6:
    #     return json.dumps(resultDict, indent = 4)
    search.searchTweet(str(searchTerm))
    print("After check")
    
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
    # return resultDict
    return json.dumps(resultDict, indent = 4)

if __name__ == "__main__":
    app.run(debug=True)