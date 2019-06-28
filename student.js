"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        return this.name + " is studying!!";
    };
    return Student;
}(person_1.Person));
var student = new Student('Lee');
console.log(student.sayHello());
console.log(student.study());
// 타입 선언
var foo = 'hello';
// 함수 선언
function multiply1(x, y) {
    return x * y;
}
// 함수 표현식
var multiply2 = function (x, y) { return x * y; };
console.log(multiply1(10, 2));
console.log(multiply1(10, 3));
console.log(multiply2(10, 2));
// TypeScript에서 추가된 고유 타입 (자바스크립트 타입 그대로 사용 가능)
// boolean, null, undefined, string, number, object, symbol
// array, tuple, enum, any, void, never 
// array: 배열
var list1 = [1, 'two', true];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple: 고정된 요소 수만큼의 자료형을 미리 선언 후 배열
var tuple;
tuple = ['hello', 10]; // true
//  tuple = [10, 'hello'] //error
// enum: 열거형, 숫자 값 집합에 이름을 지정
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["REd"] = 1] = "REd";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Blue;
console.log(c3); // 4
// any: 타입 추론할 수 없거나 타입 체크가 필요 없는 변수에 사용. 어떤 타입의 값이라도 할당 가능 (var랑 비슷)
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // 에러 안남
// void: 함수에서 return값 없을때 사용
function warnUser() {
    console.log("This is my warning message");
}
// never: 결코 발생하지 않는 값
function infinteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
// 타입 대소문자 주의해서 써야함
// string 타입은 ts 기본 자료형 타입, String 타입은 String 생성자 함수로 생성된 String 래퍼 객체 타입 
// 객체의 유형도 타입이 될 수 있음
// Date 타입
var today = new Date();
// HTMLElement 타입
var elem = document.getElementById('myId');
// Person 타입
var person = new person_1.Person('Jeong');
// 정적 타이핑 : 타입을 명시적으로 선언, 타입이 결정된 후 변경 안됨.
// 코드 가독성, 예측성, 안정성이 장점. 대규모 프로젝트에 적합
// 타입 추론: 타입 선언 생략하면 값이 할당될 때 동적으로 타입이 결정
// 클래스
// 접근 제한자 public, protected, private 사용 가능
