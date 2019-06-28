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
var Foo = /** @class */ (function () {
    // 생성자 파라미터에 접근 제한자 선언 가능
    // 접근 제한자 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언, 생성자 내부에서 별도의 초기화 없어도 암묵적으로 초기화 
    // 생성자 파라미터에 접근 제한자 선언 안하면 생성자 내부에서만 유효한 지역 변수가 됨. 외부에서 참조 불가능
    function Foo(x, y, z) {
        this.x = x;
        // readonly 키워드
        // readonly가 선언된 클래스 프로퍼티는 선언시 또는 생성자 내부에서만 값 할당 가능. 그 외에는 읽기만 가능
        // 상수 선언에 사용
        this.MAX_LEN = 5;
        this.x = x;
        this.y = y;
        this.z = z;
        this.MSG = 'hello';
    }
    Foo.prototype.log = function () {
        // readonly가 선언된 프로퍼티는 재할당 금지
        console.log(this.MAX_LEN);
    };
    return Foo;
}());
var foo = new Foo('x', 'y', 'z');
// console.log(foo.x);
foo.log();
// console.log(foo.y); // 클래스 인스턴스를 통해 클래스 외부 참조 불가능, 서브 클래스에서는 참조 가능
// console.log(foo.z); // 참조 불가능
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y, z) || this;
        console.log(_this.x);
        console.log(_this.y); // 클래스 인스턴스를 통해 클래스 외부 참조 불가능, 서브 클래스에서는 참조 가능
        return _this;
        // console.log(this.z); // 참조 불가능
    }
    return Bar;
}(Foo));
var Counter = /** @class */ (function () {
    function Counter() {
        Counter.instanceCounter++;
    }
    // static 키워드
    // 클래스의 인스턴스가 아닌 클래스 이름으로 메소드를 호출. 클래스의 인스턴스를 생성하지 않아도 호출 가능.
    Counter.instanceCounter = 0;
    return Counter;
}());
var Bar1 = new Counter();
var Bar2 = new Counter();
console.log(Counter.instanceCounter);
// 추상 클래스
// 하나 이상의 추상 메소드를 포함, 일반 메소드도 포함 가능
// 내용이 없이 메소드 이름과 타입만 선언된 메소드, 직접 인스턴스 생성 안되고 상속만을 위해 사용.
// 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현해야함.
// 인터페이스랑 다른 점은 일반 메소드도 포함 가능하단거. 인터페이스는 모든 메소드가 추상.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // 일반 메소드
    Animal.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Animal;
}());
// new Animal(); // 직접 인스턴스 생성 불가능.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('bowwow~~');
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.makeSound();
myDog.move();
// 변수 todo의 타입으로 Todo 인터페이스를 선언
var todo;
// 변수 todo는 Todo 인터페이스를 준수해야함.
todo = { id: 1, content: 'typescript', completed: false };
// 인터페이스로 함수 파라미터의 타입 선언 가능
// 함수에 객체를 전달할 때 용이.
var todos = [];
// 파라미터 todo의 타입으로 Todo 인터페이스 선언
function addTodo(todo) {
    todos = todos.concat([todo]);
}
// 파라미터 todo는 Todo 인터페이스를 준수해야함
var newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
// 함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야함.
var squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10));
// Todo 클래스는 ITodo 인터페이스 구현해야함
var Todo = /** @class */ (function () {
    function Todo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return Todo;
}());
var todo2 = new Todo(2, 'Typescript', false);
console.log(todo2);
// 인터페이스 구현 클래스는 반드시 정의한 것들 모두 구현해야함
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person2;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person2('Lee');
greeter(me);
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quak = function () {
        console.log('Quak!');
    };
    return MallardDuck;
}());
var RedheadDuck = /** @class */ (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.quak = function () {
        console.log('q~uak!');
    };
    return RedheadDuck;
}());
function makeNoise(duck) {
    duck.quak();
}
makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());
var userInfo = {
    username: 'dddd',
    password: '12345'
};
console.log(userInfo);
// 제네릭
// 선언시점이 아니라 생성 시점에 타입 명시하여 다양한 타입을 사용 가능.
// <T> 관용적 식별자 -> 타입 파라미터
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = []; // data:any[]
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
// 숫자만 가능한 queue
var NumberQueue = /** @class */ (function (_super) {
    __extends(NumberQueue, _super);
    function NumberQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // number 타입의 요소만 push
    NumberQueue.prototype.push = function (item) {
        _super.prototype.push.call(this, item);
    };
    NumberQueue.prototype.pop = function () {
        return _super.prototype.pop.call(this);
    };
    return NumberQueue;
}(Queue));
// 다양한 타입 가능하게 제네릭 선언
var AnyQueue = /** @class */ (function () {
    function AnyQueue() {
        this.data = [];
    }
    AnyQueue.prototype.push = function (item) {
        this.data.push(item);
    };
    AnyQueue.prototype.pop = function () {
        return this.data.shift();
    };
    return AnyQueue;
}());
var numberQueue = new AnyQueue();
numberQueue.push(0);
numberQueue.push(+'1');
// console.log( queue.pop().toFixed() );
// console.log( queue.pop().toFixed() );
// 함수에 제네릭 사용
function reverse(items) {
    return items.reverse();
}
var arg = [1, 2, 3, 4, 5];
// 인수에 의해 타입 매개변수가 결정
var reversed = reverse(arg);
console.log(reversed);
// {name: string}
var arg1 = [{ name: 'Lee' }, { name: 'Kim' }];
var reversed1 = reverse(arg1);
console.log(reversed1);
