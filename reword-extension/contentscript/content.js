// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       console.log(sender.tab ?
//                   "from a content script:" + sender.tab.url :
//                   "from the extension");
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );
console.log('content')
const element= Array.from(document.querySelectorAll('input[type="text"], textarea, [contenteditable="true"]'))
element.forEach((element) => {
  element.addEventListener('paste',handleevent)
  element.addEventListener('input',handleevent)
  
})

function handleevent(){
  chrome.runtime.sendMessage({ type: 'fetch-html' }, (response) => {
    if (response.html) {
      injectHtmlIntoPage(response.html);
    } else {
      console.error("Failed to fetch HTML:", response.error);
    }
  });
  
  
}
function injectHtmlIntoPage(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  console.log(html);
}