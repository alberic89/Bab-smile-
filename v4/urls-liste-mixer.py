from csv import DictReader
file=open("urls.txt","r")
urls = file.read()
with open('liste.csv', 'r') as my_file:
	csv_dict_reader = DictReader(my_file)
	for i in csv_dict_reader:
		iimgurl = i.get('imageUrl')
		icode = i.get('code')
		urls = urls.replace(iimgurl,icode)
file.close()
file=open("urls.txt","w")
file.write(urls)
file.close