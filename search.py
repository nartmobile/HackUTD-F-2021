import twint
import datetime as DT

def searchTweet(searchTerm):
    c = twint.Config()
    
    # get date
    dateToday = DT.date.today()
    weekAgo = str(dateToday - DT.timedelta(days = 7))

    # search params
    c.Count = True
    c.Custom["tweet"] = ["username", "tweet"]
    c.Filter_retweets = True
    c.Lowercase = True
    c.Output = "outputFiles"
    c.Search = str(searchTerm)
    c.Since = weekAgo
    c.Store_json = True
    c.Limit = 10
    c.Lang = "en"
    # c.Format = "Username: {username}"
    # c.Translate = True
    
    twint.run.Search(c)


def searchUser(name):
    c = twint.Config()
    c.Username = name
    c.Output = "outputFiles/usernames.json"
    c.Store_json = True
    c.Custom["user"] = ["name", "username", "followers", "verified"]
    c.Format = "Username: {username}"

    twint.run.Lookup(c)