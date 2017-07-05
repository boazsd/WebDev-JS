/*Tar 1 */
function myReverse ( myString) {
    console.log(myString);
    var temp = "";
    var i;
    for (i=1; i < myString.length + 1; i++) {
        temp += myString.substr(-i, 1);
         
    }
    console.log(temp);
}

