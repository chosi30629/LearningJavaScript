require('core-js/fn/array/values');

{
    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up above the world you fly,",
        "Like a tea tray in the sky.",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];

    const it = book.values();
    // console.log(it.next());  { value: "Twinkle, twinkle, little bat!", done: false }
    // console.log(it.next());  { value: "How I wonder what you're at!", done: false }
    // console.log(it.next());  { value: "Up above the world you fly,", done: false }
    // console.log(it.next());  { value: "Like a tea tray in the sky.", done: false }
    // console.log(it.next());  { value: "Twinkle, twinkle, little bat!", done: false }
    // console.log(it.next());  { value: "How I wonder what you're at!", done: false }
    // console.log(it.next());  { value: undefined, done: true }

    let current = it.next();
    while (!current.done) {
        console.log(current.value);
        current = it.next();
    }
}
{
    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up above the world you fly,",
        "Like a tea tray in the sky.",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];
    const it1 = book.values();
    const it2 = book.values();
    // 어느 이터레이터도 아직 시작하지 않음

    // it1으로 두 페이지를 읽음
    console.log(it1.next());    // { value: "Twinkle, twinkle, little bat!", done: false }
    console.log(it1.next());    // { value: "How I wonder what you're at!", done: false }

    // it2로 한 페이지를 읽음
    console.log(it2.next());    // { value: "Twinkle, twinkle, little bat!", done: false }

    // it1으로 한 페이지를 더 읽음
    console.log(it1.next());    // { value: "Up above the world you fly,", done: false }
}


// 이터레이션 프로토콜
{
    class Log {
        constructor() {
            this.messages = [];
        }
        add(message) {
            this.messages.push({ message, timestap: Date.now() });
        }
        [Symbol.iterator]() {
            return this.messages.values();
        }
    }

    const log = new Log();
    log.add("first day at sea");
    log.add("spotted whale");
    log.add("spotted another vessel");

    // 로그를 배열처럼 순회
    for (let entry of log) {
        console.log(`${entry.message} @ ${entry.timestap}`);
    }
}
{
    class Log {
        constructor() {
            this.messages = [];
        }
        add(message) {
            this.messages.push({ message, timestap: Date.now() });
        }
        [Symbol.iterator]() {
            let i = 0;
            const messages = this.messages;
            return {
                next() {
                    if (i >= messages.length)
                        return { value: undefined, done: true };
                    return { value: messages[i++], done: false };;
                }
            };
        }
    }
}
{
    class FibonacciSequence {
        [Symbol.iterator]() {
            let a = 0, b = 1;
            return {
                next() {
                    let rval = { value: b, done: false };
                    b += a;
                    a = rval.value;
                    return rval;
                }
            };
        }
    }
    const fib = new FibonacciSequence();
    let i = 0;
    for (let n of fib) {
        console.log(n);
        if (++i > 9) break;
    }
}


// 제네레이터
{
    function* rainbow() {       // * 기호는 제네레이터 문법입니다.
        yield 'red';
        yield 'orange';
        yield 'yellow';
        yield 'green';
        yield 'blue';
        yield 'indigo';
        yield 'violet';
    }

    const it = rainbow();
    console.log(it.next());      // { value: "red", done: false }
    console.log(it.next());      // { value: "orange", done: false }
    console.log(it.next());      // { value: "yellow", done: false }
    console.log(it.next());      // { value: "green", done: false }
    console.log(it.next());      // { value: "blue", done: false }
    console.log(it.next());      // { value: "indigo", done: false }
    console.log(it.next());      // { value: "violet", done: false }
    console.log(it.next());      // { value: undefined, done: true }

    for (let color of rainbow()) {
        console.log(color);
    }
}
{
    function* interrogate() {
        const name = yield "What is your name?";
        const color = yield "What is your favorite color?";
        return `${name}'s fovaroite color is ${color}`;
    }

    const it = interrogate();
    console.log(it);
    console.log(it.next());                  // { value: "What is your name?", done: false }
    console.log(it.next('Ethan'));           // { value: "What is your favorite color?", done: false }
    console.log(it.next('orange'));          // { value: "Ethan's fovaroite color is orange", done: false }
}
/*
{
    1. 제너레이터는 이터레이터를 반환(return)하고 일시 정지한 상태로 시작
    function* interrogate() {                                  * let it = interrogate();
        const name = yield "What is your name?";               it.next();
        const color = yield "What is your favorite color?";    it.next('Ethan');
        return `${name}'s fovaroite color is ${color}`;        it.next('orange');
    }

    2. undefined를 제너레이터에 넘김(이 값은 사용되지 않음). 제너레이터는 'What is your name?'을 넘기고(yield) 일시 정지
    function* interrogate() {                                  let it = interrogate();
        const name = yield "What is your name?";               * it.next();
        const color = yield "What is your favorite color?";    it.next('Ethan');
        return `${name}'s fovaroite color is ${color}`;        it.next('orange');
    }

    3. "Ethan"을 제너레이터에 넘김. 제너레이터는 "What is your favorite color?"를 넘기고 일시 정지
    function* interrogate() {                                  let it = interrogate();
        const name = yield "What is your name?";               it.next();
        const color = yield "What is your favorite color?";    * it.next('Ethan');
        return `${name}'s fovaroite color is ${color}`;        it.next('orange');
    }

    4. "orange"를 제너레이터에 넘김. 제너레이터는 ":"Ethan's favorite color is orange"를 반환하고 멈춤
    function* interrogate() {                                  let it = interrogate();
        const name = yield "What is your name?";               it.next();
        const color = yield "What is your favorite color?";    it.next('Ethan');
        return `${name}'s fovaroite color is ${color}`;        * it.next('orange');
    }
}
제너레이터는 화살표 표기법으로 만들 수 없으며 반드시 fucntion*을 써야 함
*/

{
    function* abc() {
        yield 'a';
        yield 'b';
        return 'c';
    }

    const it = abc();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    // 제너레이터를 사용할 때는 보통 done이 true이면 value 프로퍼티에 주의를 기울이지 않는다는 점을 염두
    // "a"와 "b"는 출력되지만 "c"는 출력되지 않음
    for (let l of abc())
        console.log(l);
    // 제너레이터에서 중요한 값은 return으로 반환 하지말고 반환하는 값을 사용하려 할 때는 yield를 써야 하고, return은 제너레이터를 중간에 종료하는 목적으로만 사용
    // 제너레이터에 return을 쓸 때는 반환값을 쓰지 않는 습관을 들이길 권함    
}

