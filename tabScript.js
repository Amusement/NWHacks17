var buttons = [];
var body = document.getElementsByTagName("body")[0];

// function recur(b){
// 	setTimeout(function(){
// 		// console.log("hi");
// 		var button = document.createElement("button");
// 		// button.innerHTML = ".";
// 		button.innerHTML = "Inception";
// 		b.appendChild(button);

// 		window.scrollTo(0, document.body.scrollHeight);
// 		// window.scrollTo(999999,document.body.scrollWidth);
// 		// window.scrollLeft(9999);

// 		recur(button);


// 		// var button2 = document.createElement("button");
// 		// button2.innerHTML = "key2";
// 		// button.appendChild(button2);
// 		// recur();
// 	}, 125);
// }

// recur(body);

// function tabOpen(){
// 	setTimeout(function(){
// 		chrome.tabs.create({}, function(tab) {
// 			tabOpen();
// 		});
// 	}, 1000);
// };

// tabOpen();
window.scrollTo(0, 100);
var startLength = 350;
var leftLineLengthRatio = Math.random() * 0.5 + 0.45;
var rightLineLengthRatio = Math.random() * 0.5 + 0.45;
var leftAngle = Math.floor(Math.random() * 90);
var rightAngle = Math.floor(Math.random() * 90);
var thickness = Math.floor(1 + Math.random() * 5);

var counter = 0;
function fract(x, y, length, angle){
	setTimeout(function(){
		var canvas = document.querySelector("canvas");
		var context = canvas.getContext("2d");
		context.strokeStyle = "rgba(" + (Math.floor(255 * Math.random())) + ", " + (Math.floor(255 * Math.random())) + ", " + (Math.floor(Math.random() * 255)) + ", 1.0)"; 
		context.beginPath();
		context.moveTo(x, y);
		context.lineWidth = thickness;
		context.lineTo(x + Math.sin(angle) * length, 
						y + Math.cos(angle) * length);
		
		context.stroke();
		counter += 1;
		if(counter < 750){
			fract(x + Math.sin(angle) * length,
					y + Math.cos(angle) * length,
					length * leftLineLengthRatio,
					angle - leftAngle);
			fract(x + Math.sin(angle) * length,
					y + Math.cos(angle) * length,
					length * rightLineLengthRatio,
					angle + rightAngle);
		}else{
			// refresher();
		}
		// context.fillStyle = "red";
		// context.fillRect(10, 10, 100, 50);
		// var circle = document.querySelector("circle");
		// circle.setAttribute("fill", "cyan");
	}, 80);
};

// fract(500, 200, startLength, 0);

function refresher(){
	// setTimeout(function(){}, );
	var canvas = document.querySelector("canvas");
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, 1000, 2500);
	counter = 0;

	leftLineLengthRatio = Math.random() * 0.5 + 0.45;
	rightLineLengthRatio = Math.random() * 0.5 + 0.45;
	leftAngle = Math.floor(Math.random() * 90);
	rightAngle = Math.floor(Math.random() * 90);
	thickness = Math.floor(1 + Math.random() * 5);
	console.log("leftLineLengthRatio " + leftLineLengthRatio + ", rightLineLengthRatio " + rightLineLengthRatio + ", leftAngle " + leftAngle + ", rightAngle " + rightAngle);
	fract(500, 200, startLength, 0);
	setTimeout(function(){
		refresher();
	}, 3500);
	
};

refresher();





// var button = document.createElement("button");



// buttons.forEach(function(button){
// 	button.innerHTML = "Display Tabs Info";
// 	// console.log(button);
// 	body.appendChild(button);
// });

// body.appendChild(button);

// button.addEventListener ("click", function() {

// 	//This is where all the Tab info goes, with each line being a new element
// 	var masterString = [];

// 	//Get all tabs, and for each tab
// 	chrome.tabs.query({active: false}, function(tabs) {
// 		tabs.forEach(function(tab){
// 			//For each contentSetting(ex. camera, location, microphone etc)
// 			Object.keys(chrome.contentSettings).forEach(function(key){
// 						if(key.charAt(0) == key.charAt(0).toLowerCase()){
// 								chrome.contentSettings[key].get({primaryUrl: tab.url}, function (details){
// 									masterString.push({id: tab.id, setting: key, content: (tab.url + " " + key + ": " + details.setting + " " + "<br/>")});
// 									// document.write(tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>");
// 									// masterString += tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>";
// 							});
// 						}
// 			});
// 		});
		
// 		// document.write(urls);
// 		document.getElementById('my-object').innerHTML += urls;
// 	});

// 	//Timeout to give enough time for all the callbacks to complete
// 	setTimeout(function()
//     {
//     	//Sort our data based on 1. Tab ID 2. ContentSetting String
// 		masterString.sort(function(item1, item2){
// 			if(item1.id - item2.id == 0){
// 				if(item1.setting.charCodeAt(0) - item2.setting.charCodeAt(0) == 0)
// 					return item1.setting.charCodeAt(1) - item2.setting.charCodeAt(1);
// 				return item1.setting.charCodeAt(0) - item2.setting.charCodeAt(0);
// 			}
// 			return item1.id - item2.id;
// 		});

// 	//Print out all the tab info
// 	masterString.forEach(function(line){
// 			document.write(line.content);
// 		});
//     }, 100);
// });