function bbsmile () {
    document.getElementsByClassName("_3_hkBa_emoji")[0].insertAdjacentHTML('beforebegin','\
        <style>body{font-family:Arial,Helvetica,sans-serif}\
            .BBsmileBOX{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\
            .BBsmileBOX-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid#888;width:80%;padding-bottom: 20px;margin-bottom: 150px;}\
            .BBsmileBOX-content>img{max-height: 40px;}\
            .close{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}\
            .close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}\
        </style>\
        <a id="BBsmileBTN"> ➕ </a>')
    document.getElementsByClassName("_3_hkBa_editor  ")[0].insertAdjacentHTML('beforebegin','\
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

    var data = '';
    var htmldata = '';
    var url = "https://raw.githubusercontent.com/alberic89/B-b-smile--/main/download/liste-5-0.json" ;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onloadend = function (){data = JSON.parse(request.response);
        for (var i = 0; i < data.length; i++) {
            if (data[i]["code"] == "") {
                htmldata = htmldata + "<img class='_3_hkBa_emoji BBsmile-emoji' onclick='document.getElementsByTagName(\"textarea\")[0].value+=\" \"+this.getAttribute(\"title\")+\" \"'src='" + data[i]["url"] + "' title='[img]" +  data[i]["url"] +"[/img]'>";
            }
            else {
                htmldata = htmldata + "<img class='_3_hkBa_emoji BBsmile-emoji' onclick='document.getElementsByTagName(\"textarea\")[0].value+=\" \"+this.getAttribute(\"title\")+\" \"'src='" + data[i]["url"] + "' title='" +  data[i]["code"] +"'>";
            }
        }
        htmldata = htmldata + '<hr><div style ="text-align: center;">Envoyez un mp à <div class="J6DH5G_user J6DH5G_inline "><a class="YcNC0W_action NqeiLa_userPicture  J6DH5G_avatar" title="alberic89" href="/users/VXNlcjozNTIw/alberic89"><div class="NqeiLa_content"><div class="NqeiLa_contentItem" style="background-image: url(&quot;https://brickfilms.com/user.8368a86a.avif&quot;);"></div><div class="NqeiLa_contentItem" style="background-image: url(&quot;https://images.weserv.nl/?w=400&amp;url=https%3A%2F%2Fapi.brickfilms.com%2Fimages%2FVXNlcjozNTIw.jpg%3F1690538688&amp;bg=%23FFF&amp;output=webp&amp;q=60&amp;il=&amp;l=&amp;t=fit&amp;default=https%3A%2F%2Fbrickfilms.com%2Fblank.gif&quot;);"></div></div></a><a class="YcNC0W_action _2C234G_userlink  J6DH5G_name" title="alberic89" href="/chats/VXNlcjozNTIw/alberic89">alberic89</a></div> si vous voyez un bug ou si vous voulez ajouter un smiley !</div>';
        document.getElementsByClassName("BBsmileBOX-content")[0].removeChild(document.getElementsByClassName("BBsmileBOX-content")[0].childNodes[3]);
        document.getElementsByClassName("BBsmileBOX-content")[0].insertAdjacentHTML('beforeend',htmldata);
    };
    request.send();

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

}

var images = document.getElementsByClassName("tU_oOG_image");

function bbsmile_loop(){
    if (!!document.getElementsByClassName("_3_hkBa_editor  ")[0]){
        if (!document.getElementById("BBsmileBTN")){
            bbsmile();
        }
        images = document.getElementsByClassName("tU_oOG_image");
        for (var image = 0; image < images.length; image++) {
            if (!images[image].src.includes("&n=-1")) {
                images[image].src += "&n=-1";
            }
        }
    }
}

setInterval(bbsmile_loop,5000);
