"use strict";
import jsonData from "./data.json" assert { type: "json" };
const barChart = document.getElementById("barChart__Image");

let day = [];
let amount = [];

// looping through the array of objects and then pushing each respective values to the arrays as needed
jsonData.forEach((data) => {
  // console.log(data);
  day.push(data.day);
  amount.push(data.amount);
});

Chart.defaults.font.family = "DM Sans";
const result = new Chart(barChart, {
  type: "bar",
  data: {
    labels: day,
    datasets: [
      {
        label: "# of Spending",
        data: amount,
        borderWidth: 1,
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
