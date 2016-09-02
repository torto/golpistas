window.addEventListener("DOMContentLoaded", init, false);

function init() {
console.log(listDeputadosGolpistas);
    var retorno = document.body.innerHTML;
    retorno = replaceListWordWithEnd(retorno, listSenadoresGolpistas, " Golpista");
    retorno = replaceListWordWithEnd(retorno, listDeputadosGolpistas, " Golpista");
    retorno = replaceListWordWithEnd(retorno, listPartidoGolpista, " Antidemocrático");
    retorno = replaceListWord(retorno, listWord);
    document.body.innerHTML = retorno;
}

function replaceListWordWithEnd(text, list, final) {
    for (var i = 0; i < list.length; i++) {
        text = replaceWord(text, list[i], list[i] + final);
    }
    return text;
}

function replaceListWord(text, list) {
    for (var i = 0; i < list.length; i++) {
        text = replaceWord(text, list[i][0], list[i][1]);
    }
    return text;
}

function replaceWord(list, word, replace) {
    var re = new RegExp(word, "gi");
    list = list.replace(re, replace);
    return list;
}
