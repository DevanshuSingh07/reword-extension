// Inject CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('../css/popup.css');
document.head.appendChild(link);

document.addEventListener('mouseup', function() {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    // Remove any existing UI component
    let existingComponent = document.getElementById('text-selection-ui');
    if (existingComponent) {
      existingComponent.remove();
    }

    // Create a new UI component
    let uiComponent = document.createElement('div');
    uiComponent.id = 'text-selection-ui';
    uiComponent.style.position = 'absolute';
    uiComponent.style.left = `${event.pageX}px`;
    uiComponent.style.top = `${event.pageY}px`;
    uiComponent.style.backgroundColor = '#fff';
    uiComponent.style.border = '1px solid #ccc';
    uiComponent.style.padding = '10px';
    uiComponent.style.zIndex = '10000';
    uiComponent.innerHTML = `
    <p>Selected Text: ${selectedText}</p>
      <button id="action-button">Click me</button>
      <div id="extra-ui" style="display:block;">
        <p>Additional UI content</p>
      </div>
    `;

    document.body.appendChild(uiComponent);

    // Attach click event listener
    document.getElementById('action-button').addEventListener('click', function() {
      document.getElementById('extra-ui').style.display = 'block';
    });
  }
});
