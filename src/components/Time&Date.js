//let weathercon = document.getelementById("weathercon");

const tempStatus = "clouds";

const getCurrentDay = () => {
  var days = [
    "Monday , ",
    "Tuesday , ",
    "Wednesday , ",
    "Thursday , ",
    "Friday , ",
    "Saturday , ",
    "Sunday , ",
  ];

  let CurrentTime = new Date();
  let Today = days[CurrentTime.getDay() - 1];
  return Today;
};

const getCurrentTime = () => {
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var now = new Date();
  var month = month[now.getMonth() + 1];
  var date = now.getDate();

  let hours = now.getHours();
  let mins = now.getMinutes();

  let period = "AM";

  if (hours > 11) {
    period = "PM";
  }
  if (hours > 12) {
    hours -= 12;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  return ` ${date} ${month} | ${hours} : ${mins} ${period}`;
};

export { getCurrentDay, getCurrentTime };
