var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
	chrome.tabs.query({active: false}, function(tabs) {
		var tabsInfo = "The urls are:<br />";
		// tabs.forEach(function(item, index, array){
		// 	tabsInfo += "Tab #" + index + ": url: " + item.url + "<br />";
		// 	tabsInfo += "The content settings are: <br />";

		// 	chrome.contentSettings['images'].get({primaryUrl: item.url}, function (details){

		// 		//This will give you whether the setting is allowed/blocked:
		// 		// alert("The images setting for " + item.url + " is " + details.setting);
		// 	});

		// });

		tabsInfo += "Keys:<br />";
		for(var key in chrome.contentSettings){
			if(chrome.contentSettings.hasOwnProperty(key)){
				tabsInfo += key + ": " 
								// + chrome.contentSettings.key
								+ "<br />";
			}
		}

		document.write(tabsInfo);
	});

});