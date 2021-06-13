var time = document.querySelector("#currentDay");

function currentDayTime() {
  var currentTime = moment();
  time.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:ss a");
}
currentDayTime();

$(".list-group").on("click", "p", function () {
  var text = $(this).text().trim();

  var textInput = $("<textare>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);
});

var saveTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  if (!tasks) {
    tasks = {
      nineAm: [],
      tenAm: [],
      elevenAm: [],
      twelveAm: [],
      onePm: [],
      twoPm: [],
      threePm: [],
      fourPm: [],
      fivePm: [],
    };
  }
};
