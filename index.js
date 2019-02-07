chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'DesktopPet.js'
  },function(data){
    var id = prompt("Enter ID of Pet:", 5);
    if (!id) return;
    chrome.tabs.executeScript({
      code: `new DesktopPet().start_esheep("https://esheep.redsparr0w.com/${id}");`
    });
  });
});
