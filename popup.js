document.getElementById("saveButton").addEventListener("click", function(){
    let customDomain = document.getElementById("customDomain").value;
    chrome.storage.sync.set({customDomain: customDomain}, function() {
        // Once the domain is saved, close the popup
        window.close();
    });
});

// To set the input field with the saved domain when the popup is opened
chrome.storage.sync.get("customDomain", function(data) {
    if(data.customDomain) {
        document.getElementById("customDomain").value = data.customDomain;
    }
});
