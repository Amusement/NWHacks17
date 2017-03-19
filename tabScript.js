var button = document.createElement("button");
button.innerHTML = "Display Tabs Info";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);



button.addEventListener ("click", function() {

	//This is where all the Tab info goes, with each line being a new element
	var masterString = [];

	//Get all tabs, and for each tab
	chrome.tabs.query({active: false}, function(tabs) {
		tabs.forEach(function(tab){
			//For each contentSetting(ex. camera, location, microphone etc)
			Object.keys(chrome.contentSettings).forEach(function(key){
						if(key.charAt(0) == key.charAt(0).toLowerCase()){
								chrome.contentSettings[key].get({primaryUrl: tab.url}, function (details){
									masterString.push({id: tab.id, setting: key, content: (tab.url + " " + key + ": " + details.setting + " " + "<br/>")});
									// document.write(tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>");
									// masterString += tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>";
							});
						}
			});
		});
	});

	//Timeout to give enough time for all the callbacks to complete
	setTimeout(function()
    {
    	//Sort our data based on 1. Tab ID 2. ContentSetting String
		masterString.sort(function(item1, item2){
			if(item1.id - item2.id == 0){
				if(item1.setting.charCodeAt(0) - item2.setting.charCodeAt(0) == 0)
					return item1.setting.charCodeAt(1) - item2.setting.charCodeAt(1);
				return item1.setting.charCodeAt(0) - item2.setting.charCodeAt(0);
			}
			return item1.id - item2.id;
		});

	//Print out all the tab info
	masterString.forEach(function(line){
			document.write(line.content);
		});
    }, 100);
});