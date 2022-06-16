url = str(input('Collez l\'url absolue :'))
file=open("urls.txt","a")
file2=open("urlsms.txt","a")
msg='<img src="'+url+'"alt="" class="babcode-smiley" data-editor="area-babcode" onclick="BaBcode.smiley(this.getAttribute(\\\'data-editor\\\'),this.getAttribute(\\\'data-smiley\\\'));" data-smiley="<image>'+url+'</image>">'
msgms='<img src="'+url+'"alt="" class="babcode-smiley" data-editor="area-message" onclick="BaBcode.smiley(this.getAttribute(\\\'data-editor\\\'),this.getAttribute(\\\'data-smiley\\\'));" data-smiley="<image>'+url+'</image>">'
file.write(msg)
file2.write(msgms)