class DateTranslate {
  static getCurrentMonthName() {
    const date = new Date();
    const monthNumber = date.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[monthNumber];
  }
  static getCurrentDayName() {
    const date = new Date();
    const dayNumber = date.getDay();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[dayNumber];
  }
}
export default DateTranslate;
