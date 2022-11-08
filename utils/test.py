import requests

headers = {
    'authority': 'api.purolator.com',
    'accept': 'application/vnd.puro.shipment+json',
    'accept-language': 'en-CA',
    'content-type': 'application/vnd.puro.shipment+json',
    'origin': 'https://www.purolator.com',
    'referer': 'https://www.purolator.com/',
    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
}

data = '{"pins":[{"pin":"BVH152613162","sequenceID":1}],"searchOptions":{"includePrivacyDetail":false,"includeReference":true}}'

response = requests.post('https://api.purolator.com/tracker/puro/json/shipment/search', headers=headers, data=data)

print(response.content)