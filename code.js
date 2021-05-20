function countdownTimer() { //sets a function named countdownTimer, which will run whenever the 'Start' button is clicked
    console.log("countdownTimer function run"); //for debugging purposes
    var currTime = 50; //sets the current time variable to 50 seconds
    document.getElementById("countdownStatus").innerHTML=currTime; //displays the variable currTime to the countdownStatus div
    currTime = currTime - 5 //subtracts 5 seconds from the currTime var, for the next time increment
    //time for 45
    setTimeout(function(){ //creates new function for the set
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime; //changes the contents of countdownStatus to reflect new currTime
        currTime = currTime - 5; //subtracts 5 seconds from currTime var, for next time increment
        console.log("Changed time to 45 seconds"); //for debugging purposes
    }, 5000) //waits 5 seconds (5000 ms) before executing the function
    
    //timer for 40 - same syntax from above function applies to all the following functions
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 40 seconds");
    }, 10000)
    
    //timer for 35
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 35 seconds");
    }, 15000)
    
    //timer for 30
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 30 seconds");
    }, 20000)
    
    //timer for 25
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 25 seconds");
    }, 25000)
    
    //timer for 20
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 20 seconds");
    }, 30000)
    
    //timer for 15
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 15 seconds");
    }, 35000)
    
    //timer for 10
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 10 seconds");
    }, 40000)
    
    //timer for 5
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        console.log("Changed time to 5 seconds");
    }, 45000)
    
    //timer for 0
    setTimeout(function(){
        //stuff in here happens after timeout
        document.getElementById("countdownStatus").innerHTML = "Blast Off!!";
        console.log("Changed to Blastoff!!"); //instead of doing anything the countdown, the status changes to 'Blast Off!!'
        document.body.background = "https://i.pinimg.com/originals/a7/12/3a/a7123a124ba35c74c421e1678e2bb677.gif"; //sets the background image as a rocket blast-off GIF
    }, 50000)
}