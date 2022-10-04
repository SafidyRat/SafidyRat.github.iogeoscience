function showvalue(data){



/* tooltip code start */
var demoWrapper = document.querySelector('.demo-wrapper');
var tooltip = document.querySelector('.tooltip');
function updateTooltip(x, y, value) {
  // + 15 for distance to cursor
  var transl = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)';
  tooltip.style.webkitTransform = transl;
  tooltip.innerHTML = value;
};
demoWrapper.onmousemove = function(ev) {
  var x = ev.layerX;
  var y = ev.layerY;
  // getValueAt gives us the value for a point p(x/y)
  var value = heatmapInstance.getValueAt({
    x: x,
    y: y
  });
  tooltip.style.display = 'block';
  updateTooltip(x, y, value);
};
// hide tooltip on mouseout
demoWrapper.onmouseout = function() {
  tooltip.style.display = 'none';
};
/* tooltip code end */

heatmapInstance.setData(data);

}