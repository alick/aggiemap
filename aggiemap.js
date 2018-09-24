/*
Called when the contextMenus item has been created,
or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

browser.contextMenus.create({
  id: "aggiemap",
  title: "Find '%s' in AggieMap",
  contexts: ["selection"]
}, onCreated);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "aggiemap") {
    browser.tabs.create({
      url: "https://aggiemap.tamu.edu/?BldgAbbrv=" + info.selectionText
    });
  }
});
