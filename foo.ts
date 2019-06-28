class Foo {
    // public x: string;
    protected y: string;
    private z: string;

    // readonly 키워드
    // readonly가 선언된 클래스 프로퍼티는 선언시 또는 생성자 내부에서만 값 할당 가능. 그 외에는 읽기만 가능
    // 상수 선언에 사용
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;

    // 변수를 사용한다면 const , 속성을 사용한다면 readonly

    // 생성자 파라미터에 접근 제한자 선언 가능
    // 접근 제한자 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언, 생성자 내부에서 별도의 초기화 없어도 암묵적으로 초기화 
    // 생성자 파라미터에 접근 제한자 선언 안하면 생성자 내부에서만 유효한 지역 변수가 됨. 외부에서 참조 불가능
    constructor( public x: string, y:string, z: string ) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.MSG = 'hello';
    }

    log() {
        // readonly가 선언된 프로퍼티는 재할당 금지
        console.log( this.MAX_LEN );
        
    }
}

const foo = new Foo('x','y','z');
// console.log(foo.x);
foo.log();

// console.log(foo.y); // 클래스 인스턴스를 통해 클래스 외부 참조 불가능, 서브 클래스에서는 참조 가능
// console.log(foo.z); // 참조 불가능


class Bar extends Foo {

    constructor(x: string, y: string, z: string) {
        super(x,y,z);
        console.log(this.x);
        console.log(this.y); // 클래스 인스턴스를 통해 클래스 외부 참조 불가능, 서브 클래스에서는 참조 가능
        // console.log(this.z); // 참조 불가능

    }
}

class Counter {

    // static 키워드
    // 클래스의 인스턴스가 아닌 클래스 이름으로 메소드를 호출. 클래스의 인스턴스를 생성하지 않아도 호출 가능.
    static instanceCounter = 0;

    constructor() {
        
        Counter.instanceCounter++;
    }
    
}

var Bar1 = new Counter();
var Bar2 = new Counter();

console.log(Counter.instanceCounter);


// 추상 클래스
// 하나 이상의 추상 메소드를 포함, 일반 메소드도 포함 가능
// 내용이 없이 메소드 이름과 타입만 선언된 메소드, 직접 인스턴스 생성 안되고 상속만을 위해 사용.
// 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현해야함.
// 인터페이스랑 다른 점은 일반 메소드도 포함 가능하단거. 인터페이스는 모든 메소드가 추상.
abstract class Animal {
    // 추상 메소드
    abstract makeSound(): void;

    // 일반 메소드
    move(): void {
        console.log( 'roaming the earth...' );
        
    }
}

// new Animal(); // 직접 인스턴스 생성 불가능.

class Dog extends Animal {
    makeSound() {
        console.log( 'bowwow~~' );
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();

/* 
    인터페이스 
    타입 체크를 위해 사용. 변수, 함수, 클래스에 사용 가능.
    모든 메소드는 추상 메소드이며 직접 인스턴스를 생성할 수 없음.
    새로운 자료형을 정의하는 것과 비슷.
*/


// 인터페이스 정의
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수해야함.
todo = { id: 1, content: 'typescript', completed: false };

// 인터페이스로 함수 파라미터의 타입 선언 가능
// 함수에 객체를 전달할 때 용이.

let todos: Todo[] = []; // Todos는 Todo타입의 배열 형태라고 선언

// 파라미터 todo의 타입으로 Todo 인터페이스 선언
function addTodo( todo: Todo ) {
    todos = [ ...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수해야함
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo( newTodo );
// console.log( todos );

// 인터페이스는 함수의 타입으로 사용 가능
interface SquareFunc {
    (num: number): number;
}

// 함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야함.
const squareFunc: SquareFunc = function ( num: number ) {
    return num * num;
}

console.log( squareFunc(10));

// 클래스에 implements 인터페이스 선언
// 클래스의 일관성 유지 가능

interface ITodo {
    id: number;
    content: string;
    completed: boolean; 
}

// Todo 클래스는 ITodo 인터페이스 구현해야함
class Todo implements ITodo {
    constructor (
        public id: number,
        public content: string,
        public completed: boolean 
    ) {}
}

const todo2 = new Todo(2, 'Typescript', false);
console.log(todo2);

// 메소드도 포함 가능
interface IPerson {
    name: string;
    sayHello(): void;
}

// 인터페이스 구현 클래스는 반드시 정의한 것들 모두 구현해야함
class Person2 implements IPerson {
    constructor( public name: string ) {}

    sayHello() {
        console.log( `Hello ${this.name}`);
        
    }   
}

function greeter( person: IPerson ) {
    person.sayHello();
}

const me = new Person2( 'Lee');
greeter(me);

// 덕 타이핑
// 타입스크립트는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있으면 인터페이스를 구현한거라고 인정.
// 인터페이스와 내용이 일치하지 않아도 하나라도 갖고 있으면 인정됨.
interface IDuck {
    quak(): void;
}

class MallardDuck implements IDuck {
    quak() {
        console.log( 'Quak!' );
        
    }
}

class RedheadDuck {
    quak() {
        console.log( 'q~uak!' );
        
    }
}

function makeNoise(duck: IDuck): void {
    duck.quak();
}

makeNoise( new MallardDuck());
makeNoise( new RedheadDuck());

// 인터페이스 선택적 프로퍼티 가능
interface UserInfo {
    username: string;
    password: string;
    age? : number;
    address? : string;
}

const userInfo: UserInfo = {
    username: 'dddd',
    password: '12345'
}

console.log( userInfo );


// 제네릭
// 선언시점이 아니라 생성 시점에 타입 명시하여 다양한 타입을 사용 가능.
// <T> 관용적 식별자 -> 타입 파라미터
class Queue {
    protected data = []; // data:any[]

    push( item ) {
        this.data.push( item );
    }

    pop() {
        return this.data.shift();
    }
}
// 숫자만 가능한 queue
class NumberQueue extends Queue {
    // number 타입의 요소만 push
    push( item: number ) {
        super.push( item );
    }

    pop() {
        return super.pop();
    }
}
// 다양한 타입 가능하게 제네릭 선언
class AnyQueue<T> { // T : type parameter
    protected data : Array<T> = [];

    push( item: T ) {
        this.data.push( item );
    }

    pop(): T {
        return this.data.shift();
    }
}

const numberQueue = new AnyQueue<number>();
numberQueue.push(0);
numberQueue.push( +'1' );
// console.log( queue.pop().toFixed() );
// console.log( queue.pop().toFixed() );

// 함수에 제네릭 사용
function reverse<T> ( items: T[] ): T[] {
    return items.reverse();
}

const arg = [1, 2, 3, 4, 5];

// 인수에 의해 타입 매개변수가 결정
const reversed = reverse(arg);
console.log(reversed);

// {name: string}
const arg1 = [{name: 'Lee'}, {name: 'Kim'}];
const reversed1 = reverse(arg1);
console.log(reversed1);

// Type assertions
// 다른 언어의 타입 변환과 비슷하지만 특별한 검사나 데이터 재구성을 수행 안함
// 런타임에 영향을 미치지 않으며 컴파일러에서만 사용
// 타입스크립트는 프로그래머가 필요한 특수 검사를 수행했다고 가정한다.

let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length; // angle-barcket (<>) 구문
let strLength: number = (someValue as string).length; // angle-barcket (<>) 구문

/*
    타입스크립트는 인터페이스를 보는 것이 아니라 인터페이스가 구현하는 값이 무엇인지 확인한다.
    순서 상관없고 객체가 그 값들의 타입을 만족시키는지만 확인
*/

// 인터페이스에 prop이 추가될 가능성이 있을시 -> index signature를 추가한다
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string] : any;
}

function createSquare( config: SquareConfig ) {
    return console.log( config );
} 

// excess property check 를 벗어나는 방법? 인자로 넘길 객체를 다른 객체에 할당한 후에 인자값으로 넘기는 방법
// 권장하진 않음.
let squareOptions = { color: 'red', width: 100};
let mySquare = createSquare(squareOptions);

interface OPerson {
    name: string;
    age: number;
    gender: string;
}

// 인터페이스의 모든 프로퍼티를 optional 하게 변경
type PartialPerson = Partial<OPerson>;
const PartialPerson: PartialPerson = {
    gender: "male" // optional
}

// 인터페이스의 모든 프로퍼티를 required 하게 변경
type RequiredPerson = Required<OPerson>;
const requiredPerson: RequiredPerson = {
    name: "Jade", // required
    age: 29, // required
    gender: "male" // required
}

// 인터페이스의 프로퍼티 중 일부(name, age)만 받도록 설정
type PickPerson = Pick<OPerson, "name" | "age">;
const pickPerson: PickPerson = {
    name: "Jade", // required
    age: 29, // required
    // gender: "male"
}

// 프로퍼티 중 일부(name, age)는 required , gender는 optional 설정
type PickPerson2 = Pick<OPerson, "name" | "age"> & Pick<Partial<OPerson>, "gender">;
const pickPerson2: PickPerson2 = {
    name: "Jade", // required
    age: 29, // required
    gender: "male" // optional
}

// 특정 속성만 제거하는 방법
// type Omit<T, K extends keyof T> = Pick<Todo, Exclude<keyof T, K>;
type SubPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type MyPerson = SubPartial<OPerson, "gender">;
let p: MyPerson;