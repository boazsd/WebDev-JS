// The Modal Window style
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

/* When the user clicks the button, open the modal 
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
        document.getElementById("myModalArticale").innerHTML = "<p>5 - JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.</p><p>Example string : 'the quick brown fox'</p><p>Expected Output : 'The Quick Brown Fox '</p><p>JavaScript function that checks whether a passed string is palindrome or not.</p><p>A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.</p>";
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
*/

// When the user clicks the button, open the modal 
function myBtnEx() {
    /*
    var itm;
    var cln;
    switch (myBtnNumber) {
        case 1:
        itm = document.getElementById("myEx1Div");
        cln = itm.cloneNode(true);
        document.getElementById("myExIn").removeChild(document.getElementById("myExIn").childNodes[0]); 
        document.getElementById("myExIn").appendChild(cln);
        document.getElementById("myModalArticale").style.display = "none";
        document.getElementById("myExIn").style.display = "block";
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
        document.getElementById("myModalArticale").innerHTML = "<p>5 - JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.</p><p>Example string : 'the quick brown fox'</p><p>Expected Output : 'The Quick Brown Fox '</p><p>JavaScript function that checks whether a passed string is palindrome or not.</p><p>A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.</p>";
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
    */
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
}
}
