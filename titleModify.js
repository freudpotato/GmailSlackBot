var pageTitle = document.title;
var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3;
var mailTitle = pageTitle.substring(0, cutStartPoint);
console.log(mailTitle);
