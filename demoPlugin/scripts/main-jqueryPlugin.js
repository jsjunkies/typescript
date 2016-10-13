(function($) {

    $.fn.greenify = function() {
        this.css("color", "green");
        return this;
    };

}(jQuery));

function changeColor() {
    $('#demoSpan').greenify();
}
