$(document).ready(function() {
});

//////// MOMENT.JS FOR CURRENT TIME APPEARANCE
var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
var localTime  = moment.utc(date).toDate();
var currentTime = moment(localTime).format("MMMM Do YYYY, h:mm");
var createH3 = $("<h3>");
$(createH3).text(currentTime);
$("#currentDay").append(createH3);

///////// OPTION FOR YOU TO USE THE TIME TO BE UPDATED WITHIN INTERVAL
// var update = setInterval( function() {
//     var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
//     var localTime  = moment.utc(date).toDate();
//     var currentTime = moment(localTime).format("MMMM Do YYYY, h:mm");
//     createH3.text(currentTime);
//     // var createH3 = $("<h3>");
//     // createH3.text(currentTime);
//     // $("#currentDay").append(createH3)
// }, 1000)
// setInterval(update, 1000);



// var allHourList = ["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM", "05:00PM"];
////////////// ARRAY OF HOURS
var allHourList = [{
        timeDesc: "09:00AM",
        actualTime: 9
    },
    {
        timeDesc: "10:00AM",
        actualTime: 10
    },
    {
        timeDesc: "11:00AM",
        actualTime: 11
    },
    {
        timeDesc: "12:00PM",
        actualTime: 12
    },
    {
        timeDesc: "01:00PM",
        actualTime: 13
    },
    {
        timeDesc: "02:00PM",
        actualTime: 14
    },
    {
        timeDesc: "03:00PM",
        actualTime: 15
    },
    {
        timeDesc: "04:00PM",
        actualTime: 16
    },
    {
        timeDesc: "05:00PM",
        actualTime: 17
    }];



/////////////////// CREATING A TABLE FOR TIME,EVENT INPUT, SUBMIT BUTTON
for (var i = 0; i < allHourList.length; i++) {

    var tRow = $("<tr>").attr("data-hour", i);
    var tBody = (".tbody");
    $(tBody).append(tRow);
    var timeDiv = $("<th>").text(allHourList[i].timeDesc).attr("scope", "row").attr("style", "text-align: center; padding-top: 17px;");
    var messageDiv = $("<td>").html("<input class='time-check textMessage-" + i + "' size='110' type='text' >");
    // var buttonDiv = $("<td>").html("<input class='submit-button' data-value='" + i + "' type='button' value='save' >").attr("style", "text-align: center;")
    var buttonDiv = $("<td>").html("<i class='submit-button far fa-save' data-value='" + i + "' type='button' value='save' ></i>").attr("style", "text-align: center;")
    // AT VAR MESSAGE DIV, REMOVED BOTTOM LINE (FOR FUTURE USE)
    // data-input='" + i + "'
    
    // AT VAR BUTTONDIV, REMOVED BOTTOM LINE (FOR FUTURE USE)
    // .addClass("submit-button-" + i);
    
    $(tRow).prepend(timeDiv, messageDiv, buttonDiv);
    $(tBody).append(tRow);
    
}

///////////// DEPENDS ON TIME, TIMEBLOCKS WILL BE COLORED AND DISABLED.
var currentHour = moment(localTime).format("HH");
console.log("Current hour is: " + currentHour);
for (var i = 0; i < allHourList.length; i++) {
    
    if (currentHour > allHourList[i].actualTime) {
        $(".textMessage-" + i).attr("style", "background-color: #FF9999;");
        $(".textMessage-" + i).prop("disabled", true);
    }

    else if (currentHour < allHourList[i].actualTime) {
        $(".textMessage-" + i).attr("style", "background-color: #66CC66;");
    }
    
    else {
        $(".textMessage-" + i).attr("style", "background-color: #DDDDDD;");
    }
}

//////////// SUBMIT BUTTONS TO SAVE EACH TEXT TO LOCAL STORAGE
$(".submit-button").on("click", function(event) {
    event.preventDefault();
    var saveButton = $(this).attr("data-value");
    
    if (saveButton == 0) {
        var textRowOne = $(".textMessage-0").val().trim();
        localStorage.setItem("textRowOne", JSON.stringify(textRowOne));
    }

    if (saveButton == 1) {
        var textRowTwo = $(".textMessage-1").val().trim();
        localStorage.setItem("textRowTwo", JSON.stringify(textRowTwo)); 
    }

    if (saveButton == 2) {
        var textRowThree = $(".textMessage-2").val().trim();
        localStorage.setItem("textRowThree", JSON.stringify(textRowThree));
    }

    if (saveButton == 3) {
        var textRowFour = $(".textMessage-3").val().trim();
        localStorage.setItem("textRowFour", JSON.stringify(textRowFour));
    }

    if (saveButton == 4) {
        var textRowFive = $(".textMessage-4").val().trim();
        localStorage.setItem("textRowFive", JSON.stringify(textRowFive));
    }

    if (saveButton == 5) {
        var textRowSix = $(".textMessage-5").val().trim();
        localStorage.setItem("textRowSix", JSON.stringify(textRowSix));
    }

    if (saveButton == 6) {
        var textRowSeven = $(".textMessage-6").val().trim();
        localStorage.setItem("textRowSeven", JSON.stringify(textRowSeven));
    }

    if (saveButton == 7) {
        var textRowEight = $(".textMessage-7").val().trim();
        localStorage.setItem("textRowEight", JSON.stringify(textRowEight));
    }

    if (saveButton == 8) {
        var textRowNine = $(".textMessage-8").val().trim();
        localStorage.setItem("textRowNine", JSON.stringify(textRowNine));
    }

});


///////////// GETTING THE DATA FROM LOCAL STORAGE WHEN YOU REFRESH YOUR PAGE
function bringBack() {

    if (localTextOne != null || localTextOne != "") {
        var localTextOne = JSON.parse(localStorage.getItem("textRowOne"));
        $(".textMessage-0").attr("value", localTextOne);
    }

    if (localTextTwo != null || localTextTwo != "") {
        var localTextTwo = JSON.parse(localStorage.getItem("textRowTwo"));
        $(".textMessage-1").attr("value", localTextTwo);
    }

    if (localTextThree != null || localTextThree != "") {
        var localTextThree = JSON.parse(localStorage.getItem("textRowThree"));
        $(".textMessage-2").attr("value", localTextThree);
    }

    if (localTextFour != null || localTextFour != "") {
        var localTextFour = JSON.parse(localStorage.getItem("textRowFour"));    
        $(".textMessage-3").attr("value", localTextFour);
    }

    if (localTextFive != null || localTextFive != "") {
        var localTextFive = JSON.parse(localStorage.getItem("textRowFive"));
        $(".textMessage-4").attr("value", localTextFive);
    }

    if (localTextSix != null || localTextSix != "") {
        var localTextSix = JSON.parse(localStorage.getItem("textRowSix"));
        $(".textMessage-5").attr("value", localTextSix);
    }

    if (localTextSeven != null || localTextSeven != "") {
        var localTextSeven = JSON.parse(localStorage.getItem("textRowSeven"));
        $(".textMessage-6").attr("value", localTextSeven);
    }

    if (localTextEight != null || localTextEight != "") {
        var localTextEight = JSON.parse(localStorage.getItem("textRowEight"));
        $(".textMessage-7").attr("value", localTextEight);
    }

    if (localTextNine != null || localTextNine != "") {
        var localTextNine = JSON.parse(localStorage.getItem("textRowNine"));
        $(".textMessage-8").attr("value", localTextNine);
    }

}

bringBack();