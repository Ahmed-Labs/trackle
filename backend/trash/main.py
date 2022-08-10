from hashlib import new
from re import L
import requests
import time
import json
token = '4f510dda-8791-4978-9d63-48a27e7d70d2'


oldArray = []
newArray = []

def updateData():
    cloneArr = []
    r = requests.get('https://webhook.site/token/'+token+'/requests?sorting=newest')

    data = r.json()['data']

    for i in data:
        if i['method'] == 'POST':
            cloneArr.append(i['uuid'])
    
    return cloneArr

def uncommon_items_with_op(list1, list2):
    set1 = set(list1)
    set2 = set(list2)
    symmDiff = set1.symmetric_difference(set2)
    if(symmDiff):
        print("NEW WEBHOOK")
        return True, symmDiff
    else:
        print ('NO NEW WEBHOOK')
        return False, None

oldArray = updateData()


while(True): 
    time.sleep(1)
    newArray = updateData()
    bool, symdiff = uncommon_items_with_op(oldArray, newArray)
    if bool:
        preceedingArray = oldArray
        for i in preceedingArray:
            if i in symdiff:
                symdiff.remove(i)

        print(len(symdiff))
        print(symdiff)
        oldArray = newArray




    


