scriptTitle = "LibreOffice Impress"
scriptDescription = "Control Impress presentations"


def onUnlock():
	myo.rotSetCenter()
	myo.unlock("hold")
        
def onPoseEdge(pose, edge):
        #firebase = firebase.FirebaseApplication('https://rock-paper-scissors-game.firebaseio.com/', None)
        #result = firebase.get('/user1', None)
        #print pose + "," + edge
        if (pose == 'fist') and (edge == "on"): 
		#myo.mouse("left","click","")
                #current_sign = 1
                print "rock"
	if (pose == 'fingersSpread') and (edge == "on"):
		#myo.mouse("right","click","")
                print "paper"
                #current_sign = 2
        if (pose == 'doubleTap') and (edge == "on"):
		#myo.mouse("right","click","")
                print "scissor"
                #current_sign = 3
        #result = firebase.put('/current_result','user1', current_sign)
        # print(result)
	# the next IF will be true for any LibreOffice product
#	if myo.title_contains("LibreOffice"): 
#		if (edge == "on"): # only check for new poses
#			if (myo.getPoseSide() == "waveRight"): # next slide
#				myo.keyboard("right_arrow","press","")
#			if (myo.getPoseSide() == "waveLeft"): # prev slide
#				myo.keyboard("left_arrow","press","")
#		if pose == "doubleTap":
#			myo.setLockingPolicy("standard")
#			myo.unlock("timed")


