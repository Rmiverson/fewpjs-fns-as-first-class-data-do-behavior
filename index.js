/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (str) => {
  let time = str.split(':')
  if (time[0] < 12) {
    return "Good Morning"
  } else if (time[0] > 12 && time[0] < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
const displayMessage = (str) => {
  document.querySelector('#greeting').innerText = str
}