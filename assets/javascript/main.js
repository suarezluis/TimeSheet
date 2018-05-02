// Initialize Firebase
// Initialize Firebase

var config = {
  apiKey: "AIzaSyC9bG0SRFi_EP6OdpbLLmNhmkzkdGjETCc",
  authDomain: "test-1a97c.firebaseapp.com",
  databaseURL: "https://test-1a97c.firebaseio.com",
  projectId: "test-1a97c",
  storageBucket: "test-1a97c.appspot.com",
  messagingSenderId: "318994914014"
};
firebase.initializeApp(config);
var database = firebase.database();
// declare global variables
var empName;
var empRole;
var empStart;
var empRate;
var newEmp;
var monthWorked;
var totalBilled;

// listener for submit

$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();
  alert("click");
  // Grabs user input
  empName = $("#employee-name-input").val().trim();
  empRole = $("#role-input")
    .val()
    .trim();
  empStart = $("#start-input").val().trim();
  empRate = $("#rate-input")
    .val()
    .trim();

  newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

  // Uploads employee data to the database
  database.ref().push(newEmp);

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");

  addRow()
  
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  empName = childSnapshot.val().name;
  empRole = childSnapshot.val().role;
  empStart = childSnapshot.val().start;
  empRate = childSnapshot.val().rate;

  // Employee Info
  console.log(empName);
  console.log(empRole);
  console.log(empStart);
  console.log(empRate);

  

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  

  // Calculate the total billed rate
 

  
  ;
});


function addRow(){
  $("#table").append(
    "<tr><td>" +
      empName +
      "</td><td>" +
      empRole +
      "</td><td>" +
      empStart +
      "</td><td>" +
      monthWorked +
      "</td><td>" +
      empRate +
      "</td><td>" +
      totalBilled +
      "</td><td>"
  )
}