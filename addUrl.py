import sys
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

url = sys.argv[1]

# on rentre les renseignements pris sur le site du fournisseur
smtp_address = 'mail.gmx.com'
smtp_port = 465

# on rentre les informations sur notre adresse e-mail
email_address = 'babsmile@gmx.fr'
email_password = 'it is a fake mdp'

# on rentre les informations sur le destinataire
email_receiver = 'babsmile@gmx.fr'


# on crée un e-mail
message = MIMEMultipart("alternative")
# on ajoute un sujet
message["Subject"] = url
# un émetteur
message["From"] = email_address
# un destinataire
message["To"] = email_receiver

# on crée un texte et sa version HTML
texte = url

html = '''
<html>
<body>
<p>''' + url + '''</p>
<img src="''' + url + '''" >
</body>
</html>
'''

# on crée deux éléments MIMEText 
texte_mime = MIMEText(texte, 'plain')
html_mime = MIMEText(html, 'html')

# on attache ces deux éléments 
message.attach(texte_mime)
message.attach(html_mime)

# on crée la connexion
context = ssl.create_default_context()
with smtplib.SMTP_SSL(smtp_address, smtp_port, context=context) as server:
  # connexion au compte
  server.login(email_address, email_password)
  # envoi du mail
  server.sendmail(email_address, email_receiver, message.as_string())
