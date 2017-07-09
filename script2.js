// The Modal Window style
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function myBtnClick(myBtnNumber) {
       switch (myBtnNumber) {
        case 1:
        document.getElementById("myModalArticale").innerHTML = "<p>1 - JavaScript function that reverse a number.</p><p>Example x = 32245;</p><p>Expected Output : 34225</p>";
        break;

        case 2:
        document.getElementById("myModalArticale").innerHTML = "<p>2 - JavaScript function that checks whether a passed string is palindrome or not.</p><p>A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.</p>";
        break;

        case 3:
        document.getElementById("myModalArticale").innerHTML = "<p>3 - Write a JavaScript function that generates all combinations of a string. </p><p>Example string : 'dog' </p><p>Expected Output : d,do,dog,o,og,g</p>";
        break;

        case 4:
        document.getElementById("myModalArticale").innerHTML = "<p>4 - avaScript function that returns a passed string with letters in alphabetical order.</p><p>Example string : 'webmaster'</p><p>Expected Output : 'abeemrstw'</p><p>Assume punctuation and numbers symbols are not included in the passed string.</p>";
        break;

        case 5:
        document.getElementById("myModalArticale").innerHTML = "<p>5 - JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
JavaScript function that checks whether a passed string is palindrome or not.</p><p>A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.</p>";
        break;

        case 6:
        document.getElementById("myModalArticale").innerHTML = "<p>3 - JavaScript function that generates all combinations of a string. </p><p>Example string : 'dog' </p><p>Expected Output : d,do,dog,o,og,g</p>";
        break;

        case 7:
        document.getElementById("myModalArticale").innerHTML = "<p>1 - JavaScript function that reverse a number.</p><p>Example x = 32245;</p><p>Expected Output : 34225</p>";
        break;

        case 8:
        document.getElementById("myModalArticale").innerHTML = "<p>2 - JavaScript function that checks whether a passed string is palindrome or not.</p><p>A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.</p>";
        break;

        case 9:
        document.getElementById("myModalArticale").innerHTML = "<p>3 - JavaScript function that generates all combinations of a string. </p><p>Example string : 'dog' </p><p>Expected Output : d,do,dog,o,og,g</p>";
        break;

        default:
        document.getElementById("myModalArticale").innerHTML = "<p>NA - No available data.</p>";
        break;
        
    }
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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
function myPalindrome( myForm) {
    var temp = myForm.demoString12.value;
    console.log("Original string before removing white spaces:" + temp + " - sring length:" + myLength);
    temp = temp.replace(/ /g, "");
    var isPalindrome = true;
    var myLength = temp.length;
    var i=0;
    console.log("String after removing white spaces:" + temp + " - sring length:" + myLength);
    while (isPalindrome && (i < myLength/2)) {
        isPalindrome = (temp[i] === temp[myLength - i - 1]);
       console.log("Compering the : " + i + " pairs " + temp[i] + " - " + temp[myLength - i - 1]);
       i++;
     }
    console.log("The result is: " + isPalindrome ? 'Palindrome' : 'Not Palindrome');
    myForm.demotxt12.value = isPalindrome ? 'Palindrome' : 'Not Palindrome';
}

/*Tar 3 */
function myCombination(myString) {
    var tempComb = [];
    var i,j;
    for (i=0; i < myString.length; i++) {
        for (j=i + 1; j < myString.length + 1; j++) {
            tempComb.push( myString.slice(i,j));
        }
    }
    return tempComb;
}

/*Tar 4 */
function mySort( myForm) {
    var temp = myForm.demoString21.value;
    console.log(temp);
    temp = temp.sort;
    console.log(temp);
    myForm.demotxt21.value = temp;
}

/*Tar 5 */
function myUpperCase(myString) {
    var tempString = myString.charAt(0).toUpperCase();
    var i;
    for (i=1; i < myString.length; i++) {
        if ((myString.charAt(i-1) === " ")) {
            tempString += myString.charAt(i).toUpperCase();
        } else {
            tempString += myString.charAt(i);
        }
    }
    return tempString;
}

/*Tar 6 */
function longestWord(myString) {
    var temp = '';
    tempStr = myString;
    while (tempStr.length > 0) {
        if (tempStr.indexOf(" ") > temp.length) {
            temp = tempStr.slice(0, tempStr.indexOf(" "));
        }
        console.log(temp);
        tempStr = tempStr.slice(tempStr.indexOf(" ") + 1);
        console.log(tempStr);
    }
    console.log(temp);
    return temp;
    popupWindow = window.open('child_page.html','name','width=200,height=200');
    popupWindow.focus();

}



