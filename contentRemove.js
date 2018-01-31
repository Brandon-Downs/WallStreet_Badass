$( document ).ready(function() {




    $("#nav").click(function(e) {
        $('#contentWrapper').css('display', 'none');
            $('#menuWrapper').fadeIn(400);
    });
    
    
    
    $("#menuClose").click(function(e) {
        $('#contentWrapper').css('display', 'block');
            $('#menuWrapper').fadeOut(400);
    });




});