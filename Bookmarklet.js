// Get mail title from Gmail. I wanted to implement regex but couldn't.
var pageTitle = document.title;
var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3;
var mailTitle = pageTitle.substring(0, cutStartPoint);
console.log(mailTitle);

// Bookmarklet example thanks to: https://gist.github.com/stefanmaric/2abf96c740191cda3bc7a8b0fc905a7d
// Copies the mail title to clipboard and pops an alert.
// Doesn't work on Chrome 67.0.3396.99; it says "Uncaught ReferenceError: mailTitle is not defined".

javascript:!function(a){var b=document.createElement("textarea"),c=document.getSelection();b.textContent=a,document.body.appendChild(b),c.removeAllRanges(),b.select(),document.execCommand("copy"),c.removeAllRanges(),document.body.removeChild(b),var pageTitle = document.title,var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3,var mailTitle = pageTitle.substring(0, cutStartPoint)}(document.title),alert("메일 제목이 복사되었습니다.\n슬랙에서 /gmail (메일제목) 을 입력해보세요.");


// Another approach.
// Works fine, but doesn't work when pressed twice with error below:
// Uncaught SyntaxError: Identifier 'copyListener' has already been declared

var pageTitle = document.title;
var cutStartPoint = pageTitle.indexOf("harry@socar.kr")-3;
var mailTitle = pageTitle.substring(0, cutStartPoint);

let copyListener = event => {
	document.removeEventListener("copy", copyListener, true);
	event.preventDefault();
	let clipboardData = event.clipboardData;
	clipboardData.clearData();
	clipboardData.setData("text/plain", mailTitle);
	//clipboardData.setData("text/html", "<b>Hello, world!</b>");
};
document.addEventListener("copy", copyListener, true);
document.execCommand("copy");

// minified for bookmarklet
javascript:var pageTitle=document.title;var cutStartPoint=pageTitle.indexOf("harry@socar.kr")-3;var mailTitle=pageTitle.substring(0,cutStartPoint);let copyListener=event=>{document.removeEventListener("copy",copyListener,!0);event.preventDefault();let clipboardData=event.clipboardData;clipboardData.clearData();clipboardData.setData("text/plain",mailTitle)};document.addEventListener("copy",copyListener,!0);document.execCommand("copy")
