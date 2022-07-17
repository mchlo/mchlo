var name1 = prompt("Please enter your name");

alert("Hi " + name1);

var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
   { greet = 'Good Morning ';}
else if (hrs >= 12 && hrs <= 17)
   { greet = 'Good Afternoon ';}
else 
   { greet = 'Good Evening ';}
var nextName = document.writeln(greet + name1)

document.getElementById("name").innerHTML = nextName;


