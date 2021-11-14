import time, os, json, search, score

starttime = time.time()

def __main__(searchTerm):
    # clear output files
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
    with open("./outputFiles/result.json", "w", encoding="utf-8") as f:
        json.dump(resultDict, f, ensure_ascii=False, indent = 4)
        

__main__("$AAPL") # TODO incorporate serach term

print("--- %s seconds ---" % (time.time() - starttime))