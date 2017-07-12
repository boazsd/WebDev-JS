$(document).ready(function(){
    $(".MyClass").hide();
    $(".showBTN").click(function(){
        $(".MyClass").show();
    });
    $("button.MyClass").click(function(){
        $("#myP").append("Hello world!");
    });
});