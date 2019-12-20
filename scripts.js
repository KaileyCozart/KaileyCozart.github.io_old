$(document).ready(function() {
    // Make Body Text Appear and Disappear
    $(".toggle").click(function(){
        if($(".hideMe").hasClass("visible")) {
            $(".hideMe").removeClass("visible");
            $(".hideMe").addClass("hidden");
            $(".hideMeParent").removeClass("experienceListItem");
            $(".hideMeParent").addClass("experienceListItemHidden");
        }
        else if($(".hideMe").hasClass("hidden")) {
            $(".hideMe").removeClass("hidden");
            $(".hideMe").addClass("visible");
            $(".hideMeParent").removeClass("experienceListItemHidden");
            $(".hideMeParent").addClass("experienceListItem");
            $(".hideMe2").removeClass("visible");
            $(".hideMe2").addClass("hidden");
            $(".hideMeParent2").removeClass("experienceListItem");
            $(".hideMeParent2").addClass("experienceListItemHidden");
            $(".hideMe3").removeClass("visible");
            $(".hideMe3").addClass("hidden");
            $(".hideMeParent3").removeClass("experienceListItem");
            $(".hideMeParent3").addClass("experienceListItemHidden");
        }
    });
    $(".toggle2").click(function(){
        if($(".hideMe2").hasClass("visible")) {
            $(".hideMe2").removeClass("visible");
            $(".hideMe2").addClass("hidden");
            $(".hideMeParent2").removeClass("experienceListItem");
            $(".hideMeParent2").addClass("experienceListItemHidden");
        }
        else if($(".hideMe2").hasClass("hidden")) {
            $(".hideMe").removeClass("visible");
            $(".hideMe").addClass("hidden");
            $(".hideMeParent").removeClass("experienceListItem");
            $(".hideMeParent").addClass("experienceListItemHidden");
            $(".hideMe2").removeClass("hidden");
            $(".hideMe2").addClass("visible");
            $(".hideMeParent2").removeClass("experienceListItemHidden");
            $(".hideMeParent2").addClass("experienceListItem");
            $(".hideMe3").removeClass("visible");
            $(".hideMe3").addClass("hidden");
            $(".hideMeParent3").removeClass("experienceListItem");
            $(".hideMeParent3").addClass("experienceListItemHidden");
        }
    });
    $(".toggle3").click(function(){
        if($(".hideMe3").hasClass("visible")) {
            $(".hideMe3").removeClass("visible");
            $(".hideMe3").addClass("hidden");
            $(".hideMeParent3").removeClass("experienceListItem");
            $(".hideMeParent3").addClass("experienceListItemHidden");
        }
        else if($(".hideMe3").hasClass("hidden")) {
            $(".hideMe").removeClass("visible");
            $(".hideMe").addClass("hidden");
            $(".hideMeParent").removeClass("experienceListItem");
            $(".hideMeParent").addClass("experienceListItemHidden");
            $(".hideMe2").removeClass("visible");
            $(".hideMe2").addClass("hidden");
            $(".hideMeParent2").removeClass("experienceListItem");
            $(".hideMeParent2").addClass("experienceListItemHidden");
            $(".hideMe3").removeClass("hidden");
            $(".hideMe3").addClass("visible");
            $(".hideMeParent3").removeClass("experienceListItemHidden");
            $(".hideMeParent3").addClass("experienceListItem");
        }
    });
    
    // Toggle Arrow From "See More" to "See Less"
    // $(".toggle").click(function(){
    //     if($(".textChangeMore").hasClass("visible")) {
    //         $(".textChangeMore").removeClass("visible");
    //         $(".textChangeMore").addClass("hidden");
    //     }
    //     else if($(".textChangeMore").hasClass("hidden")) {
    //         $(".textChangeMore").removeClass("hidden");
    //         $(".textChangeMore").addClass("visible");
    //     }
    // });
    // $(".toggle").click(function(){
    //     if($(".textChangeLess").hasClass("visible")) {
    //         $(".textChangeLess").removeClass("visible");
    //         $(".textChangeLess").addClass("hidden");
    //     }
    //     else if($(".textChangeLess").hasClass("hidden")) {
    //         $(".textChangeLess").removeClass("hidden");
    //         $(".textChangeLess").addClass("visible");
    //     }
    // });

    // $(".toggle2").click(function(){
    //     if($(".textChangeMore2").hasClass("visible")) {
    //         $(".textChangeMore2").removeClass("visible");
    //         $(".textChangeMore2").addClass("hidden");
    //     }
    //     else if($(".textChangeMore2").hasClass("hidden")) {
    //         $(".textChangeMore2").removeClass("hidden");
    //         $(".textChangeMore2").addClass("visible");

    //         $(".textChangeMore").removeClass("visible");
    //         $(".textChangeMore").addClass("hidden");
    //         $(".textChangeMore3").removeClass("visible");
    //         $(".textChangeMore3").addClass("hidden");
    //         $(".textChangeLess").removeClass("hidden");
    //         $(".textChangeLess").addClass("visible");
    //         $(".textChangeLess3").removeClass("hidden");
    //         $(".textChangeLess3").addClass("visible");
    //     }
    // });
    // $(".toggle2").click(function(){
    //     if($(".textChangeLess2").hasClass("visible")) {
    //         $(".textChangeLess2").removeClass("visible");
    //         $(".textChangeLess2").addClass("hidden");
    //     }
    //     else if($(".textChangeLess2").hasClass("hidden")) {
    //         $(".textChangeLess2").removeClass("hidden");
    //         $(".textChangeLess2").addClass("visible");
    //     }
    // });

    // $(".toggle3").click(function(){
    //     if($(".textChangeMore3").hasClass("visible")) {
    //         $(".textChangeMore3").removeClass("visible");
    //         $(".textChangeMore3").addClass("hidden");
    //     }
    //     else if($(".textChangeMore3").hasClass("hidden")) {
    //         $(".textChangeMore3").removeClass("hidden");
    //         $(".textChangeMore3").addClass("visible");

    //         $(".textChangeMore2").removeClass("visible");
    //         $(".textChangeMore2").addClass("hidden");
    //         $(".textChangeMore").removeClass("visible");
    //         $(".textChangeMore").addClass("hidden");
    //         $(".textChangeLess2").removeClass("hidden");
    //         $(".textChangeLess2").addClass("visible");
    //         $(".textChangeLess").removeClass("hidden");
    //         $(".textChangeLess").addClass("visible");
    //     }
    // });
    // $(".toggle3").click(function(){
    //     if($(".textChangeLess3").hasClass("visible")) {
    //         $(".textChangeLess3").removeClass("visible");
    //         $(".textChangeLess3").addClass("hidden");
    //     }
    //     else if($(".textChangeLess3").hasClass("hidden")) {
    //         $(".textChangeLess3").removeClass("hidden");
    //         $(".textChangeLess3").addClass("visible");
    //     }
    // });
});