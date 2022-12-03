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

console.log(day);
console.log(amount);

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let answer = 0;
const resultaccumulator = testArray.reduce((acc, value) => acc + value, 0);

console.log(resultaccumulator);

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
