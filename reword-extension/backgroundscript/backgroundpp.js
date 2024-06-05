console.log("background running again");

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'fetch-html') {
      fetchHtmlComponent()
        .then(htmlContent => {
          sendResponse({ html: htmlContent });
        })
        .catch(error => {
          console.error("Error fetching HTML:", error);
          sendResponse({ error: "Failed to fetch HTML" });
        });
        
      // Return true to indicate that the response is asynchronous
      return true;
    }
  });
  
  function fetchHtmlComponent() {
    return fetch(chrome.runtime.getURL('../html/popup.html'))
      .then(response => response.text());
  }
  


// chrome.action.onClicked.addListener(async (tab) => {
//     console.log("i am in")
//     // const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
//     const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
//     // do something with response here, not outside the function
//     console.log(response);
//   })