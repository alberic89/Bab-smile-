print('Collez l\'url relative')
url = ''
url2 = ''
msg = ''
while url != 'stop' :
	print('go')
	url = str(input())
	if url != 'stop':
		url2 = str(input())
		print('ok')
	if url != 'stop' and url != '' and url2 != '':
		msg += '{'+url+';<image>https://brick-a-brack.com'+url2+'</image>}'
file=open("customs-urls.txt","a") # ouvre le fichier
file.write(msg) # écrit le fichier
file.close()
print('Done.')