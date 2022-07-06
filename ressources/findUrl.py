import requests # importe le module
msg = ''
def checkUrl(url): # définis la fonction qui permet de tester les urls entrées
	if requests.head(url).status_code<400: # vérifie que la réponse du serveur contient un code inférieur à 400 (https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
		return True
	else:
		return False
for i in range(1000): # teste les 1000 premières urls
	if len(str(i))==1: # met i sous la forme xxx
		n='00'+str(i)
	elif len(str(i))==2:
		n='0'+str(i)
	else :
		n=str(i)
	if checkUrl('https://brick-a-brack.com/fichiers/images/smileys/'+n+'.gif')==True:  # si l'url.gif existe, alors l'url est ajoutée à la liste
		msg += '<img src="/fichiers/images/smileys/'+n+'.gif "alt="" class="babcode-smiley" data-editor="area-babcode" onclick="BaBcode.smiley(this.getAttribute(\\\'data-editor\\\'),this.getAttribute(\\\'data-smiley\\\'));" data-smiley="<image>https://brick-a-brack.com/fichiers/images/smileys/'+n+'.gif</image>">'
	if checkUrl('https://brick-a-brack.com/fichiers/images/smileys/' + n + '.png')==True: # si l'url.png existe, alors l'url est ajoutée à la liste
		msg += '<img src="/fichiers/images/smileys/'+n+'.png "alt="" class="babcode-smiley" data-editor="area-babcode" onclick="BaBcode.smiley(this.getAttribute(\\\'data-editor\\\'),this.getAttribute(\\\'data-smiley\\\'));" data-smiley="<image>https://brick-a-brack.com/fichiers/images/smileys/'+n+'.png</image>">'
file=open("urls.txt","w") # ouvre le fichier
file.write(msg) # écrit le fichier
file.close()
