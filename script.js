
var now = dayjs(); // Get the current date and time
const currentHour = now.hour(); // Get the current hour (0-23)
var dayOfWeek = now.format('dddd'); // Gets the day of the week 
var month = now.format('MMMM'); // Gets the current month 
 dayOfMonth = now.date(); // Get the day of the month as a number

$('#currentDay').text(`${dayOfWeek} ${month} ${dayOfMonth}`); 
//combines the variables to display



$(function () {
  $(".saveBtn").on("click", function(){
 
  
  //targets .saveBtn class associated with the save buttons when clicked
 
 const val = $(this).siblings("textarea").val();
 //Gets the sibling element textarea's value and stores to val constant.

 const id = $(this).parent().attr("id");
 //sets the class value of the parent of the button element(div) and stores
 //the value in const id
localStorage.setItem(id, val);
// saves the value of the textarea in local storage by passing the values as
//arguments in the constants id and val

//console.log(id, val); 
}
  );
  
});
