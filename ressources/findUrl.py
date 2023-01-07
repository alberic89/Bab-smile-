import requests # importe le module
msg =''
def checkUrl(url): # définis la fonction qui permet de tester les urls entrées
	if requests.head(url).status_code<400: # vérifie que la réponse du serveur contient un code inférieur à 400 (https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
		return True
	else:
		return False

for i in range(1,2001): # teste les 2000 premières urls
	n = str(i)
	if checkUrl('https://assets.brickfilms.com/emojis/'+n+'.gif')==True:  # si l'url.gif existe, alors l'url est ajoutée à la liste
		msg += '"'+n+'.gif",'
	elif checkUrl('https://assets.brickfilms.com/emojis/' + n + '.png')==True: # si l'url.png existe, alors l'url est ajoutée à la liste
		msg += '"'+n+'.png",'
msg = '[' + msg[:-1] + ']'
file=open("urls.txt","w") # ouvre le fichier
file.write(msg) # écrit le fichier
file.close()
