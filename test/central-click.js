/**
 * central-click.js
 */
d3.svg.BubbleChart.define("central-click", function (options) {
  var self = this;

  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        if (node.selectAll("text.central-click")[0].length === 1) {
            var key = (node[0][0].__data__.item.key);
            var message = "Property information for " + key + "\n\n";
            
            //Get all tabs, and for each tab
            chrome.tabs.query({active: false}, function(tabs) {
                tabs.forEach(function(tab){
                    //For each contentSetting(ex. camera, location, microphone etc)
                            chrome.contentSettings[key].get({primaryUrl: tab.url}, function (details){
                                message += "Site: " + tab.url + " has setting: " + details.setting + "\n\n";
                                //masterString.push({id: tab.id, setting: key, content: (tab.url + " " + key + ": " + details.setting + " " + "<br/>")});
                                // document.write(tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>");
                                // masterString += tab.id + " " + key + ": " + details.setting + " " + tab.url + "<br/>";
                        });
                });
                
                // document.write(urls);
            });
            setTimeout(function() {
                alert(message);
            },100);
        }

      });
      return fn;
    };
  })();

  self.reset = (function (node) {
    var original = self.reset;
    return function (node) {
      var fn = original.apply(this, arguments);
      node.select("text.central-click").remove();
      return fn;
    };
  })();

  self.moveToCentral = (function (node) {
    var original = self.moveToCentral;
    return function (node) {
      var fn = original.apply(this, arguments);
      var transition = self.getTransition().centralNode;
      transition.each("end", function() {
        node.append("text").classed({"central-click": true})
          .attr(options.attr)
          .style(options.style)
          .attr("x", function (d) {return d.cx;})
          .attr("y", function (d) {return d.cy;})
          .text(options.text)
          .style("opacity", 0).transition().duration(self.getOptions().transitDuration / 2).style("opacity", "0.8");
      });
      return fn;
    };
  })();
});
