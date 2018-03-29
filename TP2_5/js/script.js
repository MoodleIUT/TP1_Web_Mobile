$(document).ready(function() {
    $(document).on("click", ".fermer", function() {
        $("#header").addClass("vueMenu");
        $("#burger").addClass("ouvert");
        $("#header").removeClass("invisible");
        $("#burger").removeClass("fermer");
    });
    $(document).on("click", ".ouvert", function() {
        $("#header").addClass("invisible");
        $("#burger").addClass("fermer");
        $("#header").removeClass("vueMenu");
        $("#burger").removeClass("ouvert");
    });

});