
class parentDemoClass {
    start() {
        console.log('engine started');
    }
    stop() {
        console.log('engine stopped');
    }
}
class childDemoClass extends parentDemoClass {
    paused() {
        console.log("engine paused");
    }
}
var dm = new childDemoClass();
dm.start();
