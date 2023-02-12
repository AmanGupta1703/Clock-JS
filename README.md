# JavaScript Clock
The code implements a simple JavaScript clock that displays the current time in hours, minutes and seconds. The time is displayed on the page with the class .time.

## setInterval()
The setInterval function is called every 1000 milliseconds (1 second) to update the clock. This function contains the code that retrieves the current time and formats it for display on the page.

## Getting the current time
The current time is retrieved using the JavaScript Date object and its getHours(), getMinutes(), and get seconds () methods. These methods are used to get the hours, minutes and seconds respectively of the current time.

## Formatting the time
The time retrieved from the Date object is then passed to the formatDate function to format it for display. The function returns a string in the format hours:minutes:seconds.

## Adding leading zeros
The addZero function is called to ensure that single digit hours, minutes, and seconds values are displayed with a leading zero. For example, a time of "9:5:3" would be displayed as "09:05:03".

## Displaying the time on the page
Finally, the formatted time string is displayed on the page using the document.querySelector method to find the element with the class .time, and the textContent property to set the text content of that element to the time string.

## Live Preview
[Clock JS](https://clock-j-project.netlify.app/)

## Conclusion
This code provides a simple implementation of a JavaScript clock that can be easily integrated into a website or web application to display the current time to the user.
