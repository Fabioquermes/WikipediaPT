$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 3,
      "value": "# Funcionalidade: consulta"
    },
    {
      "line": 4,
      "value": "#  Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 5,
      "value": "#   Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 6,
      "value": "#  Quando pesquiso por \"Ovo de Páscoa\""
    },
    {
      "line": 7,
      "value": "# Entao exibe a expressao \"Ovo de Páscoa\" no titulo da guia"
    }
  ],
  "line": 11,
  "name": "consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5906081800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": ": Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;:-consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 2557605000,
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
  "duration": 148344600,
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
  "duration": 1050913700,
  "status": "passed"
});
formatter.after({
  "duration": 1551371800,
  "status": "passed"
});
});