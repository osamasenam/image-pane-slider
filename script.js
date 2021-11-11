var sliderLeft = $('.slider').css('left');
var sliderElem = $('.slider');
var containerElem = $('.container');
var topElem = $('.top');
var mouseLeft;


var mouseDownFlag = false;

/// why mot working! ///
// function grabMouseLeft(event) {
//     var mouseLeft = event.pageX;
//     console.log(mouseLeft);
// }

// function senseMouseMove(event) {
//     $(document).on("mousemove", grabMouseLeft);
// }

// $(document).on("mousedown", senseMouseMove);
// $(document).off("mouseup", senseMouseMove);
/// why mot working! ///


function grabMouseLeft(event) {
    mouseLeft = event.pageX;
    // console.log("mouseLeft", mouseLeft);
    // console.log("width", containerElem.css("width"));
    // console.log("condition", mouseLeft < parseFloat(containerElem.css("width")));
    if(mouseDownFlag && (mouseLeft < parseFloat(containerElem.css("width")))) {
        // console.log("mouseLeft", mouseLeft);
        sliderElem.css("left", mouseLeft);
        topElem.css("width", mouseLeft);
        // sliderElem.css("left", mouseLeft - sliderElem.css("width")/2 + "px");
    }
}

console.log("containerElem", containerElem);
containerElem.on("mousemove", grabMouseLeft);


sliderElem.on("mousedown", function(e) {
    mouseDownFlag = true;
    e.preventDefault();
    console.log("mouseDownFlag", mouseDownFlag);
});

$(document).on("mouseup", function(e) {
    mouseDownFlag = false;
    e.preventDefault();
    console.log("mouseDownFlag", mouseDownFlag);
});