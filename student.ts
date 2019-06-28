import { Person } from './person';

class Student extends Person {
    study(): string {
        return `${this.name} is studying!!`;
    }
}

const student = new Student('Lee');
console.log( student.sayHello());
console.log( student.study());

// 타입 선언
let foo: string = 'hello';

// 함수 선언
function multiply1( x: number, y: number): number {
    return x * y;
}

// 함수 표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log( multiply1(10,2) );
console.log( multiply1(10,3) );
console.log( multiply2(10,2) );

// TypeScript에서 추가된 고유 타입 (자바스크립트 타입 그대로 사용 가능)
// boolean, null, undefined, string, number, object, symbol
// array, tuple, enum, any, void, never 
// array: 배열
 let list1: any[] = [1, 'two', true];
 let list2: number[] =[ 1, 2, 3];
 let list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

// tuple: 고정된 요소 수만큼의 자료형을 미리 선언 후 배열
 let tuple: [ string, number ]
 tuple = ['hello', 10] // true
//  tuple = [10, 'hello'] //error

// enum: 열거형, 숫자 값 집합에 이름을 지정
enum Color1 { Red, Green, Blue };
let c1: Color1 = Color1.Green;
enum Color2 { Red = 1, Green, Blue };
let c2: Color2 = Color2.Green;
enum Color3 { REd = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;
console.log( c3 ); // 4

// any: 타입 추론할 수 없거나 타입 체크가 필요 없는 변수에 사용. 어떤 타입의 값이라도 할당 가능 (var랑 비슷)
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // 에러 안남

// void: 함수에서 return값 없을때 사용
function warnUser(): void {
    console.log("This is my warning message");
    
}

// never: 결코 발생하지 않는 값
function infinteLoop(): never {
    while( true ) {}
}

function error(message: string): never {
    throw new Error(message);
}

// 타입 대소문자 주의해서 써야함
// string 타입은 ts 기본 자료형 타입, String 타입은 String 생성자 함수로 생성된 String 래퍼 객체 타입 
// 객체의 유형도 타입이 될 수 있음
// Date 타입
const today: Date = new Date();

// HTMLElement 타입
const elem: HTMLElement = document.getElementById('myId');

// Person 타입
const person: Person = new Person('Jeong');

// 정적 타이핑 : 타입을 명시적으로 선언, 타입이 결정된 후 변경 안됨.
// 코드 가독성, 예측성, 안정성이 장점. 대규모 프로젝트에 적합
// 타입 추론: 타입 선언 생략하면 값이 할당될 때 동적으로 타입이 결정

// 클래스
// 접근 제한자 public, protected, private 사용 가능. 생략하면 암묵적으로 public이 선언
