//Opens incgonito window with current URL
//now need to switch them around so that they open in correct order
//If clicked in incognito, then checks to see if <IM> Force ads cookie set

//Need to work on settimeout to only work on the else below because right now if you open an incognito window, it opens a tab with <IM>

//<IM> URL
var urlIntent = "http://a.intentmedia.net/adServer/forceAds";
var temp = 0;
//Checks to see if current view is in incognito or not
chrome.browserAction.onClicked.addListener( function(tab) {
		if(tab.incognito){
			temp = 0;
		    getCookie();
		}
		else{
			temp = 1;
			createWindow();
			setTimeout(intentURL, 1);
		}
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
//NEEDS WORK
function intentURL(){
	if(temp === 1){
		chrome.tabs.create({url: urlIntent});
	}
}
//Cookie getting script
//Checks and alerts if cookie is set or not for current page
function getCookie(){
    chrome.cookies.get({ url: 'http://a.intentmedia.net', name: 'force_ads' },
	  function (cookie) {
	    if (cookie)
	      alert("<IM> Forced ads set!");
	    else
	      alert('<IM> Forced ads NOT set');
	});
}