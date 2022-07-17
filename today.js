var today = new Date();
let thisMonth = today.toLocaleString('default',{month: 'long'});
let thisDay = today.toLocaleString('default', {day: '2-digit'});
let thisYear = today.toLocaleString('default', {year: 'numeric'});
var tday = document.writeln("Today is " + thisMonth + " " + thisDay + ", " + thisYear);

var lastUpdated = new Date(document.lastModified);