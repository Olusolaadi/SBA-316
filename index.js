/* SBA 316: The Document Object Model */

// Cache at least one element using selectElementById.
function myCareer() {
  var x = document.getElementById("mycareer").innerHTML;
  document.getElementById("demo").innerHTML = x;
  
}

// Create at least one element using createElement.
//  On the new element, add an href attribute with its value set to the href property of the "link" object. 
function myCourse() {
  var y = document.createElement("nav"); 
  document.body.appendChild(y);
  var anchorElmnt = document.createElement("a");
  anchorElmnt.setAttribute(href="href", "/html");
  var txt1 = document.createTextNode("DOM");
  anchorElmnt.appendChild(txt1);
  y.appendChild(anchorElmnt);

}

function myclick() {
  document.getElementById("checkbox").click();
}

// Cache at least one element using querySelector or querySelectorAll.
function myInfo() {
  var z = document.getElementById("app");
  z.querySelector(".about").innerHTML = "This page is a little about me.";
}

// Use at least two Browser Object Model (BOM) properties or methods.
document.getElementById("width").innerHTML = "Screen width is " + screen.width;
document.getElementById("height").innerHTML = "Screen height is " + screen.height;
document.getElementById("location").innerHTML = "The full URL of this page is:<br>" + window.location.href;

// Register at least two different event listeners and create the associated event handler functions.
document.addEventListener("click", welcome);
function welcome() {
  document.getElementById("hi").innerHTML = '<h2>"You are welcome to this page."</h2>';
}
document.getElementById("myBtn").addEventListener("click", displayDate);

// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
function displayDate() {
  document.getElementById("date").innerHTML = Date();
}

//Include at least one form and/or input with HTML attribute validation.
function number() {
  // Get the value of the input field with id="numb"
  let n = document.getElementById("numb").value;
  // If n is not a Number or less than one or greater than 5
  let text;
  if (isNaN(n) || n < 1 || n > 5) {
    text = "Invalid input";
  } else {
    text = "Input OK";
  }
  document.getElementById("no").innerHTML = text;
}

// Iterate over a collection of elements to accomplish some task.
function funFacts() {
  const funFacts1 = document.getElementsByTagName("ul");
  for (let i = 0; i < funFacts1.length; i++) {
    funFacts1[i].style.color = "gold";
  }
}

// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
function vacation(id) {
  id.innerHTML = "Hawaii";
}

function genre(id) {
  id.innerHTML = "Classical Music";
}

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
function relationship() {
  const list = document.getElementById("myList");
  if (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
}









