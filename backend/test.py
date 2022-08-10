import requests
from requests.auth import HTTPBasicAuth


API_URL = "https://www.canadapost-postescanada.ca/track-reperage/rs/track/json/package/9586321748186329/detail"

headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Authorization': 'Basic Og==',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Referer': 'https://www.canadapost-postescanada.ca/track-reperage/en',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
}

response = requests.get(API_URL, headers=headers)

print(response.json())