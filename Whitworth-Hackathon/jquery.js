// Hide and Show Message And List
var $div = $('div.preShoppingListDiv');
var $button = $('input#message');
var $listContent = $('div.shoppingListDiv');

$(function(){
    $listContent.hide();
    $button.on('click', function(){
        $div.fadeOut(2000);
        $listContent.delay(2000).fadeIn(2000);
    });
});

// Fade Out Original Li Tags On Click
$(function(){
    $('li').on('click', function(){
        $(this).fadeOut(1500);
    });
    $('li').addClass('defaultItem');
});

/* Add New Items To List And Fade Out Added Li Tags On Click For Each List */

// List One
$(function() {
    
    var $newItemButton = $('#newItemButtonOne');
    var $newItemForm = $('#newItemFormOne');
    var $textInput = $('input.inputNewItemOne:text');
    
    $newItemButton.show();
    $newItemForm.hide();
    
    $('#showFormOne').on('click', function(){
        $newItemButton.hide();
        $newItemForm.fadeIn(1500);
    });
    
    $newItemForm.on('submit', function(event){
        event.preventDefault();
        var newText = $textInput.val();
        $('ul.ulOne li:last').after('<li class="defaultItem">' + '<em>' + newText + '</em>' + '</li>');
        $newItemButton.fadeIn(1500);
        $newItemForm.hide();
        $textInput.val('');

        $(function(){
            $('li').on('click', function(){
                // $(this).hide();
                $(this).fadeOut(1500);
            });
        });
        
    });
    
});

// List Two
$(function() {
    
    var $newItemButton = $('#newItemButtonTwo');
    var $newItemForm = $('#newItemFormTwo');
    var $textInput = $('input.inputNewItemTwo:text');
    
    $newItemButton.show();
    $newItemForm.hide();
    
    $('#showFormTwo').on('click', function(){
        $newItemButton.hide();
        $newItemForm.fadeIn(1500);
    });
    
    $newItemForm.on('submit', function(event){
        event.preventDefault();
        var newText = $textInput.val();
        $('ul.ulTwo li:last').after('<li class="defaultItem">' + '<em>' + newText + '</em>' + '</li>');
        $newItemButton.fadeIn(1500);
        $newItemForm.hide();
        $textInput.val('');
        
        $(function(){
            $('li').on('click', function(){
                // $(this).hide();
                $(this).fadeOut(1500);
            });
        });
        
    });
    
});

// List Three
$(function() {
    
    var $newItemButton = $('#newItemButtonThree');
    var $newItemForm = $('#newItemFormThree');
    var $textInput = $('input.inputNewItemThree:text');
    
    $newItemButton.show();
    $newItemForm.hide();
    
    $('#showFormThree').on('click', function(){
        $newItemButton.hide();
        $newItemForm.fadeIn(1500);
    });
    
    $newItemForm.on('submit', function(event){
        event.preventDefault();
        var newText = $textInput.val();
        $('ul.ulThree li:last').after('<li class="defaultItem">' + '<em>' + newText + '</em>' + '</li>');
        $newItemButton.fadeIn(1500);
        $newItemForm.hide();
        $textInput.val('');
        
        $(function(){
            $('li').on('click', function(){
                // $(this).hide();
                $(this).fadeOut(1500);
            });
        });
        
    });
    
});

// Print Page Function
$(function () {
    $(".printPage").click(function () {
        var contentsOne = $(".ulOne").html();
        var contentsTwo = $("ul.ulTwo").html();
        var contentsThree = $("ul.ulThree").html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        //Create a HTML document
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        frameDoc.document.write('<html><head><title>BLACK FRIDAY SHOPPING LIST</title>');
        frameDoc.document.write('</head><body><div class="printBkgrd">');
        frameDoc.document.write('<h1 class="printH1">My Black Friday Shopping List:</h1>');
        //Link to a sepatate CSS file
        frameDoc.document.write('<link href="printStyles.css" rel="stylesheet" type="text/css" />');
        //Add the list items
        //First List
        frameDoc.document.write('<h3 class="printH3"></h3>');
        frameDoc.document.write(contentsOne);
        //Second List
        frameDoc.document.write('<h3 class="printH3"></h3>');
        frameDoc.document.write(contentsTwo);
        //Third List
        frameDoc.document.write('<h3 class="printH3"></h3>');
        frameDoc.document.write(contentsThree);
        //Close Document
        frameDoc.document.write('</div></body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
    });
});

// Draggable List Items
$(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

$(function() {
    $("#sortableTwo").sortable();
    $("#sortableTwo").disableSelection();
});

$(function() {
    $("#sortableThree").sortable();
    $("#sortableThree").disableSelection();
});

// Change Page Theme
$(function() {
        $('.navbarDotImgOne').on('click', function(){
            if ($('.navbarDotImgOne').hasClass('unselectedTheme'))
            $('.navbarDotImgOne').addClass('selectedTheme');
            $('.navbarDotImgOne').removeClass('unselectedTheme');
            $('.navbarDotImgTwo').addClass('unselectedTheme');
            $('.navbarDotImgTwo').removeClass('selectedTheme');
            $('.contentBodyNewTheme').addClass('contentBody');
            $('.contentBody').removeClass('contentBodyNewTheme');
        });
});

$(function() {
        $('.navbarDotImgTwo').on('click', function(){
            if ($('.navbarDotImgTwo').hasClass('unselectedTheme'))
            $('.navbarDotImgTwo').addClass('selectedTheme');
            $('.navbarDotImgTwo').removeClass('unselectedTheme');
            $('.navbarDotImgOne').addClass('unselectedTheme');
            $('.navbarDotImgOne').removeClass('selectedTheme');
            $('.contentBody').addClass('contentBodyNewTheme');
            $('.contentBodyNewTheme').removeClass('contentBody');
        });
});
