"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        // 클래스 프로퍼티에 값 할당
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
exports.Person = Person;
