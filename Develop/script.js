// Uploading JQUery
$(document).ready(function(){


    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

    //Load any saved events from local storage.
    var events = JSON.stringify(localStorage.getItem("events")) || [];


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //Times for the elements created

  var startHour = 9; // 9AM
  var endHour = 17; // 5PM


  //Loop for creating the temporal elements
  for (let time = startHour; time <= endHour; time++) {
  

  //Create time element row
  var timeEl = document.createElement("div");
  timeEl.classList.add("time-block");
  timeEl.setAttribute("id", hour);


  //Create the hour label
  var hour = document.createElement("label");
  hour.classList.add("hour");
  hour.textContent = dayjs(hour, "H" ).format("hA");


  //Create the Description elemenet for event entry
var Description = document.createElement("textarea");
Description.classList.add("description");

  //Create the save button
    var saveBtn = document.createElement("button");
    saveBtn.classList.add(".saveBtn");
    saveBtn.textcontent = "Save";

    //Add the whole container to the DOM
    timeEl.append(hour, description, saveButton);

    // Append the time block to the container
  $(".container").append(timeEl);


  };

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function timeUpdate(){
  var currentHour = dayjs().hour(); 

  //Need reference to the time blocks to be able to identify what we are comparing
  $('.time-block').each(function() {

    //Define the blockHour to compare to the current time
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    if(blockHour < currentHour) {
      //past
      $(this).addClass('past');

    } else if (blockHour === currentHour) {
      //present
      $(this).addClass('present');
      
    } else {
      //future
      $(this).addClass('future');
    }


  })
  }
  timeUpdate();

  //Update check
  setInterval(timeUpdate, 10000);
  
  //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  
  
    // Save event data to local storage when save button is clicked
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    events[hour] = description;
    localStorage.setItem("events", JSON.stringify(events));
  });
  
  
    //Need reference for IDs 
  /* textarea,   .description,  .time-block,  .row, .hour, .past, .present, .future,
    .saveBtn,  .saveBtn i:hover
  */
});