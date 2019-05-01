
var currentDate = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var weirdEnglishQualifier = "th";

var dateStr = currentDate.getDate().toString();

if(dateStr.endsWith("1"))
    weirdEnglishQualifier = "st";
else if(dateStr.endsWith("2"))
    weirdEnglishQualifier = "nd";
else if(dateStr.endsWith("3"))
    weirdEnglishQualifier = "rd";

console.log("Today is " + days[currentDate.getDay() - 1] + ", " + dateStr + weirdEnglishQualifier + " of " + months[currentDate.getMonth()] + " " + (currentDate.getYear() + 1900));