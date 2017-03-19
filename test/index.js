$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 35,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: function(){
        var theItems = [];
        var counter = 1;
        Object.keys(chrome.contentSettings).forEach(function(key){
          // console.log(key);1
          if(key.charAt(0) == key.charAt(0).toLowerCase() && counter <= 15){
            counter = counter + 1;
            var keyText = key.toString();

            var upperIndex = 0;
            for (i = 1; i < keyText.length; i++){
              if (keyText.charAt(i).match(/[a-z]/i) && keyText.charAt(i) == keyText.charAt(i).toUpperCase()) {
                //alert(keyText.charAt(i) + " " + keyText);
                keyText = keyText.slice(0,i) + " " + keyText.slice(i);
                break;
              }
            }
            keyText = keyText.charAt(0).toUpperCase() + keyText.slice(1);
            theItems.push({
              text: keyText,
              count: counter * 7
            });
          }
        });
        return theItems;
    }(),
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            alert("Here is more details!!");
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "0px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "0px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "10px"}
            }
          ]
        }
      }]
  });
});
