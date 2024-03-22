import json
import re

class Smiley:
    def __init__(self, sid, url, code):
        self.id = sid
        self.url = url
        self.code = code

    def __eq__(self, y):
        if type(y) == Smiley:
            if self.id == y.id and self.code == y.code:
                return True
            return False
        if self.id == y:
            return True
        return False

    def __str__(self):
        return self.url + ("" if self.code == "" else "    " + self.code)

with open("bbsmilecodes.json","r") as f:
    smileys = [(data[0], data[1]) for data in json.loads(f.read())]
# ~ print(smileys,sep="\n")
# ~ print(len(smileys))

liste = []


for code in smileys:
    newsmile = Smiley(
        code[1].split(".")[0],
        "https://assets.brickfilms.com/emojis/" + code[1],
        code[0],
        )
    if newsmile.id not in liste:
        liste.append(newsmile)

with open("liste.json", "w") as f:
    f.write(json.dumps([{"id":s.id,"url":s.url,"code":s.code} for s in liste], separators=(',', ':')))

# ~ smileylist = [{"id":s.id,"url":s.url,"code":s.code} for s in liste]
# ~ print(*[_["code"] for _ in smileylist] ,sep="\n")
# ~ print(len(smileylist))
