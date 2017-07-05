/*Tar 1 */
var i;
var myText = "";
var a;
for (i=120; i < 141; i++) {
    console.log("the current number " + i);
}

/*Tar 2 */
var i;
myString = "*";
for (i=1; i < 6; i++) {
    console.log(myString);
    myString += "*";
}

myString = "**********";
for (i=1; i < 11; i++) {
    console.log(myString.slice(-i));
}

/*Tar 3 */
var students = [
    {name: "A", height: 170},
    {name: "B", height: 171},
    {name: "C", height: 172},
    {name: "D", height: 173},
    {name: "E", height: 174}
]

for (i=0; i < students.length; i++) {
    myText += students[i].height + "<br>";
}

console.log(myText);

/*Tar 4 */
for (i=0; i < students.length; i++) {
    students[i].height = 175;
}

myText = "";
for (i=0; i < students.length; i++) {
    myText += students[i].height + "<br>";
}

console.log(myText);
document.getElementById("demo1").innerHTML = myText;
