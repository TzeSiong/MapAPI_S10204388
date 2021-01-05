$(document).ready(function(){
    $('.homeContainer').hover(
        function(){
            $('.homeContainer').animate({
                marginTop: "16px",
            }, 200);
        },

        function(){
            $('.homeContainer').animate({
                marginTop: "20px",
            },200);
        }
    )
})