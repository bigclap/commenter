const serviceWorker = {
    test: 'test'
}

chrome.runtime.onInstalled.addListener(details => console.log(details))

chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: [
                chrome.runtime.getURL('/bundle/embeded.js'),
                chrome.runtime.getURL('/bundle/embeded.css'),
            ]
        });
    }
});

export default serviceWorker;
