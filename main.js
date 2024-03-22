function insertSmiley (event) {
    const textToInsert = " " + event.currentTarget.getAttribute("title") + " ";
    const textarea = document.getElementsByClassName("_3_hkBa_text")[0];
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, startPos) + textToInsert + textarea.value.substring(endPos);

    textarea.selectionStart = startPos + textToInsert.length;
    textarea.selectionEnd = startPos + textToInsert.length;

    textarea.focus();
}


function bbsmile () {
    document.getElementsByClassName("_3_hkBa_navbar")[0].firstChild.firstChild.insertAdjacentHTML('beforeend','\
        <span id="BBsmileBTN" class="_3_hkBa_button" title="BàB Smile +">\
        <svg class="svg-inline--fa" width="17.212" height="19.07" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="m2.1743 16.686c-5.1307-5.4613-0.87544-16.686 6.3257-16.686 7.3057 0 11.616 11.724 6.1855 16.826-3.2468 3.0502-9.5807 2.9793-12.511-0.14014z" fill="none"/><path d="m2.1743 16.686c-5.1307-5.4613-0.87544-16.686 6.3257-16.686 7.3057 0 11.616 11.724 6.1855 16.826-3.2468 3.0502-9.5807 2.9793-12.511-0.14014zm8.0757 0.60872c-1.2375-0.23835-3.2625-0.23835-4.5 0s-0.225 0.43337 2.25 0.43337 3.4875-0.19502 2.25-0.43337zm5.555-7.1235c0.26734-4.6712 0.05125-5.3956-1.75-5.8666-1.1303-0.29557-2.055-1.1599-2.055-1.9208 0-0.91433-1.1867-1.3834-3.5-1.3834-2.3133 0-3.5 0.46904-3.5 1.3834 0 0.76085-0.9 1.6187-2 1.9064-2.0351 0.53219-3.0594 9.3175-1.2924 11.085 3.601 3.601 13.809-0.1669 14.097-5.2035zm-9.1505 3.0792c-0.25494-0.4125 0.57553-0.75 1.8455-0.75s2.1004 0.3375 1.8455 0.75c-0.59964 0.97023-3.0913 0.97023-3.691 0zm-1.6545-4.25c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1zm5 0c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1z" fill="currentColor"/><path d="m6.6545 13.25c-0.25494-0.4125 0.57553-0.75 1.8455-0.75s2.1004 0.3375 1.8455 0.75c-0.59964 0.97023-3.0913 0.97023-3.691 0zm-1.6545-4.25c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1zm5 0c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1-1-0.45-1-1z" fill="currentColor"/></svg>\
        </span>');
    document.getElementsByClassName("_3_hkBa_editor")[0].insertAdjacentHTML('beforebegin','\
    <div id="BBsmileBOX" class="BBsmileBOX">\
        <div id="BBsmileBOX-content" class="BBsmileBOX-content">\
            <span class="BBsmileBOXclose">&times;</span>\
            <p>Veuilliez attendre le chargement des smileys...</p>\
        </div>\
    </div>\
    <style>.BBsmileBOX{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}.BBsmileBOX-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid#888;width:80%;padding-bottom:20px;margin-bottom:150px;}.BBsmileBOX-content>img{max-height:40px;}.BBsmileBOXclose{color:#244e6b;float:right;font-size:30px;font-weight:bold;padding:10px;border:5px solid #489cd5;}.BBsmileBOXclose:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}</style>');
    //~ function onGot(tabInfo) {
  //~ console.log(tabInfo);
//~ }

//~ function onError(error) {
  //~ console.log(`Error: ${error}`);
//~ }

//~ const gettingCurrent = chrome.tabs.getCurrent();
//~ gettingCurrent.then(onGot, onError);

    //~ try {
        //~ chrome.scripting.insertCSS({
            //~ target: {
                //~ tabId: gettingCurrent.id,
            //~ },
            //~ files: ["bbsmile.css"],
        //~ });
    //~ } catch (err) {
        //~ console.error(`failed to insert CSS: ${err}`);
    //~ }

    const BBsmileBOX = document.getElementById("BBsmileBOX");

    // Get the button that opens the modal
    const BBsmileBTN = document.getElementById("BBsmileBTN");

    // Get the <span> element that closes the modal
    const closer = document.getElementById("BBsmileBOX");
    BBsmileBTN.addEventListener("click", function() {
      BBsmileBOX.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    closer.addEventListener("click", function() {
      BBsmileBOX.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
      if (event.target == BBsmileBOX) {
        BBsmileBOX.style.display = "none";
      }
    });

    const smileysdata = document.createDocumentFragment();
    const url = "https://raw.githubusercontent.com/alberic89/B-b-smile--/main/download/liste-5-0.json" ;
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onloadend = function (){const data = JSON.parse(request.response);
        const perfect_smiley = document.createElement("img");
        perfect_smiley.setAttribute("class","_3_hkBa_emoji BBsmile-emoji");
        for (var i = 0; i < data.length; i++) {
            const smiley = perfect_smiley.cloneNode(false);
            smiley.setAttribute("src",data[i]['url']);
            if (data[i]["code"] == "") {
                smiley.setAttribute("title","[img]" +  data[i]["url"] +"[/img]")
                //~ htmldata = htmldata + "<img class='_3_hkBa_emoji BBsmile-emoji' onclick='document.getElementsByTagName(\"textarea\")[0].value+=\" \"+this.getAttribute(\"title\")+\" \"'src='" + data[i]["url"] + "' title='[img]" +  data[i]["url"] +"[/img]'>";
            }
            else {
                smiley.setAttribute("title",data[i]["code"])
                //~ htmldata = htmldata + "<img class='_3_hkBa_emoji BBsmile-emoji' onclick='insertText(\" \"+this.getAttribute(\"title\")+\" \")'src='" + data[i]["url"] + "' title='" +  data[i]["code"] +"'>";
            }
            //~ smiley.onclick = insertText(smiley.getAttribute("title"));
            smiley.addEventListener("click",insertSmiley);
            smileysdata.appendChild(smiley);
        }
        //~ smileysdata = smileysdata + '<hr><div style ="text-align: center;">Envoyez un mp à <div class="J6DH5G_user J6DH5G_inline "><a class="YcNC0W_action NqeiLa_userPicture  J6DH5G_avatar" title="alberic89" href="/users/VXNlcjozNTIw/alberic89"><div class="NqeiLa_content"><div class="NqeiLa_contentItem" style="background-image: url(&quot;https://brickfilms.com/user.8368a86a.avif&quot;);"></div><div class="NqeiLa_contentItem" style="background-image: url(&quot;https://images.weserv.nl/?w=400&amp;url=https%3A%2F%2Fapi.brickfilms.com%2Fimages%2FVXNlcjozNTIw.jpg%3F1690538688&amp;bg=%23FFF&amp;output=webp&amp;q=60&amp;il=&amp;l=&amp;t=fit&amp;default=https%3A%2F%2Fbrickfilms.com%2Fblank.gif&quot;);"></div></div></a><a class="YcNC0W_action _2C234G_userlink  J6DH5G_name" title="alberic89" href="/chats/VXNlcjozNTIw/alberic89">alberic89</a></div> si vous voyez un bug ou si vous voulez ajouter un smiley !</div>';
        smileysdata.appendChild(document.createElement("hr"));
        const firstDiv = document.createElement("div");
        firstDiv.setAttribute("style","text-align: center;");
        firstDiv.append("Made by");
        const secDiv = document.createElement("div");
        secDiv.setAttribute("class","J6DH5G_user J6DH5G_inline");
        const mplink = document.createElement("a");
        mplink.setAttribute("class","YcNC0W_action NqeiLa_userPicture  J6DH5G_avatar");
        mplink.setAttribute("title","alberic89");
        mplink.setAttribute("href","/users/VXNlcjozNTIw/alberic89");
        const threeDiv = document.createElement("div");
        threeDiv.setAttribute("class","NqeiLa_content");
        const fourDiv = document.createElement("div");
        fourDiv.setAttribute("class","NqeiLa_contentItem");
        fourDiv.setAttribute("style","background-image: url(&quot;https://brickfilms.com/user.8368a86a.avif&quot;);");
        threeDiv.appendChild(fourDiv);
        const fiveDiv = document.createElement("div");
        fiveDiv.setAttribute("class","NqeiLa_contentItem");
        fiveDiv.setAttribute("style","background-image: url(https://images.weserv.nl/?w=400&url=https%3A%2F%2Fapi.brickfilms.com%2Fimages%2FVXNlcjozNTIw.jpg%3F1704963440&bg=%23FFF&output=gif&q=60&il=&l=&t=fit&default=https%3A%2F%2Fbrickfilms.com%2Fblank.gif&n=-1);");
        threeDiv.appendChild(fiveDiv);
        mplink.appendChild(threeDiv);
        secDiv.appendChild(mplink);
        const userlink = document.createElement("a");
        userlink.setAttribute("class","YcNC0W_action _2C234G_userlink  J6DH5G_name");
        userlink.setAttribute("title","alberic89");
        userlink.setAttribute("href","/chats/VXNlcjozNTIw/alberic89");
        userlink.append("alberic89");
        secDiv.appendChild(userlink);
        firstDiv.appendChild(secDiv);
        smileysdata.appendChild(firstDiv);

        //~ smileysdata.lastChild.insertAdjacentHTML();
        document.getElementById("BBsmileBOX-content").removeChild(document.getElementById("BBsmileBOX-content").childNodes[3]);
        document.getElementById("BBsmileBOX-content").appendChild(smileysdata);
    };
    request.send();

    console.log('%c\
 ################################################################################## \n\
 #                                                                                # \n\
 #  ██████╗  █████╗ ██████╗     ███████╗███╗   ███╗██╗██╗     ███████╗            # \n\
 #  ██╔══██╗██╔══██╗██╔══██╗    ██╔════╝████╗ ████║██║██║     ██╔════╝     ██╗    # \n\
 #  ██████╔╝███████║██████╔╝    ███████╗██╔████╔██║██║██║     █████╗     ██████╗  # \n\
 #  ██╔══██╗██╔══██║██╔══██╗    ╚════██║██║╚██╔╝██║██║██║     ██╔══╝     ╚═██╔═╝  # \n\
 #  ██████╔╝██║  ██║██████╔╝    ███████║██║ ╚═╝ ██║██║███████╗███████╗     ╚═╝    # \n\
 #  ╚═════╝ ╚═╝  ╚═╝╚═════╝     ╚══════╝╚═╝     ╚═╝╚═╝╚══════╝╚══════╝            # \n\
 #                                                                                # \n\
 ################################################################################## ',
'background-color:black;color:green;');

}


function bbgif(){
    const images = document.getElementsByClassName("tU_oOG_image");
    for (var image = 0; image < images.length; image++) {
        if (!images[image].src.includes("&n=-1")) {
            images[image].src += "&n=-1";
        }
    }
}

function bbsmile_loop(){
    if (!!document.getElementsByClassName("_3_hkBa_editor")[0]){
        if (!document.getElementById("BBsmileBTN")){
            bbsmile();
        }
    }
    bbgif()
}

setInterval(bbsmile_loop,1000);
