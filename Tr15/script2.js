/*Tar 2 */
document.getElementById('myRes').style.display = "none";

function myTr2 ( num_1 , num_2, num_3) {
    var num1 = Number(num_1);
    var num2 = Number(num_2);
    var num3 = Number(num_3);
    var temp;
    console.log("Original: " + num1 + " - " + num2 + " - " + num3);
    if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num1 < num3) {
        temp = num1;
        num1 = num3;
        num3 = temp;
    }
    if (num2 < num3) {
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    console.log("result: " + num1 + " - " + num2 + " - " + num3);
    document.getElementById('myRes').innerHTML = "<fieldset><legend>פתרון תרגיל 2</legend><p>"+ num1 + "</P><p>" + num2 + "</P><p>" + num3 + "</P></fieldset>";
    document.getElementById('myRes').style.display = "block";
}
