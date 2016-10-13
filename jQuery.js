jQuery Basics Overview
----------------------

Prerequisite Treehouse Courses

JavaScript Basics // https://teamtreehouse.com/library/javascript-basics Done
JavaScript Loops, Arrays and Objects // https://teamtreehouse.com/library/javascript-loops-arrays-and-objects Done

Further Reading

Why jQuery is the Most Popular JavaScript Library // http://blog.teamtreehouse.com/jquery-popular-javascript-library
What is Unobtrusive JavaScript and Why it’s Important? // http://blog.teamtreehouse.com/unobtrusive-javascript-important

------------------
  What is jQuery
------------------
Further Reading
Beginner’s Guide to jQuery //http://blog.teamtreehouse.com/beginners-guide-to-jquery

Documentation
.hide() //http://api.jquery.com/hide/
.show() //http://api.jquery.com/show/

$(".warning").hide().show("slow");

                                                                --------------------------------
                                                                  The 4 P's of Problem Solving 
                                                                --------------------------------
-----------------
  - Preparation
-----------------  
//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

----------
  - Plan
----------
//1. Hide spoiler
//2. Add a button
//3. When button pressed
  //3.1 Show spoiler
  //3.2 Get rid of button

-------------
  - Perform
-------------
//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When button pressed
$(".spoiler button").click(function(){ //pass an unnamed function to click() that shows the span, then removes the button from the DOM. // we use click(function(){INFO HERE})
  //3.1 Show spoiler
  $(".spoiler span").show();
  //3.2 Get rid of button
  $(this).remove(); // because we are clicking on a specific button - we can use $(this) instead of $(".spoiler button")
}); //.remove() removes an object from the DOM.

-------------------
  - Perfect/(ing)
-------------------

$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When button pressed
$(".spoiler button").click(function(){
  //3.1 Show spoiler next to the button clicked
  $(this).prev().show(); // $(this) selects the button because of $(".spoiler button"), prev() selects the previous element (the span), & .show() shows that element.
  //3.2 Get rid of button
  $(this).remove();
});

//For reference:
/*
<!DOCTYPE html>

<html>
<head>
  <title>Star Wars Spoilers</title>
  <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
</head>
<body>
  <img src="img/deathstar.png" />
  <p class="spoiler">
    <!--Spoiler:-->
    <span>Darth Vader is Luke Skywalker's Father! Noooooooooooo!</span>
  </p>
    <p class="spoiler">
    <!--Spoiler:-->
    <span>Luke and Lei are siblings. Ew LUL</span>
  </p>
  <script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/app.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>

*/

                                                                -------------------
                                                                  Useful Keywords 
                                                                -------------------
------------
  .attr();  //http://api.jquery.com/attr/
------------

Setting a simple attribute

To change the alt attribute, simply pass the name of the attribute and its new value to the .attr() method:

$( "#greatphoto" ).attr( "alt", "Beijing Brush Seller" );
Add an attribute the same way:

$( "#greatphoto" ).attr( "title", "Photo by Kelly Clark" );
Setting several attributes at once

To change the alt attribute and add the title attribute at the same time, pass both sets of names and values into the method at once using a plain JavaScript object. 
Each key-value pair in the object adds or modifies an attribute:

Example:
$( "#greatphoto" ).attr({
  alt: "Beijing Brush Seller",
  title: "photo by Kelly Clark"
});

$( "img" ).attr({
  src: "/resources/hat.gif",
  title: "jQuery",
  alt: "jQuery Logo"
});
$( 

----------------------------------------------------------------------------------------

//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

  // A caption

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update overlay with the image linked in the link
  $image.attr("src", imageLocation); 
  
  // Show the overlay
  $overlay.show();
  
  // Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});



// When a overlay is clicked
$overlay.click(function() {
  // Hide the overlay
  $overlay.hide();
});
------------------------------------------------------------------------------------------------

                                                                ----------------------
                                                                  GETTERS VS SETTERS
                                                                ----------------------

Getters - do NOT input value

.val(); 

Setters - input value

.val(value);
.val(function(index, value)); // https://api.jquery.com/val
{}

-------------------------------------------------

Example Code:

//Select the input for the title for blog post.
var $titleInput = $("#title");

//Select the preview h1 tag
var $previewTitle = $("#titlePreview");

// Every second update the preview
var previewTimer = setInterval(updatePreview, 1000);

function updatePreview(){  
  //Get the user's input
  var titleValue = $titleInput.val();
  //Set the user input as the preview title. 
  $previewTitle.text(titleValue);
};

/*
<div id="form">
    <label for="title">Blog Post Title</label><input id="title" name="title" value="" placeholder="Enter your blog title here">
  </div>
  <div id="preview">
    <h1 id="titlePreview"></h1>
  </div>
*/


----------------------------------------------------

Example Project Code:

//Problem: It looks gross in smaller browser widths and small devices
//Solution: Hide the text links and swap them out with a more appropriate navigation.

//Create a select and append to #menu
var $select = $("<select></select>"); // creates a var to the DOM called $select with the value $("<select></select>")
$("#menu").append($select);           // adds this to the <div> with the ID "menu"

//Cycle through menu links
$("#menu a").each(function(){         // selects the anchor tag in #menu and .each cycles through each one (runs all the code on the 1st one, then goes to the 2nd one etc.)
  var $anchor = $(this);              // creates a var called $anchor with the value of the selected <a>-tag.
 //Create an option
  var $option = $("<option></option>"); // creates a var to the DOM called $option with the value of $("<option></option>")

  //Deal with selected options depending on current page // this stops the drop down arrow from selecting the first one "Home" each time.
  if($anchor.parent().hasClass("selected")) {  //Note: you don't use ".selected" even though it's a class because ".hasClass" is telling you it's a class.
    $option.prop("selected", true); // .prop(propertyName, value) 
  }                                 // GETTER: .prop(propertyName) --- SETTER: .prop(propertyName, value), .prop(properties) or .prop(propertyName, function)

/*
explaining this ^^^: Each page (faqs.html, index.html, about.html etc.) all have the class="selected" for their specific one.
So faqs.html is:
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="support.html">Support</a></li>
      <li class="selected"><a href="faqs.html">FAQs</a></li> // THIS LINE HAS class="selected"
      <li><a href="events.html">Events</a></li>

events.html is:
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="support.html">Support</a></li>
      <li><a href="faqs.html">FAQs</a></li>
      <li class="selected"><a href="events.html">Events</a></li> // THIS LINE HAS class="selected"

index.html is:      
      <li class="selected"><a href="index.html">Home</a></li> // THIS LINE HAS class="selected"
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="support.html">Support</a></li>
      <li><a href="faqs.html">FAQs</a></li>
      <li><a href="events.html">Events</a></li>
etc.

  So the function checks if the parent to the <a> tag has the class "selected". If yes - change $option.prop "selected" to true.

  Note: "selected" in  if($anchor.parent().hasClass("selected")) {} IS NOT THE SAME AS "selected" in $option.prop("selected", true);

  The first one is a class name.
  The second one is a property of <option selected="true"> i.e. it is selected currently.

SO THE FUNCTION makes the drop down menu say "Support" in the drop down menu when you're on the /support.html page.
*/
  //Option's value is the href      
  $option.val($anchor.attr("href")); // adds the $anchor's attribute "href" (about.html / contact.html etc.) into <option value="HERE"></option>
  //Option's text is the text of link
  $option.text($anchor.text());      // adds the $anchor's text into the <option>HERE</option>
  //append option to select
  $select.append($option);           // adds all the info in "<option value="$anchor's href">$anchor's text</option>" to <select></select>
});                                  // so first one would be "<select><option value="index.html">Home</option></select>" (I think :D)
//Create a button
var $button = $("<button>Go</button>"); // creates a var to the DOM button with the words "Go" inside.
$('#menu').append($button);          // adds the button to the <div> with the ID of "menu".
//Bind click to button
$button.click(function(){            // registers when the button is clicked and creats an unnamed function that:
  //Go to select's location
  window.location = $select.val();   // makes the window's location change to $select's value i.e. the"index.html" in <select><option value="index.html">Home</option</select>.
});


----------- A better way to do the last section -------------

//Bind a change listener to the select

$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});


/*
  <div id="menu">
    <ul>
      <li class="selected"><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="support.html">Support</a></li>
      <li><a href="faqs.html">FAQs</a></li>
      <li><a href="events.html">Events</a></li>
    </ul>
  </div>
*/
------------------------
  SELECT HTML PROPERTY
------------------------
/*
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/

-------------------
  CSS MEDIA QUERY
-------------------
/*

//Modify CSS to hide links on small widths and show button and select
//Also hides select and button on larger widths and show links

@media (min-width: 320px) and (max-width: 568px) {
  #menu ul {
    display: none;
  }
}

@media (min-width: 568px) {
  #menu select, #menu button {
    display: none;
  }
}
*/
---------------------------------------------------------------------------
New Problem:
------------

//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function passwordEvent(){
   //Find out if password is valid
    if($password.val().length > 8) {
      //Hide hint if valid
      $password.next().hide();
    } else {
    //Else show hint
      $password.next().show();
    }  
}

function confirmPasswordEvent() {
//Find out if password and confirmation match
  if($password.val() === $confirmPassword.val()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
   //Else show hint
    $confirmPassword.next().show();
  }
}

//When event happens on password input

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);



Perfecting IT NOW:

//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//Hide hints
$("form span").hide();

function isUsernamePresent() {
  return $username.val().length > 0;
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
    //Find out if password is valid  
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint 
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}


function usernameEvent() {
  if(isUsernamePresent()) {
    $username.next().hide();
  } else {
    $username.next().show();
  } 
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

//HTML:
/*
<form action="#" method="post">
    <p>
      <label for="username">Username</label>
      <input id="username" name="username" type="text">
    </p>
    <p>
      <label for="password">Password</label>
      <input id="password" name="password" type="password">
      <span>Enter a password longer than 8 characters</span>
    </p>
    <p>
      <label for="confirm_password">Confirm Password</label>
      <input id="confirm_password" name="confirm_password" type="password">
      <span>Please confirm your password</span>
    </p>
    <p>
      <input type="submit" value="SUBMIT" id="submit">
    </p>
  </form>

  */

  ---------------------------------------------------------------------------
    NEXT PROJECT
  ---------------------------------------------------------------------------

  //Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d"); //document.getElementsByTagName("canvas")[0].getContext("2d"); 
//this grabs the first element in the array of canvas elements (i.e. there is only 1 canvas element - so it grabs it.
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected"); //selects all the siblings (but not this one - and removes the class "selected"
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When "New Color" is clicked
$("#revealColorSelect").click(function(){
  //Show color select or hide color select
  changeColor();
  $("#colorSelect").toggle();
});
    //update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//When color sliders change
$("input[type=range]").on("input", changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select the new color
  $newColor.click();
});


//On mouse events on the canvas
$canvas.mousedown(function(e){
lastEvent = e;
mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  context.strokeStyle = color;
  lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){ //stops you from drawing when you exit the canvas
  $canvas.mouseup();
});

/*
<body>
  <canvas width="600" height="400"></canvas>
  <div class="controls">
    <ul>
      <li class="red selected"></li>
      <li class="blue"></li>
      <li class="yellow"></li>
    </ul>
    <button id="revealColorSelect">New Color</button>
    <div id="colorSelect">
      <span id="newColor"></span>
      <div class="sliders">
        <p>
          <label for="red">Red</label>
          <input id="red" name="red" type="range" min=0 max=255 value=0>
        </p>
        <p>
          <label for="green">Green</label>
          <input id="green" name="green" type="range" min=0 max=255 value=0>
        </p>
        <p>
          <label for="blue">Blue</label>
          <input id="blue" name="blue" type="range" min=0 max=255 value=0>
        </p>
      </div>
      <div>
      <button id="addNewColor">Add Color</button>
      </div>
    </div>
  </div>
  <script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="js/app.js" type="text/javascript" charset="utf-8"></script>  
</body>
*/

                                                                  ------------------
                                                                    jQuery Plugins
                                                                  ------------------


Resources
~~~~~~~~~
- jQuery //https://jquery.com/

---------------------------------------------

Examples
~~~~~~~~
- jCalculator //http://codepen.io/mariusbalaj/pen/bGqhI
- jQuery Adaptive Modal //http://www.thepetedesign.com/demos/adaptive-modal_demo.html
- jQuery ListNav //http://ericsteinborn.com/jquery-listnav
- Vide //http://vodkabears.github.io/vide/
- Lightbox 2 //http://lokeshdhakar.com/projects/lightbox2/
- jQuery UI //https://jqueryui.com/

-----------------------
  How to Find Plugins
-----------------------
What to look for:
- A Plugin that does what you need
- Good Documentation
- Actively developed
- Responsive friendly
- Mobile friendly


Resources
~~~~~~~~~
- Popular jQuery Plugins List //http://www.sitepoint.com/jquery-popular-plugins-list/
- Unheap //http://www.unheap.com/

---------------------------------------------

Related Treehouse Videos
~~~~~~~~~~~~~~~~~~~~~~~~~
- Responsive Layouts Course //https://teamtreehouse.com/library/responsive-layouts

----------------
  Plugin Files
----------------
Most plugins contain the following:
- A CSS file
- A JavaScript file
- Images
- 

Resources
~~~~~~~~~
- jQuery //https://jquery.com/
- Animsition Plugin Demo //http://git.blivesta.com/animsition/
- Animsition Github Repository //https://github.com/blivesta/animsition

Setting up The Plugin:

1 - Attach the CSS file // link the plugin first - then your own CSS. That way your custom CSS will override the plugin's CSS.
2 - Attach jQuery // needs to load prior to any code you write
3 - Attach the plugin JavaScript file
4 - Structure your HTML //<div class="animstion"></div>
5 - Add your own JavaScript // link to it externally
6 - Select an element on the page using jQuery // can find in the plugin's documentation
7 - Call the plugins function // e.g. <script> $("animstion").animsition(); </script>
{}

Most plugins are highly customizable. You can control how they look, how they behave and what they do simply by passing an object literal full of settings.

------------
  Stickyjs
------------
Resources
~~~~~~~~~
- Stickyjs Demo //http://stickyjs.com/
- Stickyjs Github Repository //https://github.com/garand/sticky

Related Treehouse Videos
~~~~~~~~~~~~~~~~~~~~~~~~
- CSS - Beyond the Basics Course //http://teamtreehouse.com/library/css-beyond-the-basics
- Transition Basics //https://teamtreehouse.com/library/css-beyond-the-basics/understanding-css-transitions-and-transforms/transition-basics

jQuery Events
~~~~~~~~~~~~~

Resources
~~~~~~~~~~
jQuery Events //http://learn.jquery.com/events/
Custom Events in jQuery //https://learn.jquery.com/events/introduction-to-custom-events/

                                                    ----------------
                                                      Slick Plugin
                                                    ----------------

Resources
~~~~~~~~~
Slick Plugin Site //http://kenwheeler.github.io/slick/
Slick Plugin Github Repository //https://github.com/kenwheeler/slick/

Related Treehouse Courses
~~~~~~~~~~~~~~~~~~~~~~~~~
Sass Basics //http://teamtreehouse.com/library/sass-basics
CSS to Sass //http://teamtreehouse.com/library/css-to-sass

Most jQuery plugins provide two ways to change the appearance of whatever the plugin does. 
Sometimes the plugin offers display settings that you can change as part of the configuration object. 
Other times a plugin's look and feel are dictated by the CSS file.' 

Generated Content
~~~~~~~~~~~~~~~~~
Pseudo-Elements: ::before and ::after //https://teamtreehouse.com/library/css-selectors/advanced-selectors/pseudoelements-before-and-after


HTML:
~~~~~
//In the <head>: 
<link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/normalize.min.css">
<link rel="stylesheet" type="text/css" href="js/slick/slick.css"> //initial slider styles
<link rel="stylesheet" type="text/css" href="js/slick/slick-theme.css"> //additional styles go after
<link rel="stylesheet" type="text/css" href="css/main.css"> //my own styles - make custom changers here in case you need to update the two styles above this.

//In the <body>:
<div class="slides">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
  <div>Slide 4</div>
  <div>Slide 5</div>
  <div>Slide 6</div>
  <div>Slide 7</div>
  <div>Slide 8</div>
  <div>Slide 9</div>
  <div>Slide 10</div>
  <div>Slide 11</div>
  <div>Slide 12</div>
</div>

//just before the end of </body>:
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script> 
<script type="text/javascript" src="js/slick/slick.min.js"></script> //plugin uses jQuery hence jQuery first
<script type="text/javascript" src="js/main.js"></script> //placed after plugin

{}


main.js:
~~~~~~~~
$('.slides').slick({
  dots: true, //note you use commas here NOT semi-colons
  slidesToShow: 4, //again use , not ;
  slidesToScroll: 4 //no comma here as it's the last one in the list.
});


CSS:
~~~~
/* Slick Styling */
.slick-dots li button::before {
  font-size: 16px;
  color: white;
  opacity: 0.4;
}


.slick-dots li.slick-active button:before {
  color: white;
}


                                                    -----------------------------------
                                                      Debugging: When Plugins Collide
                                                    -----------------------------------

Look at z-index! Items with a higher z-index will appear on top. //z-index only works on absolute, relative and fixed position elements.

/* When you add more than one plugin to a site, you may run into problems -- 
the two plugins might interact in ways you didn't expect.' 
That's the case with the sticky nav and the carousel plugins.' 
Unfortunately, there can be multiple reasons why plugins don't work well together.' */
Resources
~~~~~~~~~
CSS Almanac: z-index //https://css-tricks.com/almanac/properties/z/z-index/
z-index Information on the Mozilla Developer Network //https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

Related Treehouse Videos
~~~~~~~~~~~~~~~~~~~~~~~~
Fixed Positioning //https://teamtreehouse.com/library/css-layout-techniques/positioning-schemes/fixed-positioning