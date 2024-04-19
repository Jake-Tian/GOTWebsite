
/* This is the javasript page. */

// ======================================================================= 

// The javacript for index.html

/* 
When the mouse over the navigation link, its colour will slowly turn to Aqua. (Just like the colour of Night King's Army)
When the mouse leave the link, it will turn back to white.
This function is also applied in character.html (There is button class also)
*/ 
textElements = document.querySelectorAll(".button");    // Select all elements with "button" class and store them in an array
redValues = new Array(textElements.length).fill(255);   // In the RGB Model, Aqua is #00ffff, combined by only Green and Blue, no Red. 
      
textElements.forEach(function(textElements, index) {

  // The red value slowly decreases from 255 to 0
  textElements.addEventListener("mouseover", function() {
    var intervalId = setInterval(function() {
      redValues[index] -= 5;   // Decrease the red value by 100 every 50 milliseconds
      textElements.style.color = "rgb(" + redValues[index] + ", 255, 255)";
      if (redValues[index] < 5) {
        clearInterval(intervalId);
      }
    }, 50);
  });
    
  // Turn back to white when the mouse leaves
  textElements.addEventListener("mouseout", function() {
    redValues[index] = 255;
    textElements.style.color = "white";
  });
});


// Show the current time and date
function getCurrentDateTime() {

  now = new Date();
        
  // format time and date as string
  timeString = now.getHours().toString().padStart(2, "0") + ":" +
                now.getMinutes().toString().padStart(2, "0") + ":" +
                now.getSeconds().toString().padStart(2, "0");
  dateString = now.getDate().toString().padStart(2, "0") + "/" + 
                (now.getMonth()+1).toString().padStart(2, "0") + "/" + 
                now.getFullYear();
        
  // display time and date in HTML
  document.getElementById("clock").innerHTML = dateString + " " + timeString;

}

// call the function every second to update the time and date
setInterval(getCurrentDateTime, 1000);


// ======================================================================= 

// The javacript for characters.html

/*
This part is developed for the filter in the photo gallery. 
When different button is pressed, different photos with that property will be shown. 
*/
filterSelection("all")  // At the beginning, at the gallery will be shown

/*
This function will add the "show" class to the chonsen galleries
As defined in css, galleries without "show" class will not be displacyed. Only the galleries with "show" will be shown. 
*/
function filterSelection(c) {
  x = document.getElementsByClassName("gallery");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeShowClass(x[i]);
    if (x[i].className.indexOf(c) > -1) x[i].className += " show"
  }
}

/*
remove the the "show" class from the element
*/
function removeShowClass(element) {
  arr1 = element.className.split(" ");
  while (arr1.indexOf("show") > -1) arr1.splice(arr1.indexOf("show"), 1);     
  element.className = arr1.join(" ");
}


/*
Add "active" class to the current button.
In css, the color of the button will be changed if this active. 
*/
buttons = document.getElementsByClassName("selection");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    current = document.getElementsByClassName("active");
    if (current.length>0) current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function togglePrintMode() {
  var element = document.body;
  element.classList.toggle("print");
  element.classList.remove("dark");

  filterSelection("all");
}


function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark");
}



// ======================================================================= 

// The javacript for stark.html (Image Map)

/*
Pop when alert window before jump to another page.
You can set the message of the window
*/
function alertWindow(p) {
    alert ("You are going to jump to the " + p + " Stark Page");
}


/*
Highlight the area of the image map when the mouse over it
*/
function highlightArea(area) {
  area.classList.add("highlight");
}


/*
Restore the area when the mouse leaves
*/
function resetArea(area) {
  area.classList.remove("highlight");
}



