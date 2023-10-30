// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



//var currentHour = moment().hour();
var hours = [9,10,11,12,13,14,15,16,17]
var timeBlockEL = document.querySelector('.container');
var saveButton = $('.saveBtn');

var timeDisplayEl = $('#timeDisplay');

saveButton.on('click', function () {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(time, text);
  console.log(this);
});

function currentHour() {
  for (var i = 0; i < hours.length; i++) {
    var currentHour = $("#" + hours[i])
  }
  var time = dayjs().hour();
    if (time > hours[i]) {
      currentHour.addClass('past');
    }
    else if (time === hours[i]) {
    currentHour.removeClass('past');
    currentHour.removeClass('future');
    currentHour.addClass('present');
    }
    else if (time < hours[i]) {
    currentHour.removeClass('past');
    currentHour.addClass('future');
    currentHour.removeClass('present');
    }};
  

currentHour();


function displayDate() {
  var now = dayjs().format('MMMM DD, YYYY')
 timeDisplayEl.text(now);
};
displayDate();

$('#8 .description').val(localStorage.getItem('hour8'));
$('#9 .description').val(localStorage.getItem('hour9'));
$('#10 .description').val(localStorage.getItem('hour10'));
$('#11 .description').val(localStorage.getItem('hour11'));
$('#12 .description').val(localStorage.getItem('hour12'));
$('#13 .description').val(localStorage.getItem('hour13'));
$('#14 .description').val(localStorage.getItem('hour14'));
$('#15 .description').val(localStorage.getItem('hour15'));
$('#16 .description').val(localStorage.getItem('hour16'));
$('#17 .description').val(localStorage.getItem('hour17'));

function refresh() {
for (i = 9; i < 18; i++) {
  $('#' + [i] + ' .description').val(localStorage.getItem([i]));
}
};
refresh();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  