function main() {
    ///Ajoute une petite phrase
$( ".babcode-smiley-container" ).append( "<p><strong>Oh! Des centaines de smileys en plus!!!</strong></p>" );

let data
let data2

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

function readTextFile2(file) {
var rawFile = new XMLHttpRequest();
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
}
readTextFile("https://raw.githubusercontent.com/alberic89/B-b-smile--/main/ressources/urls.txt"); ///récupère la dernière version de url.txt
readTextFile2("https://raw.githubusercontent.com/alberic89/B-b-smile--/main/ressources/customs-urls.txt");

if (window.location.pathname.includes('inbox') == true && window.location.pathname.includes('talk') == false){ ///vérifie que ce n'est pas une page spéciale, et agis en conséquence
	data = data.replaceAll('area-babcode','area-message');
	data2 = data2.replaceAll('area-babcode','area-message');
}
 else{ if (/tutorials_articles/.test(document.documentURI) == true){
	 data = data.replaceAll('area-babcode','area-article');
	 data2 = data2.replaceAll('area-babcode','area-article');
}}
///Ajoute les smileys
$( ".babcode-smiley-container" ).append(data);
///Ajoute une autre petite phrase
$( ".babcode-smiley-container" ).append( "<p><strong>Envoyez un mp à @alberic89 si vous voyez un bug ou si vous voulez ajouter un smiley !</strong></p>" );
$( ".babcode-smiley-container" ).append(data2);
}
main();