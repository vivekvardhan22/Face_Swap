javascript
// src/background.js

// Function to handle the extension toggle
function toggleExtension() {
  chrome.storage.sync.get("enabled", function (data) {
    const enabled = data.enabled;
    chrome.storage.sync.set({ enabled: !enabled }, function () {
      if (!enabled) {
        chrome.browserAction.setIcon({ path: "icon_enabled.png" });
      } else {
        chrome.browserAction.setIcon({ path: "icon_disabled.png" });
      }
    });
  });
}

// Event listener for extension toggle
chrome.browserAction.onClicked.addListener(toggleExtension);

// Function to handle the storage change
function handleStorageChange(changes, area) {
  if (changes.enabled) {
    const enabled = changes.enabled.newValue;
    if (enabled) {
      // Enable the extension
      // TODO: Implement face swapping logic
    } else {
      // Disable the extension
      // TODO: Remove face swapping effect
    }
  }
}

// Event listener for storage change
chrome.storage.onChanged.addListener(handleStorageChange);
