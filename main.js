window.onloadend = function () {
	if (document.getElementsByClassName("_3_hkBa_editor")[0] != undefined) {
		document.getElementsByClassName("_3_hkBa_emoji")[0].insertAdjacentHTML('beforebegin','\
			<style>body{font-family:Arial,Helvetica,sans-serif}\
				.BBsmileBOX{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\
				.BBsmileBOX-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid#888;width:80%}\
				.close{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}\
				.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}\
			</style>\
			<a id="BBsmileBTN">➕</a>\
			<!--The Modal--><div id="BBsmileBOX"class="BBsmileBOX">\
				<!--Modal content--><div class="BBsmileBOX-content">\
					<span class="close">&times;</span>\
					<p>Veuilliez attendre le chargement des smileys...</p>\
				</div>\
			</div>')

		var BBsmileBOX = document.getElementById("BBsmileBOX");

		// Get the button that opens the modal
		var BBsmileBTN = document.getElementById("BBsmileBTN");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		BBsmileBTN.onclick = function() {
		  BBsmileBOX.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  BBsmileBOX.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == BBsmileBOX) {
			BBsmileBOX.style.display = "none";
		  }
		}



	}


}



if ((document.getElementsByClassName("babcode-smiley-container")[0] === undefined)===false){
	document.getElementsByClassName("_3_hkBa_emoji")[0].insertAdjacentHTML('beforebegin','<a id="babsmile-button"> ➕ </a>')
	document.getElementById('babsmile-button').onclick = function(){
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
			data += request2.responseText;
			data = data.replaceAll('{','<img src="').replaceAll(';','" class="babcode-smiley" data-editor="'+babzone+'" onclick="BaBcode.smiley(this.getAttribute(\'data-editor\'),this.getAttribute(\'data-smiley\'));" data-smiley="').replaceAll('}','">') + "<p>Envoyez un mp à <a class='rangMembre' href='/inbox/talk/3520/'>@alberic89</a> si vous voyez un bug ou si vous voulez ajouter un smiley !</p>";
			document.getElementsByClassName("babcode-smiley-container")[0].innerHTML = data;
		}
		request2.send();
	}
	console.log('%c\
 #                                                                               \n\
 #  ██████╗  █████╗ ██████╗     ███████╗███╗   ███╗██╗██╗     ███████╗           \n\
 #  ██╔══██╗██╔══██╗██╔══██╗    ██╔════╝████╗ ████║██║██║     ██╔════╝     ██╗   \n\
 #  ██████╔╝███████║██████╔╝    ███████╗██╔████╔██║██║██║     █████╗     ██████╗ \n\
 #  ██╔══██╗██╔══██║██╔══██╗    ╚════██║██║╚██╔╝██║██║██║     ██╔══╝     ╚═██╔═╝ \n\
 #  ██████╔╝██║  ██║██████╔╝    ███████║██║ ╚═╝ ██║██║███████╗███████╗     ╚═╝   \n\
 #  ╚═════╝ ╚═╝  ╚═╝╚═════╝     ╚══════╝╚═╝     ╚═╝╚═╝╚══════╝╚══════╝           \n\
 #                                                                               ',
'background-image: linear-gradient(black,black);color: green;');
};
