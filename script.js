"use strict";
const barChart = document.getElementById("barChart__Image");

// converting the json data into readable format
let day = [];
let amount = [];

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((data) => {
      day.push(data.day);
      amount.push(data.amount);
    });
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
