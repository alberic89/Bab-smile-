#!/usr/bin/python3

import json
import re

numbers = re.compile(r'\d+')

liste = []

with open("urls_codes.list", "r") as f:
    for line in f:
        if line != "":
            # ~ print("'",line,"'")
            # ~ print("'",line.split("    ")[0],"'")
            # ~ print("'",re.search(numbers, line.split("    ")[0]),"'")
            liste.append({
            "id":re.search(numbers, line.split("    ")[0]).group(),
            "url":line.split("    ")[0].strip(),
            "code":line.split("    ")[1].strip() if len(line.split("    "))>1 else "",
            })

with open("liste.json", "w") as f:
    f.write(json.dumps(liste, separators=(',', ':')))
