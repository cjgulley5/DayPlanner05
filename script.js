
setInterval(() => {
    const now =  moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm:ss a');

    time.textContent = humanReadable;    
}, 1000)

const time = document.getElementById("currentDay");


timeUpdate ();
    function timeUpdate(now) {
    var beginningTime = moment("9:00:00 am", "h:mm:ss a");
    var endingTime = moment("5:00:00 pm", "h:mm:ss a");

 if (moment(beginningTime).isBefore(now)){
        $("textarea").addClass("past");
    }
 else if (moment(endingTime).isAfter(now)){
      $("textarea").addClass("future");
  }
   
 else {
        $("textarea").addClass("present");
    }
    
    }