/*Tar 1 */
var num1 = 11;
var num2 = 22;
if (num1 > num2) {
    console.log("Num1 " + num1);
} else {
    console.log("Num2 " + num2);
}

/*Tar 2 */
var num1 = 11;
var num2 = 22;
var num3 = -32;
if (num1 + num2 + num3 > 0) {
    console.log("The sign is: +");
} else {
    console.log("The sign is: -");
}

/*Tar 3 */
var num1 = -11;
var num2 = 20;
var num3 = 12;
var temp, i, num;
if (num1 < num2 ) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

if (num2 < num3){
    temp = num2;
    num2 = num3;
    num3 = temp;
}

if (num1 < num2){
    temp = num1;
    num1 = num2;
    num2 = temp;
}
console.log("The number is: " + num1);

/*Tar 4 */
var numbers = [-6, 0, -2, -5, -1];

num = numbers[0];
for (i = 1; i < numbers.length; i++) { 
    if (numbers[i] > num) {
        num = numbers[i];
    }
}
console.log("The number is: " + num);

/*Tar 5 */
var students = [{name: "David", grade: 80},  {name: "Vinoth", grade: 77}, {name: "Divya", grade: 88}, {name: "Ishitha", grade: 95}, {name: "Thomas", grade: 68}];
temp = 0;
for (i = 1; i < students.length; i++) { 
    temp += students[i].grade;
}
temp /= students.length;
if (temp < 60) {
    console.log("The average is: " + temp + " גרוע מאוד VB");
} else if (temp < 70) {
    console.log("The average is: " + temp + " גרוע B");
} else if (temp < 80) {
    console.log("The average is: " + temp + " בינוני A");
} else if (temp < 90) {
    console.log("The average is: " + temp + " טוב G");
} else {
    console.log("The average is: " + temp + " טוב מאוד VG");
}