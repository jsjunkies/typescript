var customContextMenu = (function () {
    function customContextMenu(elements) {
        var _this = this;
        this.uploadFile = function () {
            $.each(_this.elements, function (index, elem) {
                var fileName = elem.name;
                var fileExtension = fileName.split(".")[fileName.split(".").length - 1].toLowerCase();
                var tempStr = "<p class=fileDetails>" + fileName + "</p>";
                $('#linkContainer').append(tempStr);
                var $tempStr = $(tempStr);
                $(document).on('contextmenu', $tempStr, function () {
                    var b = new customContextMenu(this.elements).addContextMenu(event.target);
                });
            });
        };
        this.elements = elements;
    }
    customContextMenu.prototype.addContextMenu = function (source) {
        console.log($(source).html());
    };
    return customContextMenu;
}());
function fileUpload() {
    var filesList = document.getElementById('inputUpload').files;
    var a = new customContextMenu(filesList);
    a.uploadFile();
}
