const stopwatch = {hour_s:0,
     minute_s:0,
     second_s:0,
     milli_s:10,
     sum: function() {return this.minute_s + " " + this.second_s;}};

     let timer;

function alertTime(){
    document.getElementById("minutes").innerHTML = 10;
    startButton();
}

function changeText(){
    alert("AHHH");
}

function startButton(){
    timer = setInterval(countUp, 10);
}

function stopButton(){
    clearInterval(timer);
}

function countUp(){
    
    if(stopwatch.milli_s > 900)
    {
        stopwatch.milli_s = 0;
        stopwatch.second_s += 1;
    }
    if(stopwatch.second_s >= 59)
    {
        stopwatch.second_s = 0;
    }
    if(stopwatch.milli_s < 100)
        document.getElementById("milliseconds").innerHTML = "0" + (stopwatch["milli_s"] / 10);
    else
        document.getElementById("milliseconds").innerHTML = (stopwatch["milli_s"] / 10);
    if(stopwatch.second_s < 10)
        document.getElementById("seconds").innerHTML = "0" + stopwatch["second_s"];
    else
        document.getElementById("seconds").innerHTML = stopwatch["second_s"];
    stopwatch.milli_s += 10;
}