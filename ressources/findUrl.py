import requests
import concurrent.futures
import re

MAX_SEARCH = 300
MAX_THREADS = 100

urls = []
counter = 0

def trier_liste(liste):
    def trier_cle(element):
        chiffres = re.findall(r'\d+', element)
        return [int(chiffre) for chiffre in chiffres]
    return sorted(liste, key=trier_cle)

def checkUrl(url):
    if requests.head(url).status_code < 400:
        return True
    else:
        return False

def generateUrls(nbmax):
    for i in range(1,nbmax):
        yield f"https://assets.brickfilms.com/emojis/{i}.gif"
        yield f"https://assets.brickfilms.com/emojis/{i}.png"

with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
    future_to_url = {executor.submit(checkUrl, url): url for url in generateUrls(MAX_SEARCH)}
    for future in concurrent.futures.as_completed(future_to_url):
        url = future_to_url[future]
        try:
            isok = future.result()
        except Exception as exc:
            print('%r generated an exception: %s' % (url, exc))
        else:
            if isok:
                urls.append(url)
                counter += 1

with open("urls.txt", "w") as f:
    print(*[url for url in trier_liste(urls)], sep="\n", file=f)
print(counter)
