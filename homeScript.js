$(document).ready(function() {
    var tileContainer = $(".tile-container");
    var arrowLeft = $("#left-arrow");
    var arrowRight = $("#right-arrow");
    
    arrowLeft.click(function() {
        tileContainer.animate({ scrollLeft: "-=300px" }, "slow");
    });
    
    arrowRight.click(function() {
        tileContainer.animate({ scrollLeft: "+=300px" }, "slow");
    });
});