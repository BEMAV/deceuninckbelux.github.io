﻿/* File Created: februari 17, 2012 */
var popUpWindowColorSimWidth = 970;
var popUpWindowColorSimHeight = 672;
var popUpWindowEnergyCalculatorWidth = 990;
var popUpWindowEnergyCalculatorHeight = 660;
$(document).ready(function () {
    $(".popUpWindowColorSim").fancybox({
        'type': 'iframe',
        'autoDimensions': false,
        'autoScale': false,
        'width': popUpWindowColorSimWidth,
        'height': popUpWindowColorSimHeight,
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'onClosed': function () {
            parent.location.reload(true);
        }
    });
    $(".popUpWindowEnergyCalculator").fancybox({
       'type': 'iframe',
       'autoDimensions': false,
       'autoScale': false,
       'width': popUpWindowEnergyCalculatorWidth,
       'height': popUpWindowEnergyCalculatorHeight,
       'transitionIn': 'fade',
       'transitionOut': 'fade',
       'onClosed': function () {
       parent.location.reload(true);
       }
});
if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
//$(".popUp").attr
} else {
$(".popUp").fancybox({
    type: 'iframe',
    autoSize: true,
    transitionIn: 'fade',
    transitionOut: 'fade',
    width: 650
});
}
    $(".popUpWindowColorSim").live("click", function () {
        _gaq.push(['_trackPageview', '/vp/http://windowscoloursimulator.com/be/']);
    });
   $(".popUpWindowEnergyCalculator").live("click", function () {
       _gaq.push(['_trackPageview', '/vp/http://www.deceuninck.be/energiecalculator/fr']);
    });
});    

   