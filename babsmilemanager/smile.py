from flask import Blueprint
from flask import flash
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for
from flask import make_response

import urllib.request

import json
import time
import re
import difflib

from functools import cache

bp = Blueprint("smile", __name__)

SMILEYS_URL = "https://raw.githubusercontent.com/alberic89/Bab-smile-/main/download/urls_codes.list"
TTL = 600

numbers = re.compile(r'\d+')

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

@cache
def get_smileys(ttl_hash=None):
    del ttl_hash
    smileys = []
    for line in urllib.request.urlopen(SMILEYS_URL).read().splitlines():
        if line.decode("utf-8") != "":
            smileys.append(Smiley(
            re.search(numbers, line.decode("utf-8").split()[0]).group(),
            line.decode("utf-8").split()[0].strip(),
            line.decode("utf-8").split()[1].strip() if len(line.decode("utf-8").split()) > 1 else "",
            ))
    return smileys


def get_ttl_hash(seconds=TTL):
    """Return the same value withing `seconds` time period"""
    return round(time.time() / seconds)

@bp.route("/", methods=("GET","POST",))
def index(diff=None):

    smileys = get_smileys(ttl_hash=get_ttl_hash())

    if request.method == "GET":
        try:
            with open("babsmile.json","r") as f:
                changes = [Smiley(data['id'], data['url'], data['code']) for data in json.loads(f.read())]
        except OSError:
            flash("Impossible de charger les changements")
            changes = []
        else:
            changed = [_ if _.id not in changes else changes[changes.index(_.id)] for _ in smileys]
        return  render_template("base.html", smileys=changed, diff=diff)

    changes = []

    for smile in request.form.keys():
        if smileys[smileys.index(smile)].code != request.form[smile]:
            changes.append(Smiley(
                smileys[smileys.index(smile)].id,
                smileys[smileys.index(smile)].url,
                request.form[smile],
            ))

    changed = [_ if _.id not in changes else changes[changes.index(_.id)] for _ in smileys]

    if len(changes) != 0:
        diff = "\n".join(difflib.unified_diff([str(_) for _ in smileys],[str(_) for _ in changed]))
    try:
        with open("babsmile.json","w") as f:
            f.write(json.dumps([smiley.__dict__ for smiley in changes], separators=(',', ':')))
    except OSError:
        flash("Impossible d'enregistrer les changements")
    return render_template("base.html", smileys=changed, diff=diff)
