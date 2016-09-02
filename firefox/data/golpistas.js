function init() {
    var retorno = document.body.innerHTML;
    retorno = replaceListWordWithEnd(retorno, listSenadoresGolpistas, " Golpista", false);
    retorno = replaceListWordWithEnd(retorno, listDeputadosGolpistas, " Golpista", false);
    retorno = replaceListWordWithEnd(retorno, listPartidoGolpista, " Antidemocrático", true);
    retorno = replaceListWord(retorno, listWord, false);
    document.body.innerHTML = retorno;
}

function replaceListWordWithEnd(text, list, final, equal) {
    for (var i = 0; i < list.length; i++) {
        text = replaceWord(text, list[i], list[i] + final, equal);
    }
    return text;
}

function replaceListWord(text, list, equal) {
    for (var i = 0; i < list.length; i++) {
        text = replaceWord(text, list[i][0], list[i][1], equal);
    }
    return text;
}

function replaceWord(list, word, replace, equal) {
    var re = null;
    if (equal) {
        re = new RegExp("\\b" + word + "\\b", "g");
    } else {
        re = new RegExp(word, "gi");
    }
    list = list.replace(re, replace);
    return list;
}
