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

/*Tar 2 */
function myPalindrome( myString) {
    var temp = myString.replace(/ /g, "");
    var isPalindrome = true;
    var myLength = temp.length;
    var i=0;
    while (isPalindrome && (i < myLength/2)) {
        isPalindrome = (temp[i] === temp[myLength - i - 1]);
       console.log(i + temp[i] + " - " + temp[myLength - i - 1]);
       i++;
     }
    return isPalindrome ? "Palindrome" : "Not Palindrome";
}

