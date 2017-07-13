/*Tar 3 */
function myCount ( myParentElement ) {
    var myElement  = myParentElement.children[1];
    var myString = myElement.value;
    myElement  = myParentElement.children[4];
    var myChar = myElement.value;
    console.log("The string is: " + myString + "   " + "The character is: " + myChar);
    var x; 
    var myCount = 0; 
    for  (x in myString) {
        if (myString[x] === myChar) {
            myCount++;
        }
    }

    console.log(myCount);
    myElement = myParentElement.children[6];
    myElement.innerHTML = myCount;
}
