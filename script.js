
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar


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


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours



////////////// BUSINESS HOURS //////////

// var nineHour = $("<div>");
// nineHour.text("This is nine o clock");
// nineHour.attr("style", "border-style:solid;")
// $(".hour").append(nineHour);
// var nineType = $("<input>");
// nineType.text("This is nine text");
// nineType.attr("class", "input");
// $(".schedule").append(nineType);

var tenHour = $("<div>");
var elevenHour = $("<div>");
var twelveHour = $("<div>");
var oneHour = $("<div>");
var twoHour = $("<div>");
var threeHour = $("<div>");
var fourHour = $("<div>");
var fiveHour = $("<div>");

///////////////////////////////

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist




