/*Tar 4 */
function myFlag ( myElement ) {
    var myString = myElement.id;
    var myFlagDiv = myElement.parentElement.children[1];
    myFlagDiv.style.display = "block";
    console.log("The string is: " + myString);

}

function myFlagOut( myElement ) {
    var myString = myElement.id;
    var myFlagDiv = myElement.parentElement.children[1];
    myFlagDiv.style.display = "none";
    console.log("The string is: " + myString);

}

