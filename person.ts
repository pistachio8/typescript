export class Person {
    // 클래스 프로퍼티를 사전에 선언해야함
    protected name: string;

    constructor(name: string) {
        // 클래스 프로퍼티에 값 할당
        this.name = name;
    }

    sayHello() {
        return "Hello, " + this.name;
    }
}

