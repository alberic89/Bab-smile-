url = ''
msg = ''
while url != 'stop' :
	url = str(input())
	if url != 'stop' and url != '' :	
		msg += '<img src="'+url+'"alt="" class="babcode-smiley" data-editor="area-babcode" onclick="BaBcode.smiley(this.getAttribute(\'data-editor\'),this.getAttribute(\'data-smiley\'));" data-smiley="<image>'+url+'</image>">'
file=open("customs-urls.txt","a") # ouvre le fichier
file.write(msg) # écrit le fichier
file.close()