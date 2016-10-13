var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var parentDemoClass = (function () {
    function parentDemoClass() {
    }
    parentDemoClass.prototype.start = function () {
        console.log('engine started');
    };
    parentDemoClass.prototype.stop = function () {
        console.log('engine stopped');
    };
    return parentDemoClass;
}());
var childDemoClass = (function (_super) {
    __extends(childDemoClass, _super);
    function childDemoClass() {
        _super.apply(this, arguments);
    }
    childDemoClass.prototype.paused = function () {
        console.log("engine paused");
    };
    return childDemoClass;
}(parentDemoClass));
var dm = new childDemoClass();
dm.start();
