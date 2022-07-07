chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.executeScript(null, {file: "jquery-3.6.0.js","main.js"});
});