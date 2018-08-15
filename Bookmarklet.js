// Get mail title from Gmail. I wanted to implement regex but couldn't.
var pageTitle = document.title;
var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3;
var mailTitle = pageTitle.substring(0, cutStartPoint);
console.log(mailTitle);

// Bookmarklet example thanks to: https://gist.github.com/stefanmaric/2abf96c740191cda3bc7a8b0fc905a7d
// Copies the mail title to clipboard and pops an alert.
// Works fine on Chrome xx on Windows 10
// Doesn't work on Chrome 67.0.3396.99 on macOS High Sierra; it says "Uncaught ReferenceError: mailTitle is not defined".

javascript:!function(a){var b=document.createElement("textarea"),c=document.getSelection();b.textContent=a,document.body.appendChild(b),c.removeAllRanges(),b.select(),document.execCommand("copy"),c.removeAllRanges(),document.body.removeChild(b),var pageTitle = document.title,var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3,var mailTitle = pageTitle.substring(0, cutStartPoint)}(document.title),alert("메일 제목이 복사되었습니다.\n슬랙에서 /gmail (메일제목) 을 입력해보세요.");


// Another approach.
// Works fine, but doesn't work when pressed twice with error below:
// Uncaught SyntaxError: Identifier 'copyListener' has already been declared
// Fixed when changed let to var.

var pageTitle = document.title;
//var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3;
var mailTitle = "/gmail " + pageTitle.substring(0, cutStartPoint);

var copyListener = event => {
	document.removeEventListener("copy", copyListener, true);
	event.preventDefault();
	var clipboardData = event.clipboardData;
	clipboardData.clearData();
	clipboardData.setData("text/plain", mailTitle);
};
document.addEventListener("copy", copyListener, true);
document.execCommand("copy");
alert("메일 제목이 복사되었습니다.\n슬랙에서 /gmail (메일제목) 을 입력해보세요.");

// minified for bookmarklet
javascript:var pageTitle=document.title;var cutStartPoint=pageTitle.indexOf("harry@socar.kr")-3;var mailTitle="/gmail " + pageTitle.substring(0,cutStartPoint);var copyListener=event=>{document.removeEventListener("copy",copyListener,!0);event.preventDefault();var clipboardData=event.clipboardData;clipboardData.clearData();clipboardData.setData("text/plain",mailTitle)};document.addEventListener("copy",copyListener,!0);document.execCommand("copy"),alert("메일 제목이 복사되었습니다.\n슬랙에서 /gmail (메일제목) 을 입력해보세요.");

