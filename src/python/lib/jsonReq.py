
import requests


def getContentFromURL(url):
    return requests.get(url).text

