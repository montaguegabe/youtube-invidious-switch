chrome.commands.onCommand.addListener(function(command) {
    if (command === "redirect") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let currentUrl = tabs[0].url;
            chrome.storage.sync.get("customDomain", function(data) {
                let customDomain = data.customDomain || "yewtu.be";
                scheme = "";
                if (!customDomain.startsWith("http")){
                    scheme = "https://";
                }
                if (currentUrl.includes("youtube.com/watch")) {
                    let newUrl = scheme + customDomain + "/watch" + currentUrl.split("/watch")[1]
                    chrome.tabs.update(tabs[0].id, {url: newUrl});
                } else if (currentUrl.includes(customDomain + "/watch")) {
                    let newUrl = "https://www.youtube.com/watch" + currentUrl.split("/watch")[1]
                    chrome.tabs.update(tabs[0].id, {url: newUrl});
                }
            });
        });
    }
});
