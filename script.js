// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock = document.getElementById("row time-block");
var textAreas = document.getElementById("savedtext");
var saveButton = document.getElementById("button");


$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

   var saveBtn = $("#btn save-1");
    saveBtn.on("click", function (event) {
      console.log(this);
      $(function (){
        var textAreas = $('#input["name="savedtext"]').val()
        textAreas.append("btn save-1");
      });
    });
    localStorage.setItem('savedtext', JSON.stringify(this));//setItem in order to save the key and value of specified
    console.log(localStorage);// check if its working 
    localStorage.getItem('savedtext');
    
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var now = dayjs()// variable to for the exact time
  dayjs('2023-05-03').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]') 
  dayjs('2023-05-03').format('DD/MM/YYYY')
  console.log(now)// logged it to see if it worked and it did
  
  var past = pastHour;
  
  function pastHour() {
    document.getElementById("col-8 col-md-10 description");
    Element.style.backgroundColor = "red";
  };
  console.log(past);

  var present = presentHour;

  function presentHour() {
    document.getElementById("col-8 col-md-10 description");
    Element.style.backgroundColor = "grey"
  };
  console.log(present);

  var future = futureHour;
  function futureHour() {
    document.getElementById("col-8 col-md-10 description");
    Element.style.backgroundColor = "green";
  };
  
  console.log(future);

  if(past < now) {
    
  }
  
  
  
  
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    //document.getElementById('savedtext').innerHTML = localStorage.getItem('savedtext');
    localStorage.getItem('savedtext');
    JSON.parse(localStorage.getItem('savedtext'));
    const saveArea = JSON.parse(localStorage.getItem('savedtext'));
    console.log(saveArea);
    
  
  //
  // TODO: Add code to display the current date in the header of the page.
  

});
