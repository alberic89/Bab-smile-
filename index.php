<html>
    <head><title>Bàb smile +</title></head>
    <body>
        <h1>Bàb smile - envoyer un smiley</h1>
        <form name="submit-url" method="post" action="index.php">
            Collez l'url complète et non racourcie (ex: "https://brick-a-brack.com/fichiers/images/smileys/001.gif") : <input type="text" name="url"/> <br/>
            <input type="submit" name="valider" value="Envoyer"/>
        </form>
        <?php
        
        if(isset($_POST['valider'])){
			$F=@fopen($url_a_tester,"r");
			if($F){
				fclose($F);
				
				$url=$_POST['url'];
				echo $url ;
			}
			else {
				echo '<script>alert("L\'url n\'est pas valide !");</script>';
			}
		}
        
        ?>
    </body>
</html>

