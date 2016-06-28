//<IM> URL
var urlIntent = "http://a.intentmedia.net/adServer/forceAds";

//Opens incgonito window with current URL
//now need to switch them around so that they open in correct order

//Checks to see if current view is in incognito or not
chrome.browserAction.onClicked.addListener( function(tab) {
		if(tab.incognito)
		    alert("In Incognito Mode already!");
		else
			createWindow();
});

//Creates copy of current window in incognito window
function createWindow(){
	chrome.tabs.query({
		'active': true,
		'windowId': chrome.windows.WINDOW_ID_CURRENT
	},function(tabs){
		url = tabs[0].url;
		chrome.windows.create({url: url, incognito: true});
	});
};

//Opens up <IM> force cookies page in current incognito window
setTimeout(function() {chrome.tabs.create({url: urlIntent});}, 1);