// 변수와 상수와 리터럴
let currentTempC = 22;  // 섭씨 온도
currentTempC = 22.5;
let targetTempC, room1 = "conference_room_a", room2 = "lobby";
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
let currentRoom = room1;
console.log(currentTempC, targetTempC, room1, room2, ROOM_TEMP_C, MAX_TEMP_C, currentRoom);


// 숫자
let count = 10;         // 숫자 리터럴. count는 더블
const blue = 0x0000ff;  // 16진수. 16진수 ff는 10진수 255와 같음
const umask = 0o0022;   // 8진수. 8진수 22는 십진수 18과 같음
const roomTemp = 21.5;  // 십진수
const c = 3.0e6;        // 지수 (3.0 * 10^6 = 3,000,000)
const e = -1.6e-19;     // 지수 (-1.6 * 10^-19 = 0.00000000000000000016)
const Inf = Infinity;
const nInf = -Infinity;
const Nan = NaN;        // "숫자가 아님"
console.log(count, blue, umask, roomTemp, c, e, Inf, nInf, Nan);

const small = Number.EPSILON;           // 1에 더했을 때 1과 구분되는 결과를 만들 수 있는 가장 작은 값. 근사치는 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE;           // 표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE;           // 표현할 수 있는 가장 작은 숫자
const ninf = Number.NEGATIVE_INFINITY;  // -Infinity
const nan = Number.NaN;                 // NaN
const inf = Number.POSITIVE_INFINITY;   // Infinity
console.log(small, bigInt, max, minInt, min, ninf, nan, inf);


// 문자열
const dialog = 'Sam looked up, and said "hello, old friend!", as Max walke in.';
const imperative = "Don't do that!";
console.log(dialog, imperative);

const dialog1 = "Sam looked up and said \"don't do that!\" to Max.";
const dialog2 = 'Sam looked up and said "don\'t do that!" to Max.';
console.log(dialog1, dialog2);

const backslash = "In JavaScript, use \\ as an escape character in strings.";
console.log(backslash);


// 특수문자
console.log("Ling1\nLine2");
console.log("windows line 1\r\nWindow line 2");
console.log("Speed:\t60kph");
console.log("Don\'t");
console.log('Sam said \"hello\"');
console.log(`New in ES6: \` string.`);
console.log(`New in ES6: ${dialog}`);
console.log("Use \\\\ to represent \\!");
console.log("De Morgan's law: \u2310(P \u22c0Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)");    // 임의의 유니코드 코드 포인트
console.log("\xc9p\xe9e is fun, but foil is more fun.");    // 라틴 -1 문자
console.log("ASCII NUL: \0");       // NUL 문자(ASCII/Unicode 0)
console.log("Vertical tab: \v");    // 세로 탭(ASCII/Unicode 11)
console.log("Backspace: \b ");      // 백스페이스(ASCII/Unicode 8)
console.log("Form feed: \f");       // 폼 피드(ASCII/Unicode 12)

let currentTemp = 19.5;
const message1 = "The current temperature is " + currentTemp + "\u00b0C";                   // 00b0는 온도를 나타내는 유니코드 코드 포인트
const message2 = `The current temperature is ${currentTemp}\u00b0C \t \${currentTemp}`;
console.log(message1);
console.log(message2);

const multiline1 = "line1\
line2";
const multiline2 = "line1\n\
line2";
const multiline3 = `line1
line2`;
const multiline4 = `line1
    line2
    line3`;
console.log(multiline1);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);
const multiline5 = "line1\n" +
    "line2\n" +
    "line3";
console.log(multiline5);
const multiline6 = 'Current temperature:\n' +
    `\t${currentTemp}\u00b0C\n` +
    "Don't worry...the heat is on!";
console.log(multiline6);

const result1 = 3 + '30';       // 3이 문자열로 바뀝니다. 결과는 문자열 '330'입니다.
const result2 = 3 - '30';       // '30'이 숫자로 바뀝니다. 결과는 숫자 -27입니다.
const result3 = 3 * '30';       // '30'이 숫자로 바뀝니다. 결과는 숫자 90입니다.
const result4 = 3 / '30';       // '30'이 숫자로 바뀝니다. 결과는 숫자 0.1입니다.
console.log(result1, result2, result3, result4);


// 불리언
let heating = true;
let cooling = false;
let heating1 = "true";
let cooling1 = "false";
console.log(heating, cooling, heating1, cooling1);


// 심볼
const RED = Symbol("The color of a sunset!");       // Symbol은 new 키워드를 사용하지 않음
const ORANGE = Symbol("The color of a sunset!");    // 심볼은 항상 유일하며 다른 어떤 심볼과도 일치하지 않음. 객체와 유사
console.log("RED === ORANGE:", RED === ORANGE);     // false: 심볼은 모두 서로 다름


// null과 undefined
let currentTemp1;           // 암시적으로 undefined
console.log(currentTemp1);
const targetTemp1 = null;   // 대상 온도는 null, 즉 "아직 모르는" 값
console.log(targetTemp1);
currentTemp1 = 19.5;        // currentTemp1에는 이제 값이 있음
console.log(currentTemp1);
currentTemp1 = undefined;   // currentTemp1은 초기화되지 않은 듯함. 권장하지 않음. null을 사용하는 것이 권장
console.log(currentTemp1);


// 객체
const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;
obj["not an identifier"];   // 3
obj["color"];

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);
console.log(obj.SIZE);  // 점 연산자는 문자열 프로퍼티에 대해서만 동작함
console.log(obj[SIZE]);

const sam1 = {
    name: 'Sam',
    age: 4,
};
console.log(sam1);
const sam2 = { name: 'Sam', age: 4 };
console.log(sam2);
const sam3 = {
    name: 'Sam',
    classification: {           // 프로퍼티 값도 객체가 될 수 있음
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};
console.log(sam3);
console.log(sam3.classification.family);        // "Felidae"
console.log(sam3["classification"].family);     // "Felidae"
console.log(sam3.classification["family"]);     // "Felidae"
console.log(sam3["classification"]["family"]);  // "Felidae"

sam3.speak = function () { return "Meow!"; };
console.log(sam3.speak());

delete sam3.classification;     // classification 트리 전체가 삭제
console.log(sam3);
delete sam3.speak;              // speak 함수가 삭제
console.log(sam3);


// Number, String, Boolean 객체
const ss = "hello";
console.log(ss.toUpperCase());  // "HELLO"  자바스크립트가 일시적인 String 객체를 만들고 함수 호출 시 임시 객체 즉시 파괴
ss.rating = 3;                  // 에러가 없음. 성공?
console.log(ss.rating);         // undefined        


// 배열
const a1 = [1, 2, 3, 4];                // 숫자로 구성된 배열
console.log(a1);
const a2 = [1, 'two', 3, null];         // 여러 가지 타입으로 구성된 배열
console.log(a2);
const a3 = [                            // 여러 줄로 정의한 배열
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare tis deadly terrors clasp?",
];
console.log(a3);
const a4 = [                            // 객체가 들어있는 배열
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
console.log(a4);
const a5 = [                            // 배열이 들어있는 배열
    [1, 3, 5],
    [2, 4, 6],
];
console.log(a5);

const arr = ['a', 'b', 'c'];
console.log(arr.length);                // 3
console.log(arr[0]);                    // 'a'
console.log(arr[arr.length - 1]);       // 'c'

const arr1 = [1, 2, 'c', 4, 5];
arr1[2] = 3;
console.log(arr1);


// 객체와 배열 마지막의 쉼표
const arr2 = [
    "One",
    "Two",
    "Three",
];
const arr3 = {
    One: 1,
    Two: 2,
    Three: 3,
};                  // 배열과 객체 리터럴의 마지막 쉼표를 쓰느냐 마느냐는 팀의 스타일 가이드나 내 스타일 대로 쓰거나 안쓰거나 정하면 됨. JSON에서는 마지막 쉼표 허용 안함.
console.log(arr2);
console.log(arr3);


// 날짜
const now = new Date();
console.log(now.toString());       // 현재 날짜와 시간

const halloween = new Date(2016, 9, 3);    // 월은 0에서 시작하므로 9는 10월
console.log(halloween.toString());

const halloweenParty = new Date(2016, 9, 31, 19, 0);    // 19:00 = 7:00 pm
console.log(halloweenParty.toString());

console.log(halloweenParty.getFullYear());      // 2016
console.log(halloweenParty.getMonth());         // 9
console.log(halloweenParty.getDate());          // 31
console.log(halloweenParty.getDay());           // 1 (월요일. 0은 일요일)
console.log(halloweenParty.getHours());         // 19
console.log(halloweenParty.getMinutes());       // 0
console.log(halloweenParty.getSeconds());       // 0
console.log(halloweenParty.getMilliseconds());  // 0


// 정규표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;     // 극히 간단한 이메일 정규표현식
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
console.log(email);
console.log(phone);


// 데이터 타입 변환
const numStr = "33.3";
const nums = Number(numStr);      // 이 행은 숫자 값을 만든다. Number 객체의 인스턴스가 아니다.
console.log(nums);

const numA = parseInt("16 volts", 10);  // " volts"는 무시됨. 10진수 16
const numB = parseInt("3a", 16);        // 16진수 3a를 10진수로 바꿈. 결과는 58
const numC = parseFloat("15.5 kph");    // " kph"는 무시됨. parseFloat는 항상 기수가 10이라고 가정
console.log(numA, numB, numC);

const DateD = new Date();           // 현재 날짜
const DateTs = DateD.valueOf();     // UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는지 나타내는 숫자
console.log(DateTs);

const bool = true;
const nool = bool ? 1 : 0;
console.log(nool);

const nnn = 33.5;
console.log(nnn);                   // 33.5 - 숫자
const sss = nnn.toString();
console.log(sss);                   // "33.5" - 문자열

const arr4 = [1, true, "hello"];
console.log(arr4.toString());       // "1,true,hello"

const nnnn = 0;                     // 거짓 같은 값
const bbbb1 = !!nnnn;               // false
const bbbb2 = Boolean(nnnn);        // false. 여기서도 new 키워드는 사용하지 않음
console.log(nnnn, bbbb1, bbbb2);


/*
    자바스크립트에는 문자열, 숫자, 배열, null, undefined, 심볼 등의 여섯 가지 원시 타입과 객체 타입이 있다.
    자바스크립트의 모든 숫자는 배정도 부동소숫점 숫자(더블)이다.
    배열은 특수한 객체이며, 객체와 마찬가지로 매우 강력하고 유연한 데이터 타입이다.
    날짜, 맵, 셋, 정규표현식 등 자주 사용할 다른 데이터 타입들은 특수한 객체 타입이다.
*/


// 참조형과 원시형
let aa = 1;             // 원본
let bb = aa;            // 사본. bb는 1이다. aa가 아니다.
aa = 2;                 // 원본의 값을 바꿈
console.log(bb);        // 1. 사본의 값은 바뀌지 않음.
console.log(aa === 2);  // true

function change(aa) {
    aa = 5;
}

aa = 3;
change(aa);             // 값 자체를 전달하므로 함수 안에서 변수의 값이 바뀌어도 함수 외부에서는 바뀌지 않은 상태로 남음
console.log(aa);        // 3

let oo = { a: 1 };
let pp = oo;            // 이제 pp는 oo가 '가리키고 있는 것'을 가리킨다.
oo.a = 2;
console.log(pp);        // { a: 2 }
console.log(pp === oo); // true
oo.a = 3;
oo = { a: 3 };          // 이제 o는 다른 것을 가리킨다. { a: 1 }을 수정한 것이 아님
console.log(pp === oo); // false
console.log(pp);        // { a: 2 }

let qq = { a: 1 };
console.log(qq === { a: 1 });    // false. 객체를 가리키는 변수는 그 객체를 가리키고 있을 뿐, 객체가 아님. 따라서 변수와 객체는 일치하지 않음

function change_tt(tt) {
    tt.a = 999;
}
let tt = { a: 1 };
change_tt(tt);              // 참조를 전달하므로 함수 안에서 객체를 변경하면 함수 외부에서도 바뀜
console.log(tt);            // { a: 999 }