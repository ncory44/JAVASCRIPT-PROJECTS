$(document).ready(function () {

    //The sineloopfunction uses the chaining technique to utilize multiple animate event methods in the same function
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };
    //setInterval will repeat the about shineLoop function and sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    //Triggers the images to slide down to show each title one after the other when the user's mouseenters the div area with the #classicCars ID
    $("#classicCars").on({
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        }
    });

    //triggers the images to slide up and hide each title one after the other when the user's mouse leaves the div area with the #classicCars ID
    $("#classicCars").on({
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking each element's sibling so they don't all display when one question is clicked
    $('div.question').on('click', function () {
        $(this).next()
            .slideToggle('slow')
            .siblings('div.answer');
    });

})