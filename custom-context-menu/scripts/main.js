var menuData = [{
        "type": "docx",
        "menuItems": ["copy", "open", "delete"]
    },
    {
        "type": "pdf",
        "menuItems": ["copy", "open", "delete"]
    },
    {
        "type": "zip",
        "menuItems": ["copy", "open", "delete", "extract"]
    }
];
var demoClass = (function () {
    function demoClass(elements) {
        this.elements = elements;
    }
    demoClass.prototype.addContextMenu = function () {
        $('.fileDetails').on('contextmenu', function (event) {
            event.preventDefault();
            var fileName = $(event.target).html();
            var fileType = $(event.target).attr('data-type');
            var menuItems = $.map(menuData, function (k, v) {
                return k.type == fileType ? k.menuItems : [];
            });
            console.log(menuItems);
            console.log("File Name = " + fileName + " :: File Type = " + fileType);
        });
    };
    demoClass.prototype.uploadFile = function (callback) {
        $.each(this.elements, function (index, element) {
            var fileName = element.name;
            var fileType = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();
            var tempVar = "<span class=fileDetails data-type=" + fileType + ">" + element.name + "</span>";
            $('#fileContainer').append(tempVar);
        });
        callback();
    };
    return demoClass;
}());
function upload() {
    var fileList = document.getElementById('uploader').files;
    var a = new demoClass(fileList);
    a.uploadFile(a.addContextMenu);
}
