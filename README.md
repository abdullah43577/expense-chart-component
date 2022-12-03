# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](<./design/Screenshot%20(20).png>)

### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/responsive-expense-chart-component-xXOP5o6ovC)
- Live Site URL: [Live site URL here](https://expensechartcomponents.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

For the first time ever, I used my first library coding a website. I used the chart.js library to render a chart based on some data I provided in my JSON code.

```js
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
```

### Useful resources

- [Resource](https://www.chartjs.org/) - This helped me render the chart on the webpage based on some data provided to the method used in the code. Still learning the concepts though.

## Author

- Website - [Abdullah Ayoola](https://github.com/abdullah43577)
- Frontend Mentor - [@abdullah43577](https://www.frontendmentor.io/profile/abdullah43577)
- Twitter - [@officialayo540](https://twitter.com/officialayo540)
