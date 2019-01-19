{
    function sayHello() {
        // 함수 바디는 여는 중괄호로 시작하고

        console.log("Hello world!");
        console.log("i Hola mundo!");
        console.log("Hallo wereld!");
        console.log("안녕 월드!");

        // 닫는 중괄호로 끝납니다.
    }
    sayHello();     // 콘솔에 "Hello world!"가 여러 언어로 출력
}


// 반환 값
{
    function getGreeting() {
        return "Hello world!";
    }
    console.log(getGreeting());     // Hello world!
}
{
    function getGreeting() {
    }
    console.log(getGreeting());
}
{
    function getGreeting() {
        return ["Hello world!", "i Hola mundo!", "Hallo wereld!", "안녕 월드!"];
    }
    console.log(getGreeting());
}


// 호출과 참조
{
    function getGreeting() {
        return "Hello world!";
    }
    console.log(getGreeting());     // Hello world!
    console.log(getGreeting);       // function getGreeting()

    const f = getGreeting;
    console.log(f());               // Hello world!

    const o = {};
    o.f = getGreeting;
    console.log(o.f());             // Hello world!

    const arr = [1, 2, 3];
    arr[1] = getGreeting;           // arr은 이제 [1, function getGreeting(), 2]
    console.log(arr[1]());                       // Hello world!
}


// 함수와 매개변수
{
    function avg(a, b) {
        return (a + b) / 2;
    }
    const a = 1, b = 2;
    console.log(avg(5, 10));

    function f(x) {
        console.log(`f 내부: x=${x}`);
        x = 5;
        console.log(`f 내부: x=${x} (할당 후)`);
    }
    let x = 3;
    console.log(`f를 호출하기 전: x=${x}`);
    f(x);
    console.log(`f를 호출한 다음: x=${x}`);

    function fun(o) {
        o.message = `fun 안에서 수정함 (이전 값: '${o.message}')`;
    }
    let o = {
        message: "초기 값"
    };
    console.log(`fun를 호출하기 전: o.message="${o.message}"`);
    fun(o);
    console.log(`fun를 호출한 다음: o.message="${o.message}"`);

    function fun1(o1) {
        o1.message = "fun1에서 수정함";
        o1 = {
            message: "새로운 객체!"
        };
        console.log(`fun1 내부: o1.message="${o1.message}" (할당 후)`);
    }
    let o1 = {
        message: "초기 값"
    };
    console.log(`fun1를 호출하기 전: o1.message="${o1.message}"`);
    fun1(o1);
    console.log(`fun1를 호출한 다음: o1.message="${o1.message}`);
}

{
    function f(x) {
        return `in f: x=${x}`;
    }
    console.log(f());
}

{
    function getSentence({ subject, verb, object }) {
        return `${subject} ${verb} ${object}`;
    }
    const o = {
        subject: "I",
        verb: "love",
        object: "JavaScript",
    };

    console.log(getSentence(o));
}
{
    function getSentence([subject, verb, object]) {
        return `${subject} ${verb} ${object}`;
    }
    const arr = ["I", "love", "JavaScript"];
    console.log(getSentence(arr));
}
{
    function addPrefix(prefix, ...words) {      // 확산 연산자는 반드시 마지막 매개변수여야 함. 아니면 에러
        // 나중에 더 좋은 방법을 배웁니다.
        const prefixedWords = [];
        for (let i = 0; i < words.length; i++) {
            prefixedWords[i] = prefix + words[i];
        }
        return prefixedWords;
    }
    console.log(addPrefix("con", "verse", "vex"));
}

{
    function f(a, b = "default", c = 3) {
        return `${a} - ${b} - ${c}`;
    }

    console.log(f(5, 6, 7));
    console.log(f(5, 6));
    console.log(f(5));
    console.log(f());
}


// 객체의 프로퍼티인 함수
{
    const o = {
        name: 'Wallace',                              // 원시 값 프로퍼티
        bark: function () { return 'Woof!'; }         // 함수 프로퍼티(메서드)
    };
    console.log(o);
}
{
    const o = {
        name: 'Wallace',                   // 원시 값 프로퍼티
        bark() { return 'Woof!'; }         // ES6 함수 프로퍼티(메서드)
    };
    console.log(o);
}


// this 키워드
{
    const o = {
        name: 'Wallace',
        speak() { return `My name is ${this.name}!`; },     // this는 o에 묶임
    };
    console.log(o.speak());
}
{
    const o = {
        name: 'Wallace',
        speak() { return `My name is ${this.name}!`; },     // this는 o에 묶임
    };
    const speak = o.speak;
    console.log(speak === o.speak);
    console.log(speak());
}
/*
{
    const o = {
        name: 'Julie',
        greetBackwards: function () {
            function getReverseName() {
                let nameBackwards = '';
                for (let i = this.name.length - 1; i >= 0; i--) {   // this가 o가 아닌 다른 것에 묶임, 하지만 스트릭트 모드인지 아닌지에 따라 다름
                    nameBackwards += this.name[i];
                }
                return nameBackwards;
            }
            return `${getReverseName()} si eman ym ,olleH`;
        },
    };
    o.greetBackwards();
}
*/
{
    const o = {
        name: 'Julie',
        greetBackwards: function () {
            const self = this;
            function getReverseName() {
                let nameBackwards = '';
                for (let i = self.name.length - 1; i >= 0; i--) {
                    nameBackwards += self.name[i];
                }
                return nameBackwards;
            }
            return `${getReverseName()} si eman ym ,olleH`;
        },
    };
    console.log(o.greetBackwards());
}
{
    const str = "mynameis";
    console.log(str[0], str[str.length - 1]);
}


// 함수 표현식과 익명 함수
{
    const f = function () {
        console.log("fun");
    };
    f();
    const g = function f1() {
        console.log("fun1");
    };
    // f1(); 에러
    g();
}
/*
    재귀
{
    const g = function f1(stop) {
        if (stop) console.log("f stopped");
        f1(true);
    };
    g(false);
}
*/


// 화살표 표기법
{
    const f1 = function () { return "hello!"; };
    // 또는 
    const f2 = () => "hello!";
    console.log(f1(), f2());

    const f3 = function (name) { return `Hello, ${name}!`; };
    // 또는
    const f4 = name => `Hello, ${name}!`;
    console.log(f3("seong il"), f4("seong il"));

    const f5 = function (a, b) { return a + b; };
    // 또는
    const f6 = (a, b) => a + b;
    console.log(f5(1, 2), f6(1, 2));

    const f7 = () => { };   // 매개변수나 블록에 내용이 없으면 (), {}는 반드시 필요함
    console.log(f7());
}
{
    // 화살표 함수와 일반적인 함수의 차이
    // this가 다른 변수와 마찬가지로, 정적으로 묶임
    // 화살표 함수를 사용하면 내부 함수 안에서 this를 사용할 수 있음
    const o = {
        name: 'Julie',
        greetBackwards: function () {
            const getReverseName = () => {
                let nameBackwards = '';
                for (let i = this.name.length - 1; i >= 0; i--) {
                    nameBackwards += this.name[i];
                }
                return nameBackwards;
            };
            return `${getReverseName()} si eman ym ,olleH`;
        },
    };
    console.log(o.greetBackwards());
}


// call과 apply, bind
{
    const bruce = { name: "Bruce" };
    const madeline = { name: "Madeline" };

    // 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
    function greet() {
        return `Hello, I'm ${this.name}!`;
    }
    console.log(greet());               // "Hello, I'm undefined!" - this는 어디에도 묶이지 않았음
    console.log(greet.call(bruce));     // "Hello, I'm Bruce!" - this는 bruce
    console.log(greet.call(madeline));  // "Hello, I'm Madeline!" - this는 madeline

    // call의 첫 번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달
    function update(birthYear, occupation) {
        this.birthYear = birthYear;
        this.occupation = occupation;
    }
    update.call(bruce, 1949, 'singer');
    // bruce는 이제 { name: "Bruce, birthYear: 1949, occupation: "singer" }
    update.call(madeline, 1942, 'actress');
    // madeline 이제 { name: "Madeline, birthYear: 1942, occupation: "actress" }
    console.log(bruce);
    console.log(madeline);

    update.apply(bruce, [1955, "actor"]);
    // bruce는 이제 { name: "Bruce, birthYear: 1955, occupation: "actor" }
    update.apply(madeline, [1918, "writer"]);
    // madeline 이제 { name: "Madeline, birthYear: 1918, occupation: "writer" }
    console.log(bruce);
    console.log(madeline);

    const arr = [2, 3, -5, 15, 7];
    console.log(Math.min.apply(null, arr));     // this와 관계없이 동작
    console.log(Math.max.apply(null, arr));
    console.log(Math.min.apply(arr, arr));
    console.log(Math.max.apply(arr, arr));

    const newBruce = [1940, "martial artist"];
    update.call(bruce, ...newBruce);            // apply(bruce, newBruce)와 같음
    console.log(bruce);
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));

    const updateBruce = update.bind(bruce);
    updateBruce(1904, "actor");
    // bruce는 이제 { name: "Bruce, birthYear: 1904, occupation: "actor" }
    console.log(bruce);
    updateBruce.call(madeline, 1274, "king");
    // bruce는 이제 { name: "Bruce, birthYear: 1274, occupation: "king" }
    // madeline은 변하지 않음
    console.log(bruce);
    console.log(madeline);

    const updateBruce1949 = update.bind(bruce, 1949);
    updateBruce1949("singer, songwriter");
    // bruce는 이제 { name: "Bruce, birthYear: 1949, occupation: "singer, songwriter" }
    console.log(bruce);

    const updateBruce1949Singer = update.bind(bruce, 1949, "singer");
    updateBruce1949Singer("chef");
    // bruce는 이제 { name: "Bruce, birthYear: 1949, occupation: "singer" }
    console.log(bruce);
}