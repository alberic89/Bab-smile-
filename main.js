///Ajoute une petite phrase
$( ".babcode-smiley-container" ).append( "<p><strong>Oh! Des centaines de smileys en plus!!!</strong></p>" );

let data

function readTextFile(file) {
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
}

readTextFile("https://raw.githubusercontent.com/alberic89/B-b-smile--/main/ressources/urls.txt") ///récupère la dernière version de url.txt

if (/inbox/.test(document.documentURI) == true && (/talk/.test(document.documentURI)) == false){ ///vérifie que ce n'est pas une page spéciale, et agis en conséquence
	data.replaceAll('area-babcode','area-message');
}
 else{ if (/tutorials_articles/.test(document.documentURI) == true){
	 data.replaceAll('area-babcode','area-article');
}}
///Ajoute les smileys
$( ".babcode-smiley-container" ).append(data);
///Ajoute une autre petite phrase
$( ".babcode-smiley-container" ).append( "<p><strong>Envoyez un mp à @alberic89 si vous voyez un bug ou si vous voulez ajouter un smiley !</strong></p>" );
