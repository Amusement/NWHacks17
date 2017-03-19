var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
	chrome.tabs.query({active: false}, function(tabs) {
		var urls = "The urls are:<br />";
		tabs.forEach(function(item, index, array){
			urls += "Tab #" + index + ": url: " + item.url + "<br />";
			urls += "The content settings are: <br />";
			chrome.contentSettings['images'].get({primaryUrl: item.url}, function (details){

				//This will give you whether the setting is allowed/blocked:
				// alert("The images setting for " + item.url + " is " + details.setting);
			});

		});
		// document.write(urls);
		document.getElementById('my-object').innerHTML += urls;
	});

});