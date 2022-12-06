chrome.runtime.onInstalled.addListener(details => console.log(details))

// chrome.action.onClicked.addListener((tab) => {
//     if(!tab.url.includes("chrome://")) {
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             files: [
//                 chrome.runtime.getURL('/bundle/embeded.js'),
//                 chrome.runtime.getURL('/bundle/embeded.css'),
//             ]
//         });
//     }
// });

function getGenerateUrl(pageUrl, selectionContext) {
  return pageUrl + ':~:text=' + encodeURIComponent(selectionContext);
}

function genericOnClick(info: chrome.contextMenus.OnClickData, tab) {
  // https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob:~:text=Content%20scripts%20can%20be%20injected%20as%20files%E2%80%A6
  const {pageUrl, selectionText} = info;
  const generatedUrl = getGenerateUrl(pageUrl, selectionText)
  console.log({pageUrl, selectionText, generatedUrl})
}

// Create one test item for each context type.

var title = "Test menu item";
var id = chrome.contextMenus.create({
  "title": title, id: 'test',
  "contexts": ["page", "selection", "link", "editable", "image", "video", "audio"],
});
chrome.contextMenus.onClicked.addListener(genericOnClick)

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.insertCSS({
    target: { tabId: tab.id, allFrames: true },
    files: ["build/embedded.css"],
  });
  // Do other stuff...
});

export {}
