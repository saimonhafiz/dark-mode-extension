const color = '#123411'

chrome.runtime.onInstalled.addListener( () => {
    chrome.storage.sync.set({ color });
    console.log("Color set!");
}) 