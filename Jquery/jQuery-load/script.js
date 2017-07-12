$(document).ready(function(){
    $("#home").click(function(){
        $.ajax({url: "homehtml", success: function(result){
            $("main").html(result);
        }});
    });

    $("#about").click(function(){
        $.ajax({url: "about.html", success: function(result){
            $("main").html(result);
        }});
    });

    $("#contact").click(function(){
        $.ajax({url: "demo_test.txt", success: function(result){
            $("main").html(result);
        }});
    });

});
