var elementos = document.getElementsByTagName('*');

for (var i = 0; i < elementos.length; i++) {
    var elemento1 = elementos[i];

    for (var j = 0; j < elemento1.childNodes.length; j++) {
        var node1 = elemento1.childNodes[j];

        if (node1.nodeType === 3) {
            var texto1 = node1.nodeValue;
            var textoTroca1 = texto1.replace(/Presidente Michel Temer/gi, 'Presidente Decorativo GOLPISTA');

            if (textoTroca1 !== texto1) {
                elemento1.replaceChild(document.createTextNode(textoTroca1), node1);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento2 = elementos[i];

    for (var j = 0; j < elemento2.childNodes.length; j++) {
        var node2 = elemento2.childNodes[j];

        if (node2.nodeType === 3) {
            var texto2 = node2.nodeValue;
            var textoTroca2 = texto2.replace(/Michel Temer/gi, 'O GRANDE GOLPISTA');

            if (textoTroca2 !== texto2) {
                elemento2.replaceChild(document.createTextNode(textoTroca2), node2);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento3 = elementos[i];

    for (var j = 0; j < elemento3.childNodes.length; j++) {
        var node3 = elemento3.childNodes[j];

        if (node3.nodeType === 3) {
            var texto3 = node3.nodeValue;
            var textoTroca3 = texto3.replace(/impeachment/gi, 'GOLPE');

            if (textoTroca3 !== texto3) {
                elemento3.replaceChild(document.createTextNode(textoTroca3), node3);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento4 = elementos[i];

    for (var j = 0; j < elemento4.childNodes.length; j++) {
        var node4 = elemento4.childNodes[j];

        if (node4.nodeType === 3) {
            var texto4 = node4.nodeValue;
            var textoTroca4 = texto4.replace(/Presidente Temer/gi, 'Usurpador GOLPISTA');

            if (textoTroca4 !== texto4) {
                elemento4.replaceChild(document.createTextNode(textoTroca4), node4);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento5 = elementos[i];

    for (var j = 0; j < elemento5.childNodes.length; j++) {
        var node5 = elemento5.childNodes[j];

        if (node5.nodeType === 3) {
            var texto5 = node5.nodeValue;
			var textoTroca5 = texto5.replace(/Temer/gi, 'GOLPISTA');

            if (textoTroca5 !== texto5) {
                elemento5.replaceChild(document.createTextNode(textoTroca5), node5);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento6 = elementos[i];

    for (var j = 0; j < elemento6.childNodes.length; j++) {
        var node6 = elemento6.childNodes[j];

        if (node6.nodeType === 3) {
            var texto6 = node6.nodeValue;
			var textoTroca6 = texto6.replace(/Primeiramente/gi, 'Primeiramente, fora Temer');

            if (textoTroca6 !== texto6) {
                elemento6.replaceChild(document.createTextNode(textoTroca6), node6);
            }
        }
    }
}

for (var i = 0; i < elementos.length; i++) {
    var elemento7 = elementos[i];

    for (var j = 0; j < elemento7.childNodes.length; j++) {
        var node7 = elemento7.childNodes[j];

        if (node7.nodeType === 3) {
            var texto7 = node7.nodeValue;
			var textoTroca7 = texto7.replace(/fora Temer, fora GOLPISTA/gi, 'fora Temer');

            if (textoTroca7 !== texto7) {
                elemento7.replaceChild(document.createTextNode(textoTroca7), node7);
            }
        }
    }
}