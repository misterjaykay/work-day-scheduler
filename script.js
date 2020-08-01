
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar


//////// MOMENT.JS FOR CURRENT TIME APPEARANCE
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






////////////// BUSINESS HOURS //////////
var allHourList = ["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM", "05:00PM"];

for (var i = 0; i < allHourList.length; i++) {
    
    console.log(allHourList[i]);

    var tRow = $("<tr>").attr("data-hour", i);
    var tBody = (".tbody");
    $(tBody).append(tRow);
    var timeDiv = $("<th>").text(allHourList[i]).attr("scope", "row").attr("style", "text-align: center;");
    var messageDiv = $("<td>").html("<input class='textMessage-" + i + "' size='100' type='text' >")
    var buttonDiv = $("<td>").html("<input data-value'" + i + "' type='button' value='submit' >").attr("style", "text-align: center;").addClass("submit-button-" + i);
    
    $(tRow).prepend(timeDiv, messageDiv, buttonDiv);
    $(tBody).append(tRow);
    
}

///////////// GET THE VALUE FROM INPUT
// function getInputValue(){
//     // Selecting the input element and get its value 
//     var inputVal = document.getElementById("myInput").value;
    
//     // Displaying the value
//     alert(inputVal);
var submitButton = $(".submit-button-1");

$(submitButton).on("click", function(event) {
    event.preventDefault();
    var submitText = $(".textMessage-1").val().trim();
    console.log(submitText);
    console.log(typeof submitText);
    
    alert("hi")
    
    localStorage.setItem("test", JSON.stringify(submitText));
    alert("string")
});

///////// USING FUNCTION TO BRING BACK DATA
// function bringBack() {
//     var localText = JSON.parse(localStorage.getItem("test"));
//     $(".textMessage-1").attr("value", localText);
//     console.log(localText);
// }

var localText = JSON.parse(localStorage.getItem("test"));
    $(".textMessage-1").attr("value", localText);
    console.log(localText);

///////// FUNCTION TO SAVE DATA INTO LOCALSTORAGE
// function storeTodos() {
//     localStorage.setItem("test", JSON.stringify(submitText));
//     alert("string")
// }



