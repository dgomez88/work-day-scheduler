var time = document.querySelector("#currentDay");

function currentDayTime() {
  var currentTime = moment();
  time.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:ss a");
}
currentDayTime();

$(".list-group").addClass("list-group-item");

