// Declare moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

// Set hourly increments
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");

var hour = moment().hours();
var userInput;
var hourSpan;

// Get current date and hour
var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

//Display items for each hourly increment
function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("9:00 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("1:00 pm"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("2:00 pm"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("3:00 pm"))
  threePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("4:00 pm"))
  fourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("5:00 pm"))
  fivePm.val(init5);
  
} 

//Change background colors based on hourly increments
function background () {      
  $(".form").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      var hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  // save form to localStorage
  $(".saveButton").on("click", function(){
    userInput = $(this).siblings(".form").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

  // Clear schedule
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});