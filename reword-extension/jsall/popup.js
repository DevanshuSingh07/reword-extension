document.getElementById('trigger-action').addEventListener('click', () => {
  chrome.runtime.sendMessage({type: 'popup_clicked'}, (response) => {
      console.log('Background response:', response);
  });
});
