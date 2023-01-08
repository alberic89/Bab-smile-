import requests  # importe le module

msg = []


def checkUrl(url):  # définis la fonction qui permet de tester les urls entrées
	if requests.head(url).status_code < 400:
		# vérifie que la réponse du serveur contient un code inférieur à 400 (https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
		return True
	else:
		return False


for i in range(1, 300):  # teste les 300 premières urls
	n = str(i)
	if checkUrl("https://assets.brickfilms.com/emojis/" + n + ".gif") == True:
		# si l'url.gif existe, alors l'url est ajoutée à la liste
		msg.append(
			{"u": n + ".gif", "t": "https://assets.brickfilms.com/emojis/" + n + ".gif"}
		)
	elif checkUrl("https://assets.brickfilms.com/emojis/" + n + ".png") == True:
		# si l'url.png existe, alors l'url est ajoutée à la liste
		msg.append(
			{"u": n + ".png", "t": "https://assets.brickfilms.com/emojis/" + n + ".png"}
		)
	elif checkUrl("https://assets.brickfilms.com/emojis/" + n + ".svg") == True:
		# si l'url.svg existe, alors l'url est ajoutée à la liste
		msg.append(
			{"u": n + ".svg", "t": "https://assets.brickfilms.com/emojis/" + n + ".svg"}
		)

file = open("urls.txt", "w")  # ouvre le fichier
file.write(str(msg))  # écrit le fichier
file.close()
