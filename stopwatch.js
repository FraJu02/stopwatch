const stopwatch = {hour_s:0, minute_s:0,second_s:0,milli_s:10};

function alertTime(){
    alert(stopwatch.hour_s);
    document.getElementById("minutes").innerHTML = 10;
    document.getElementById("milliseconds").innerHTML = stopwatch["milli_s"];
}