import twint
import datetime as DT

def search(searchTerm):
    c = twint.Config()
    
    # get date
    dateToday = DT.date.today()
    weekAgo = dateToday - DT.timedelta(days = 7)

    # search params
    c.Search = str(searchTerm)
    c.Since = weekAgo
    c.Store_json = True
    c.Output = "outputFiles"

    twint.run.Search(c)