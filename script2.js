/*Tar 1 */
function myReverse ( myString) {
    console.log(myString);
    var temp = "";
    var i;
    for (x in myString) {
        temp = myString[x] + temp;
    }
    console.log(temp);
    return temp;
}

