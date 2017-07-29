function changeFontSize() {
    var myList = document.getElementsByTagName("i");
    var myFontSize = document.getElementById("myFontSize");
    for(item in myList) {
        myList[item].style.fontSize = myFontSize.value + "px";
    }
    document.getElementById("mySize").innerHTML = myFontSize.value;
}  