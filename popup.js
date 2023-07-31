javascript
// Get the toggle button element
const toggleButton = document.getElementById('toggle-button');

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
  // Get the current toggle state
  const isToggledOn = toggleButton.checked;

  // Send message to background script to toggle the extension
  chrome.runtime.sendMessage({ toggle: isToggledOn });
});

// Get the form element
const settingsForm = document.getElementById('settings-form');

// Add event listener to form submit
settingsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the selected celebrity face
  const celebrityFace = document.querySelector('input[name="celebrity-face"]:checked').value;

  // Get the lighting setting
  const lightingSetting = document.getElementById('lighting-setting').value;

  // Get the angle setting
  const angleSetting = document.getElementById('angle-setting').value;

  // Get the expression setting
  const expressionSetting = document.getElementById('expression-setting').value;

  // Get the selected websites
  const selectedWebsites = Array.from(document.querySelectorAll('input[name="website"]:checked')).map((checkbox) => checkbox.value);

  // Send message to background script with the selected settings
  chrome.runtime.sendMessage({
    celebrityFace,
    lightingSetting,
    angleSetting,
    expressionSetting,
    selectedWebsites,
  });
});
