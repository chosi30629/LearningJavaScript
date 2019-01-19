{
    function f(x) {
        return x + 3;
    }
    console.log(f(5));
    // console.log(x);
}


// 정적 스코프와 동적 스코프
{
    function f1() {
        console.log('one');
    }
    function f2() {
        console.log('two');
    }
    f2();
    f1();
    f2();
}
{
    const x = 3;
    function f() {
        console.log(x);
        // console.log(y);
    }
    {   // 새 스코프
        const y = 5;
        f();
    }
}


// 전역 스코프
{
    let name = "Irena";     // 전역
    let age = 25;           // 전역
    function greet() {
        console.log(`Hello, ${name}!`);
    }
    function getBirthYear() {
        return new Date().getFullYear() - age;
    }
    greet();
    console.log(getBirthYear());
}
{
    let user = {
        name: "Irena",
        age: 25,
    };
    function greet() {
        console.log(`Hello, ${user.name}!`);
    }
    function getBirthYear() {
        return new Date().getFullYear() - user.age;
    }
    greet();
    console.log(getBirthYear());
}
{
    let user = {
        name: "Irena",
        age: 25,
    };
    function greet(user) {
        console.log(`Hello, ${user.name}!`);
    }
    function getBirthYear(user) {
        return new Date().getFullYear() - user.age;
    }
    greet(user);
    console.log(getBirthYear(user));
}


// 블록 스코프
{
    console.log('before block');
    {
        console.log('inside block');
        const x = 3;
        console.log(x);                         // 3
    }
    // console.log(`outside block; x=${x}`);    // 에러
}


// 변수 숨기기
{
    {
        // block 1
        const x = 'blue';
        console.log(x);         // "blue"
    }
    console.log(typeof x);      // "undefined"
    {
        // block 2
        const x = 3;
        console.log(x);         // 3
    }
    console.log(typeof x);      // "undefined"
}
{
    // 외부 블록
    let x = 'blue';
    console.log(x);             // "blue"
    {
        // block 2
        const x = 3;
        console.log(x);         // 3
    }
    console.log(x);             // "blue"
}
console.log(typeof x);          // "undefined"
{
    // 외부 블록
    let x = { color: "blue" };
    let y = x;                  // y와 x는 같은 객체를 가리킴
    let z = 3;
    {
        // 내부 블록
        let x = 5;              // 이제 바깥의 x는 가려짐
        console.log(x);         // 5
        console.log(y.color);   // "blue"; y가 가리키는, 외부 스코프의 x가 가리키는 객체는 스코프안에 있음
        y.color = "red";
        console.log(z);         // 3; z는 숨겨지지 않음
    }
    console.log(x.color);       // "red"; 객체는 내부 스코프에서 수정됐음
    console.log(y.color);       // "red"; x와 y는 같은 객체를 가리킴
    console.log(z);             // 3
}


// 함수, 클로저, 정적 스코프
{
    let globalFunc;             // 정의되지 않은 전역 함수
    {
        let blockVar = 'a';     // 블록 스코프에 있는 변수
        globalFunc = () => { console.log(blockVar); };
    }
    globalFunc();               // "a"
}
{
    let f;                      // 정의되지 않은 함수
    {
        let o = { note: 'Safe' };
        f = () => o;
    }
    let oRef = f();
    oRef.note = "Not so safe after all!";
    console.log(oRef);
}


// 즉시 호출하는 함수 표현식
{
    (function () {
        console.log("IIFE 바디");
    })();
}
{
    const message = (() => {
        const secret = "I'm a secret!";
        return `The secret is ${secret.length} characters long.`;
    })();
    console.log(message);
}
{
    const f = (() => {
        let count = 0;
        return () => `I have been called ${++count} time(s).`;
    })();
    console.log(f());
    console.log(f());
}


// 함수 스코프와 호이스팅
{
    let var1;
    let var2 = undefined;
    console.log(var1);          // undefined
    console.log(var2);          // undefined
    // console.log(undefinedVar);  에러
}
{
    // console.log(x);          // 에러
    let x = 3;                  // 에러가 일어나서 실행이 멈췄으므로 여기에는 결코 도달할 수 없음
}
// {
//     console.log(x);             // undefined
//     var x = 3;
//     console.log(x);             // 3
//     /*
//         var로 선언한 변수는 끌어올린다는 뜻의 호이스팅이라는 매커니즘을 따름
//         자바스크립트는 함수나 전역 스코프 전체를 살펴보고 var로 선언한 변수를 맨 위로 끌어올림
//         여기서 중요한 것은 선언만 끌어올려진다는 것이며, 할당은 끌어올려지지 않는다는 것

//         var x;                  // 선언(할당은 아닌)이 끌어올려집니다.
//         x;                      // undefined
//         x = 3;
//         x;                      // 3
//     */
// }
// {
//     // 보려면 위에꺼 하나 주석
//     if (x !== 3) {
//         console.log(y);
//         var y = 5;
//         if (y === 5) {
//             var x = 3;
//         }
//         console.log(y);
//     }
//     if (x === 3) {
//         console.log(y);
//     }
// }
{
    // 보려면 위에꺼 두개 주석
    var x = 3;
    if (x === 3) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}


// 함수 호이스팅
{
    f();            // 'f'
    function f() {
        console.log('f');
    }
}
/*
{
    fs();            // 에러
    let fs = function () {
        console.log('fs');
    };
}
*/

// 사각지대
{
    if (typeof u === "undefined") {
        console.log("u doesn't exist or is undefined");
    } else {
        // u를 사용해도 안전한 코드
    }
}
/*
{
    if (typeof p === "undefined") {
        console.log("p doesn't exist or is undefined");
    } else {
        // p를 사용해도 안전한 코드
    }
    let p = 5;
}   에러
typeof 연산자는 변수가 선언됐는지 알아볼 때 널리 쓰이고, 존재를 확인하는 안전한 방법이나 ES6에서는 typeof 연산자로 변수가 정의됐는지 확인할 필요가 거의 없으므로
typeof가 문제를 일으킬 소지도 거의 없다.
*/


// 스트릭트 모드
{
    (function () {
        'use strict';

        // 코드를 전부 이 안에 작성
        // 이 코드는 스트릭트 모드로 동작하지만, 
        // 이 코드와 함께 동작하는 다른 스크립트는
        // 스트릭트 모드에 영향받지 않음
    })();
}