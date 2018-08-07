var pageTitle = document.title;
var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3;
var mailTitle = pageTitle.substring(0, cutStartPoint);
console.log(mailTitle);

//bookmarklet example thanks to https://gist.github.com/stefanmaric/2abf96c740191cda3bc7a8b0fc905a7d

javascript:!function(a){var b=document.createElement("textarea"),c=document.getSelection();b.textContent=a,document.body.appendChild(b),c.removeAllRanges(),b.select(),document.execCommand("copy"),c.removeAllRanges(),document.body.removeChild(b),var pageTitle = document.title,var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3,var mailTitle = pageTitle.substring(0, cutStartPoint)}(document.title),alert("메일 제목이 복사되었습니다.\n슬랙에서 /gmail (메일제목) 을 입력해보세요.");
