$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 6683238000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 5,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Entao "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 3057450900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 120565800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 1038669900,
  "status": "passed"
});
formatter.after({
  "duration": 1301104000,
  "status": "passed"
});
});