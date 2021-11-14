import twint
import datetime as DT

def searchTweet(searchTerm):
    c = twint.Config()
    
    # get date
    dateToday = DT.date.today()
    oneDay = str(dateToday - DT.timedelta(hours = 24))

    # search params
    c.Count = True
    c.Custom["tweet"] = ["username", "tweet", "id"]
    c.Filter_retweets = True
    c.Lowercase = True
    c.Output = "outputFiles"
    c.Search = str(searchTerm)
    c.Since = oneDay
    c.Store_json = True
    c.Lang = "en"
    c.Hide_output = True
    c.Limit = 100 # TODO change limit
    
    twint.run.Search(c)


def searchUser(name):
    c = twint.Config()
    c.Username = name
    c.Output = "outputFiles/usernames.json"
    c.Store_json = True
    c.Custom["user"] = ["name", "username", "followers", "verified"]
    c.Hide_output = True

    twint.run.Lookup(c)