chrome.tabs.onCreated.addListener(function(tab) {
	alert('TAB STATUS : OPENED');
			});
			
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		alert('TAB STATUS : Updated');
	});
		
			

 