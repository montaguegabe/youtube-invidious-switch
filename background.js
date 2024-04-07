chrome.commands.onCommand.addListener(function(command) {
    if (command === "redirect") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let currentUrl = tabs[0].url;
            chrome.storage.sync.get("customDomain", function(data) {
                let customDomain = data.customDomain || "yewtu.be";
                if (currentUrl.includes("youtube.com/watch")) {
                    let newUrl = currentUrl.replace("youtube.com", customDomain);
                    chrome.tabs.update(tabs[0].id, {url: newUrl});
                } else if (currentUrl.includes(customDomain + "/watch")) {
                    let newUrl = currentUrl.replace(customDomain, "youtube.com");
                    chrome.tabs.update(tabs[0].id, {url: newUrl});
                }
            });
        });
    }
});
