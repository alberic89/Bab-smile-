<html>
    <head><title>Bàb smile +</title></head>
    <body>
        <h1>Bàb smile - envoyer un smiley</h1>
        <p>Collez l'url complète et non racourcie (ex: "https://brick-a-brack.com/fichiers/images/smileys/001.gif") :</p>
        <form name="submit-url" method="post" action="index.php">
            <input type="text" name="url"/> <br/>
            <input type="submit" name="valider" value="Envoyer"/>
        </form>
        <?php
function testUrl($url){
$url = @parse_url($url);
if (!$url) return false;
 
$url = array_map('trim', $url);
$url['port'] = (!isset($url['port'])) ? 80 : (int)$url['port'];
 
$path = (isset($url['path'])) ? $url['path'] : '/';
$path .= (isset($url['query'])) ? "?$url[query]" : '';
 
if (isset($url['host']) && $url['host'] != gethostbyname($url['host'])) {
 
     $fp = fsockopen($url['host'], $url['port'], $errno, $errstr, 30);
 
      if (!$fp) return false; //socket not opened
 
        fputs($fp, "HEAD $path HTTP/1.1\r\nHost: $url[host]\r\n\r\n"); //socket opened
        $headers = fread($fp, 4096);
        fclose($fp);
 
	 if(preg_match('#^HTTP/.*\s+[(200|301|302)]+\s#i', $headers)){//matching header
	       return true;
	 }
	 else return false;
 
 } // if parse url
 else return false;
}
 
 
        if(isset($_POST['valider'])){
			$myurl=$_POST['url'];
			if (testUrl($myurl) == true){
				echo shell_exec("python addUrl.py '$myurl'");
				echo "L'url <a href=$myurl>$myurl</a> a bien été envoyée ! <img src=\"$myurl\">";
			}
			else {
				echo '<script>alert("L\'url n\'est pas valide !");</script>';
			}
		}
        
        ?>
    </body>
</html>

