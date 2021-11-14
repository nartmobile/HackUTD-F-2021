import json

def calcScore():
    score = 0
    userData = []
    with open("./outputFiles/usernames.json", "r", encoding = "utf-8") as f:
        for jsonObj in f:
            tweetsDict = json.loads(jsonObj)
            userData.append(tweetsDict)
    
    for i in userData:
        if i["followers"] <= 5000:
            score += 1
        elif i["followers"] >= 5000 and i["followers"] <= 100000:
            score += 10
        else:
            score += 50
        if i["verified"] == "true":
            score += 50
    return score