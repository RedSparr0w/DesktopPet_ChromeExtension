chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'DesktopPet.js'
  },function(data){
    var id = prompt("Enter ID of Pet:", 5);
    if (!id) return;
    chrome.tabs.executeScript({
      code: `new DesktopPet().start_esheep("http://esheep.petrucci.ch/script/pettester.php?id=${id}");`
    });
  });
});