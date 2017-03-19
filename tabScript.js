var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);



button.addEventListener ("click", function() {
	// var masterString = [];
	var masterString = "";

	chrome.tabs.query({active: false}, function(tabs) {
		tabs.forEach(function(tab){
			Object.keys(chrome.contentSettings).forEach(function(key){
						if(key.charAt(0) == key.charAt(0).toLowerCase()){
								chrome.contentSettings[key].get({primaryUrl: tab.url}, function (details){
									// document.write(tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>");
									masterString += tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>";
							});
						}
			});
		});
	});
	setTimeout(function()
    {
    	// document.write("Hi!");
    	document.write(masterString);
    }, 100);
	
	// document.write(masterString);
	// chrome.contentSettings.forEach(function(item, index, array){
	// 			// .get({primaryUrl: item.url}, function(details){
	// 			console.log("+1<br/>");
	// 		});
	chrome.tabs.query({active: false}, function(tabs) {
		// document.write("Hii");
		// var tabsInfo = "The urls are:<br />";
		// tabs.forEach(function(item, index, array){
		// 	tabsInfo += "Tab #" + index + ": url: " + item.url + "<br />";
		// 	tabsInfo += "The content settings are: <br />";

		// 	chrome.contentSettings['images'].get({primaryUrl: item.url}, function (details){

		// 		//This will give you whether the setting is allowed/blocked:
		// 		// alert("The images setting for " + item.url + " is " + details.setting);
		// 	});

		// });

		// tabs.forEach(function(item, index, array){

		// 	// for(var key in chrome.contentSettings){
		// 	// 	if(chrome.contentSettings.hasOwnProperty(key) && key.charAt(0) == key.charAt(0).toLowerCase()){
		// 	// 		chrome.contentSettings[key].get({primaryUrl: item.url}, function(details){
		// 	// 			console.log(item.url + "[" + key + "]: " + details.setting);
		// 	// 		});
		// 	// 	}
		// 	// }
		// });
		// chrome.contentSettings.get({primaryUrl: tabs[0].url}, function(details){
		// 	tabsInfo += "url: " + tabs[0].url;
		// });
		// $("p").append("Test <br/>");
		// chrome.contentSettings[key].get({primaryUrl: item.url}, function(details){
		// 	console.log(item.url + "[" + key + "]: " + details.setting);
		// };

		// tabsInfo += "Keys:<br />";
		// for(var key in chrome.contentSettings){
		// 	if(chrome.contentSettings.hasOwnProperty(key) && key.charAt(0) == key.charAt(0).toLowerCase()){
		// 		tabsInfo += key + ": " 
		// 						// + chrome.contentSettings[key]
		// 						+ "<br /> <br />";
		// 		chrome.contentSettings[key].get({primaryUrl: tabs[0].url}, function(details){
		// 			// tabsInfo += details.setting;
		// 			console.log(tabs[0].url + "[" + key + "]: " + details.setting);
		// 			// console
		// 			 // $("p").append("Test <br/>");
		// 			// alert(details.setting);
		// 			// tabsInfo += details + "<br />";
		// 			// tabsInfo += "sdasdasd"+ "<br />";
		// 		});

		// 		// if(chrome.contentSettings[key].hasOwnProperty("ALLOW")){
		// 		// 	tabsInfo += "ALLOW - " + chrome.contentSettings[key].ALLOW + "<br/>";
		// 		// }
		// 	// for(var key2 in chrome.contentSettings[key]){
		// 	// 		tabsInfo += "Properties:<br />";
		// 	// 		if(chrome.contentSettings[key].hasOwnProperty(key2)){
		// 	// 			tabsInfo += key2 + " ";
		// 	// 		}
		// 	// 		tabsInfo += "<br />";
		// 	// 	}
		// 	}
		// }

		// document.write(tabsInfo);
	});

});