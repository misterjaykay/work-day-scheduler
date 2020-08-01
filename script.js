
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



////////////// BUSINESS HOURS //////////
var allHourList = ["09:00AM", "10:00AM", "11:00AM", "12:00PM", "01:00PM", "02:00PM", "03:00PM", "04:00PM", "05:00PM"];

for (var i = 0; i < allHourList.length; i++) {
    
    console.log(allHourList[i]);

    var tRow = $("<tr>").attr("data-hour", i);
    var tBody = (".tbody");
    $(tBody).append(tRow);
    var timeDiv = $("<th>").text(allHourList[i]).attr("scope", "row").attr("style", "text-align: center;");
    var messageDiv = $("<td>").html("<input class='textMessage-" + i + "' size='100' type='text' data-input='" + i + "' >");
    var buttonDiv = $("<td>").html("<input class='submit-button' data-value='" + i + "' type='button' value='submit' >").attr("style", "text-align: center;")
    // AT BUTTONDIV, REMOVED BOTTOM LINE
    // .addClass("submit-button-" + i);
    
    $(tRow).prepend(timeDiv, messageDiv, buttonDiv);
    $(tBody).append(tRow);
    
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

///////// USING FUNCTION TO BRING BACK DATA
// function bringBack() {
//     var localText = JSON.parse(localStorage.getItem("test"));
//     $(".textMessage-1").attr("value", localText);
//     console.log(localText);
// }

function bringBack() {

    if (localStorage.getItem("textRowOne") == null) {
    var localTextOne = JSON.parse(localStorage.getItem("textRowOne"));
        $(".textMessage-0").attr("textRowOne", localTextOne);
        console.log(localTextOne);
    }

    var localTextTwo = JSON.parse(localStorage.getItem("textRowTwo"));
        $(".textMessage-1").attr("textRowTwo", localTextTwo);

    var localTextThree = JSON.parse(localStorage.getItem("textRowThree"));
        $(".textMessage-2").attr("textRowThree", localTextThree);

    var localTextFour = JSON.parse(localStorage.getItem("textRowFour"));    
        $(".textMessage-3").attr("textRowFour", localTextFour);

    var localTextFive = JSON.parse(localStorage.getItem("textRowFive"));
        $(".textMessage-4").attr("textRowFive", localTextFive);

    var localTextSix = JSON.parse(localStorage.getItem("textRowSix"));
        $(".textMessage-5").attr("textRowSix", localTextSix);

    var localTextSeven = JSON.parse(localStorage.getItem("textRowSeven"));
        $(".textMessage-6").attr("textRowSeven", localTextSeven);

    var localTextEight = JSON.parse(localStorage.getItem("textRowEight"));
        $(".textMessage-7").attr("textRowEight", localTextEight);

    var localTextNine = JSON.parse(localStorage.getItem("textRowNine"));
        $(".textMessage-8").attr("textRowNine", localTextNine);

        console.log(localText);
}

///////// FUNCTION TO SAVE DATA INTO LOCALSTORAGE
// function storeTodos() {
//     localStorage.setItem("test", JSON.stringify(submitText));
//     alert("string")
// }



