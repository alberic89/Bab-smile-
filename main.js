let data;
let data2;
let file = "https://raw.githubusercontent.com/alberic89/B-b-smile--/main/ressources/urls.txt" ;
var rawFile = new XMLHttpRequest();
rawFile.open("GET", file, false);
rawFile.onreadystatechange = function ()
{
    if(rawFile.readyState === 4)
    {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
            data = rawFile.responseText;
        }
    }
}
rawFile.send(null);
file = "https://raw.githubusercontent.com/alberic89/B-b-smile--/main/ressources/customs-urls.txt";
rawFile.open("GET", file, false);
rawFile.onreadystatechange = function ()
{
    if(rawFile.readyState === 4)
    {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
            data2 = rawFile.responseText;
        }
    }
}
rawFile.send(null);
if (window.location.pathname.includes('inbox') == true && window.location.pathname.includes('talk') == false){ ///vérifie que ce n'est pas une page spéciale, et agis en conséquence
	data = data.replaceAll('area-babcode','area-message');
	data2 = data2.replaceAll('area-babcode','area-message');
}
 else{ if (window.location.pathname.includes('tutorials_articles') == true){
	 data = data.replaceAll('area-babcode','area-article');
	 data2 = data2.replaceAll('area-babcode','area-article');
}}
$(".babcode-smiley-container").append('<br />');
///Ajoute les smileys
$( ".babcode-smiley-container" ).append(data);
$( ".babcode-smiley-container" ).append(data2);
///Ajoute une autre petite phrase
$( ".babcode-smiley-container" ).append( "<p>Envoyez un mp à <a class='rangMembre' href='{URL}users/user/3520/'>@alberic89</a> si vous voyez un bug ou si vous voulez ajouter un smiley !</p>" );
