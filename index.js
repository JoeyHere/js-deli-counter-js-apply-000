
var current = 1

function takeANumber(line) {
 
  line.push(current);
  console.log (`Your ticket number is ${current}`)
  current = current+1
}


function nowServing(line) {
if (line.length > 0) {
  var currentTicket = line.shift()
  return `Currently serving ${currentTicket}.`}
  else {
  return "There is nobody waiting to be served!"}
}


function currentLine(line) {
var string = "The line is currently: "

for (var i = 0; i<line.length; i++)  {
  string = string + `${line[i]}, `
}

if (line.length === 0){
  return "The line is currently empty."
}
else {
  string = string.slice(0, -2);
  return string
}
}
