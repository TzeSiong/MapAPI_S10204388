$(document).ready(function(){
    $('.homeContainer').hover(
        function(){
            $('#home').animate({
                marginTop: "10px",
            }, 180);
        },

        function(){
            $('#home').animate({
                marginTop: "0px",
            }, 180);
        }
    )

    $('.mapContainer').hover(
        function(){
            $('#aMap').animate({
                marginTop: "10px",
            }, 180);
        },

        function(){
            $('#aMap').animate({
                marginTop: "0px",
            }, 180);
        }
    )

    $('.calculator').hover(
        function(){
            $('#distance').animate({
                marginTop: "10px",
            }, 180);
        },

        function(){
            $('#distance').animate({
                marginTop: "0px",
            }, 180);
        }
    )

    $('.homeContainer2').hover(
        function(){
            $('#home2').animate({
                marginTop: "10px",
            }, 180);
        },

        function(){
            $('#home2').animate({
                marginTop: "0px",
            }, 180);
        }
    )

})