import json
import commands

tweet = "RT @AustralianOpen: Some members of the @AngeliqueKerber fan club cheering her on riverside. #AusOpen https://t.co/YoO0q1Z8wf---NONE---2016-01-30 23:39:41"
OriginalTweet,Location,TimeOfTweet = tweet.split('---')
TaskType = ""
Taken = "0"
Finished = "0"
Priority = "0"
tweetDict = {}
if 'available' in OriginalTweet or 'need' in OriginalTweet :
    TaskType = 'GOODS'  
if 'missing' in OriginalTweet:
    TaskType = 'MISSING'
if 'SOS' in OriginalTweet:
    TaskType = 'SOS'
if 'ambulance' in OriginalTweet:
    TaskType = 'AMBULANCE'
    Priority = '10'
else:
    TaskType = 'UNKNOWN'
if 'emergency' in OriginalTweet:
    Priority = '10'
tweetDict['TaskType'] = TaskType
#tweetDict['Disaster'] = Disaster
tweetDict['Taken'] = Taken
tweetDict['Finished'] = Finished
tweetDict['OriginalTweet'] = OriginalTweet
tweetDict['Location'] = Location
tweetDict['TimeOfTweet'] = TimeOfTweet
tweetDict['Priority'] = Priority
jsons = json.dumps(tweetDict)
print str(jsons)
#requests.post('http://hoyadisastermanagement.firebaseio.com/tasks2',json.dumps(tweetDict))
command = "curl -X PUT -d '" + str(jsons) + "' 'https://hoyadisastermanagement.firebaseio.com/tasks2.json'"
#print command
run_command = commands.getstatusoutput(command)
print run_command