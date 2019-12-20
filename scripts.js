$(document).ready(function() {
    // Make Body Text Appear and Disappear
    $(".toggle").click(function(){
        if($(".hideMe").hasClass("visible")) {
            $(".hideMe").removeClass("visible");
            $(".hideMe").addClass("hidden");
        }
        else if($(".hideMe").hasClass("hidden")) {
            $(".hideMe").removeClass("hidden");
            $(".hideMe").addClass("visible");
        }
    });
    // Toggle Text From "See More" to "See Less"
    $(".toggle").click(function(){
        if($(".textChangeMore").hasClass("visible")) {
            $(".textChangeMore").removeClass("visible");
            $(".textChangeMore").addClass("hidden");
        }
        else if($(".textChangeMore").hasClass("hidden")) {
            $(".textChangeMore").removeClass("hidden");
            $(".textChangeMore").addClass("visible");
        }
    });
    $(".toggle").click(function(){
        if($(".textChangeLess").hasClass("visible")) {
            $(".textChangeLess").removeClass("visible");
            $(".textChangeLess").addClass("hidden");
        }
        else if($(".textChangeLess").hasClass("hidden")) {
            $(".textChangeLess").removeClass("hidden");
            $(".textChangeLess").addClass("visible");
        }
    });
});