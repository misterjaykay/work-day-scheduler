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

    var tRow = $("<tr>");
    var tBody = (".tbody");
    $(tBody).append(tRow);
    var timeDiv = $("<th>").text(allHourList[i].timeDesc).attr("scope", "row").attr("style", "text-align: center; padding-top: 17px;");
    var messageDiv = $("<td>").html("<input class='time-check textMessage-" + i + "' size='110' type='text' >");
    // var buttonDiv = $("<td>").html("<input class='submit-button' data-value='" + i + "' type='button' value='save' >").attr("style", "text-align: center;")
    var buttonDiv = $("<td>").html("<i class='submit-button far fa-save' data-value='" + i + "' type='button' value='save' ></i>").attr("style", "text-align: center;");

    // From tRow, removed = .attr("data-hour", i)
    // From meesageDiv, removed = data-input='" + i + "'
    // From buttonDiv, removed =.addClass("submit-button-" + i);
    
    $(tRow).prepend(timeDiv, messageDiv, buttonDiv);
    $(tBody).append(tRow);
    
}

///////////// DEPENDS ON TIME, TIMEBLOCKS WILL BE COLORED AND DISABLED.
var currentHour = moment(localTime).format("HH");
console.log("Current hour is: " + currentHour);
for (var i = 0; i < allHourList.length; i++) {
    
    if (currentHour > allHourList[i].actualTime) {
        $(".textMessage-" + i).addClass("past");
        $(".textMessage-" + i).prop("disabled", true);
    }

    else if (currentHour < allHourList[i].actualTime) {
        $(".textMessage-" + i).removeClass("past").addClass("future");  
    }
    
    else {
        $(".textMessage-" + i).removeClass("past","future").addClass("present");  
    }
}

//////////// SUBMIT BUTTONS TO SAVE EACH TEXT TO LOCAL STORAGE
$(".submit-button").on("click", function(event) {
    event.preventDefault();
    var saveButton = $(this).attr("data-value");
    var userInputValue = $(this).parent().siblings().children().val();
    console.log(userInputValue);
    localStorage.setItem(saveButton, JSON.stringify(userInputValue));

});


///////////// GETTING THE DATA FROM LOCAL STORAGE WHEN YOU REFRESH YOUR PAGE
function bringBack() {

    if (localTextOne != null || localTextOne != "") {
        var localTextOne = JSON.parse(localStorage.getItem("0"));
        $(".textMessage-0").attr("value", localTextOne);
    }

    if (localTextTwo != null || localTextTwo != "") {
        var localTextTwo = JSON.parse(localStorage.getItem("1"));
        $(".textMessage-1").attr("value", localTextTwo);
    }

    if (localTextThree != null || localTextThree != "") {
        var localTextThree = JSON.parse(localStorage.getItem("2"));
        $(".textMessage-2").attr("value", localTextThree);
    }

    if (localTextFour != null || localTextFour != "") {
        var localTextFour = JSON.parse(localStorage.getItem("3"));    
        $(".textMessage-3").attr("value", localTextFour);
    }

    if (localTextFive != null || localTextFive != "") {
        var localTextFive = JSON.parse(localStorage.getItem("4"));
        $(".textMessage-4").attr("value", localTextFive);
    }

    if (localTextSix != null || localTextSix != "") {
        var localTextSix = JSON.parse(localStorage.getItem("5"));
        $(".textMessage-5").attr("value", localTextSix);
    }

    if (localTextSeven != null || localTextSeven != "") {
        var localTextSeven = JSON.parse(localStorage.getItem("6"));
        $(".textMessage-6").attr("value", localTextSeven);
    }

    if (localTextEight != null || localTextEight != "") {
        var localTextEight = JSON.parse(localStorage.getItem("7"));
        $(".textMessage-7").attr("value", localTextEight);
    }

    if (localTextNine != null || localTextNine != "") {
        var localTextNine = JSON.parse(localStorage.getItem("8"));
        $(".textMessage-8").attr("value", localTextNine);
    }

}

bringBack();