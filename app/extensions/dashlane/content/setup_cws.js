var KW__localTime = 0;
KWController.init();
chrome.browserAction.onClicked.addListener(function(a) {
    KW__ORDER_SENDER.sendOrderToCpp({
        action: "askLoginPopup",
        status: "loggedout"
    }, KW__CONFIG.defaultTabId, "fromExtensionToCpp")
});
