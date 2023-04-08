/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satueday"
];

export const monthNames = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export const getDate = function(dataUnix , timezone )  {
    const date = new Date((dateUnix + timezone ) * 1000 );
    const weekDayName = weekdayNames[data.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

export const getTime = function(timeUnix, timezone) {
    const date =  new Date((timeUnix + timezone ) * 1000 ) ;
    const hours  = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM"; 

    return `${hours % 12 || 12 }:${minutes} ${period}`;
}

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph/1000; 
}

export const aqiText = {
  1:{
    level: "Good",
    message: "Air Quality is considered satisfactory, and air pollution poses little or no risk"
  },
  2:{
    level: "Fair",
    message : "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
  },
  3:{
    level:"Moderate",
    message : " Members of sensitive groups may experience health effects. The general public is not likely to be affected."
  },
  4: {
    level:"Poor",
    message: "Air quality is acceptable , however, for some pollutants there may be a mdoerate health concern for a very small number of people who are unusally sensitive to air pollution."
  },
  5: {
    level: "Very Poor",
    message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
  }
}
