
//////// MOMENT.JS USED ///////////
var createH3 = $("<h3>");
$("#currentDay").append(createH3)

var update = setInterval( function() {
    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    var localTime  = moment.utc(date).toDate();
    var currentTime = moment(localTime).format("MMMM Do YYYY, h:mm");
    createH3.text(currentTime);
    // var createH3 = $("<h3>");
    // createH3.text(currentTime);
    // $("#currentDay").append(createH3)
}, 1000)
setInterval(update, 1000);
///////////////////////////////////




var nineAm = $("<section>")
nineAm.text("This is nine o clock");
$(".container").append(nineAm);

var tenAm = $("<section>")
tenAm.text("This is ten o clock");
$(".container").append(tenAm);


var elevenAm = $("<section>")
elevenAm.text("This is eleven o clock");
$(".container").append(elevenAm);


var twelveAm = $("<section>")
twelveAm.text("This is twleve o clock");
$(".container").append(twelveAm);


var onePm = $("<section>")
onePm.text("This is one o clock");
$(".container").append(onePm);


var twoPm = $("<section>")
twoPm.text("This is two o clock");
$(".container").append(twoPm);


var threePm = $("<section>")
threePm.text("This is three o clock");
$(".container").append(threePm);


var fourPm = $("<section>")
fourPm.text("This is four o clock");
$(".container").append(fourPm);


var fivePm = $("<section>")
fivePm.text("This is five o clock");
$(".container").append(fivePm);
