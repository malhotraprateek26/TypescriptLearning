
enum Days
{
    SUN = 100,
    MON,
    TUE, 
    WED,
    THU,
    FRI,
    SAT
}

var day : Days = Days.MON;

day = Days.MON;

if(day == Days.MON)
{
    console.log("Need to go to work!");
}
else if(day == Days.FRI)
{
    console.log("Last day of the WEEEEK!!!");
}