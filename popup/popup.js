console.log('popup log');

chrome.tabs.getSelected(null, function(tab) {
    document.getElementById("url").value = decodeURIComponent(tab.url);
});