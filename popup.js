//Intent URL
var urlIntent = "http://a.intentmedia.net/adServer/forceAds";
var url = "http://www.google1.com";
//Opens incgonito window with current URL
//Need to open a new tab within this incognito tab for intent cookie clearing URL
//now need to switch them around so that they open corectly
function test(){
	chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		'active': true,
		'windowId': chrome.windows.WINDOW_ID_CURRENT
	},function(tabs){
		url = tabs[0].url;
		chrome.windows.create({url: url, incognito: true});
	});
});
};

test();

setTimeout(function() {chrome.tabs.create({url: urlIntent});}, 1);

setTimeout(function() {
						chrome.tabs.getCurrent(function(tab) {
    					chrome.tabs.remove(tab.id, function() { });
						});
					}, 3000);
// setTimeout(function() {chrome.tabs.getCurrent(function(tab) {
//     chrome.tabs.remove(tab.id, function(){});
// };}, 5000);
//setTimeout(function() {alert(url);}, 5000);