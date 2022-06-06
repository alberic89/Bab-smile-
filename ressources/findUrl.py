import requests
file=open("urls.txt","w")
def checkUrl(url):
	if requests.head(url).status_code<400:
		return True
	else:
		return False
for i in range(230):
	if len(str(i))==1:
		n='00'+str(i)
	elif len(str(i))==2:
		n='0'+str(i)
	else :
		n=str(i)
	if checkUrl('https://brick-a-brack.com/fichiers/images/smileys/'+n+'.gif')==True:
		msg='<img src="/fichiers/images/smileys/'+n+'.gif "alt="" class="babcode-smiley" data-editor="area-message" onclick="BaBcode.smiley(this.getAttribute(\\\'data-editor\\\'),this.getAttribute(\\\'data-smiley\\\'));" data-smiley="<image>https://brick-a-brack.com/fichiers/images/smileys/'+n+'.gif</image>">'
		file.write(msg)
	if checkUrl('https://brick-a-brack.com/fichiers/images/smileys/' + n + '.png')==True:
		msg='<img src="/fichiers/images/smileys/'+n+'.png "alt="" class="babcode-smiley" data-editor="area-message" onclick="BaBcode.smiley(this.getAttribute(\\\'data-editor\\\'),this.getAttribute(\\\'data-smiley\\\'));" data-smiley="<image>https://brick-a-brack.com/fichiers/images/smileys/'+n+'.png</image>">'
		file.write(msg)