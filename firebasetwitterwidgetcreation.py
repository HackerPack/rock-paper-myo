from firebase import firebase
firebase = firebase.FirebaseApplication('https://hoyadisastermanagement.firebaseio.com/',None)

#new_user = 'Ozgur Vatansever'
#result = firebase.post('/users', new_user)
#print result

newhashtag = {'#ChennaiFloods': '693456602918227968'}
result = firebase.put('/twitterhashtags', newhashtag,{'print': 'pretty'}, {'X_FANCY_HEADER': 'VERY FANCY'})
print result

newhashtag = {'#SnowStorm': '693457238711799808'}
result = firebase.put('/twitterhashtags', newhashtag)
print result

newhashtag = {'#ParisAttacks': '693458052176072704'}
result = firebase.put('/twitterhashtags', newhashtag)
print result
