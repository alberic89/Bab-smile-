if ((document.getElementsByClassName("babcode-smiley-container")[0] === undefined)===false){
	let data = '';
	let babzone = String(document.getElementsByClassName("babcode-editor")[0].id)
	var url = "https://raw.githubusercontent.com/alberic89/B-b-smile--/main/v4/urls.txt" ;
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'text';
	request.onloadend = function (){data = request.responseText;};
	request.send();
	var url2 = "https://raw.githubusercontent.com/alberic89/B-b-smile--/main/v4/customs-urls.txt";
	var request2 = new XMLHttpRequest();
	request2.open('GET', url2);
	request2.responseType = 'text';
	request2.onloadend = async function (){
		while (data ==''){};
		data += request2.responseText;
		data = '<br />' + data.replaceAll('{','<img src="').replaceAll(';','" class="babcode-smiley" data-editor="'+babzone+'" onclick="BaBcode.smiley(this.getAttribute(\'data-editor\'),this.getAttribute(\'data-smiley\'));" data-smiley="<image>https://brick-a-brack.com').replaceAll('}','</image>">') + "<p>Envoyez un mp à <a class='rangMembre' href='/inbox/talk/3520/'>@alberic89</a> si vous voyez un bug ou si vous voulez ajouter un smiley !</p>";
		document.getElementsByClassName("babcode-smiley-container")[0].insertAdjacentHTML('beforeend',data);
	}
	request2.send();
	console.log('%c\
#  ██████╗  █████╗ ██████╗     ███████╗███╗   ███╗██╗██╗     ███████╗    \n\
#  ██╔══██╗██╔══██╗██╔══██╗    ██╔════╝████╗ ████║██║██║     ██╔════╝     ██╗\n\
#  ██████╔╝███████║██████╔╝    ███████╗██╔████╔██║██║██║     █████╗     ██████╗\n\
#  ██╔══██╗██╔══██║██╔══██╗    ╚════██║██║╚██╔╝██║██║██║     ██╔══╝     ╚═██╔═╝\n\
#  ██████╔╝██║  ██║██████╔╝    ███████║██║ ╚═╝ ██║██║███████╗███████╗     ╚═╝\n\
#  ╚═════╝ ╚═╝  ╚═╝╚═════╝     ╚══════╝╚═╝     ╚═╝╚═╝╚══════╝╚══════╝    ',
'background-image: linear-gradient(to right, violet, indigo,blue,green,yellow,orange,red); -webkit-background-clip: text;color: transparent;');
};