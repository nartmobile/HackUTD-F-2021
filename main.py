import search
import os
import json

def __main__():
    # clear output files
    if os.path.exists("./outputFiles/tweets.json"):
        os.remove("./outputFiles/tweets.json")
    if os.path.exists("./outputFiles/usernames.json"):
        os.remove("./outputFiles/usernames.json")
    
    # run search by keyword
    search.searchTweet("AAPL")
    
    # map tweets to author
    tweets = []
    with open("./outputFiles/tweets.json", encoding = "utf-8") as tweetsFile:
        for jsonObj in tweetsFile:
            tweetsDict = json.loads(jsonObj)
            tweets.append(tweetsDict)

    for i in tweets:
        search.searchUser(str(i["username"]))

    print("Finished adding users")
    
__main__()