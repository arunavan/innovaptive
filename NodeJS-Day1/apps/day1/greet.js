var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Welcome toTypescript");
    };
    return Greeting;
}());
var g = new Greeting();
g.greet();
