var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("partidos.js"), data.url("deputados.js"), data.url("senadores.js"), data.url("outrasfrases.js"), data.url("golpistas.js")],
  contentScriptWhen: "ready"
});
