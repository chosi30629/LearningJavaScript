// 서브루틴으로서의 함수
{
    const year = new Date().getFullYear();
    if (year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
    else if (year % 100 !== 0) console.log(`${year} is a leap year.`);
    else if (year % 400 !== 0) console.log(`${year} is NOT a leap year.`);
    else console.log(`${year} is a leap year`);
}
{
    function printLeapyearStatus() {
        const year = new Date().getFullYear();
        if (year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
        else if (year % 100 !== 0) console.log(`${year} is a leap year.`);
        else if (year % 400 !== 0) console.log(`${year} is NOT a leap year.`);
        else console.log(`${year} is a leap year`);
    }
    printLeapyearStatus();
}


// 값을 반환하는 서브루틴으로서의 함수
{
    function isCurrentYearLeapYear() {
        const year = new Date().getFullYear();
        if (year % 4 !== 0) return false;
        else if (year % 100 !== 0) return true;
        else if (year % 400 !== 0) return false;
        else return true;
    }
    console.log(isCurrentYearLeapYear());

    const daysInMonth = [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    console.log(daysInMonth);
    if (isCurrentYearLeapYear()) console.log('It is a leap year.');
}


// 함수로서의 함수
{
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    function getNextRainbowColor() {
        if (++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    }
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());
}
{
    function isLeapYear(year) {
        if (year % 4 !== 0) return false;
        else if (year % 100 !== 0) return true;
        else if (year % 400 !== 0) return false;
        else return true;
    }
    console.log(isLeapYear(2019));
}
{
    const getNextRainbowColor = (function () {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let colorIndex = -1;
        return function () {
            if (++colorIndex >= colors.length) colorIndex = 0;
            return colors[colorIndex];
        };
    })();
    console.log(getNextRainbowColor());
}
/*
{
    setInterval(function() {
        document.querySelector('.rainbow')
        .style['background-color'] = getNextRainbowColor();
    }, 500)
}
*/
{
    function getRainbowIterator() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let colorIndex = -1;
        return {
            next() {
                if (++colorIndex >= colors.length) colorIndex = 0;
                return { value: colors[colorIndex], done: false };
            }
        };
    }
    const rainbowIterator = getRainbowIterator();
    console.log(rainbowIterator.next());
    console.log(rainbowIterator.next());
    console.log(rainbowIterator.next());
    console.log(rainbowIterator.next());
    console.log(rainbowIterator.next());
}
/*
{
    function getRainbowIterator() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let colorIndex = -1;
        return {
            next() {
                if (++colorIndex >= colors.length) colorIndex = 0;
                return { value: colors[colorIndex], done: false };
            }
        };
    }
    const rainbowIterator = getRainbowIterator();
    setInterval(function() {
        document.querySelector('.rainbow')
        .style['background-color'] = rainbowIterator.next().value;
    }, 500)
}
*/


// 그래서?
{
    // 자바스크립트 함수는 Function 객체의 인스턴스
    const fn = function () { };
    const arr = [];

    console.log(typeof fn);
    console.log(typeof arr);
    console.log(fn instanceof Object);
    console.log(arr instanceof Object);
}


// IIFE와 비동기적 코드
// {
//     setTimeout(() => { console.log("hello"); }, 1500);
// }
// {
//     var i;
//     for (i = 5; i >= 0; i--) {
//         setTimeout(() => {
//             console.log(i === 0 ? "go!" : i);
//         }, (5 - i) * 1000);
//     }
// }
// {
//     function loopBody(i) {
//         setTimeout(() => {
//             console.log(i === 0 ? "go!" : i);
//         }, (5 - i) * 1000);
//     }

//     var i;
//     for (i = 5; i >= 0; i--) {
//         loopBody(i);
//     }
// }
// {
//     var i;
//     for (i = 5; i >= 0; i--) {
//         (i => {
//             setTimeout(() => {
//                 console.log(i === 0 ? "go!" : i);
//             }, (5 - i) * 1000);
//         })(i);
//     }
// }
{
    for (let i = 5; i >= 0; i--) {
        setTimeout(() => {
            console.log(i === 0 ? "go!" : i);
        }, (5 - i) * 1000);
    }
}


// 변수로서의 함수
{
    function addThreeSquareAddFiveTakeSquareRoot(x) {
        // 설마 이런 이름을 짓지는 않겠지만...
        return Math.sqrt(Math.pow(x + 3, 2) + 5);
    }
    console.log(addThreeSquareAddFiveTakeSquareRoot(5));

    // 별명을 쓰기 전
    const answer = (addThreeSquareAddFiveTakeSquareRoot(5) + addThreeSquareAddFiveTakeSquareRoot(2)) / addThreeSquareAddFiveTakeSquareRoot(7);

    // 별명을 쓰면 이렇게 바뀜
    const f = addThreeSquareAddFiveTakeSquareRoot;
    const answer1 = (f(5) + f(2)) / f(7);

    console.log(answer);
    console.log(answer1);
}
{
    const Money = require('math-money');        // require는 라이브러리를 불러오는 노드 함수
    const oneDollar = Money.Dollar(1);
    console.log(oneDollar);
    // Money.Dollar도 길게 느껴지면 이렇게 해도 됨
    const Dollar = Money.Dollar;
    const twoDollas = Dollar(2);
    console.log(twoDollas);
    // oneDollar와 twoDollars는 같은 타입의 인스턴스
}

{
    const sin = Math.sin;
    const cos = Math.cos;
    const theta = Math.PI / 4;
    const zoom = 2;
    const offset = [1, -3];

    const pipeline = [
        function rotate(p) {
            return {
                x: p.x * cos(theta) - p.y * sin(theta),
                y: p.x * sin(theta) + p.y * cos(theta),
            };
        },
        function scale(p) {
            return { x: p.x * zoom, y: p.y * zoom };
        },
        function translate(p) {
            return { x: p.x + offset[0], y: p.y + offset[1] };
        },
    ];

    // 이제 pipeline은 2D 변형에 필요한 함수의 배열
    // 점 하나를 변경
    const p = { x: 1, y: 1 };
    let p2 = p;
    for (let i = 0; i < pipeline.length; i++) {
        p2 = pipeline[i](p2);
        console.log(p2);
    }

    // p2는 이제 p1을 좌표 원점 기준으로 45도 회전하고(rotate)
    // 원점에서 2 단위만큼 떨어뜨린 후(scale)
    // 1단위 오른쪽, 3단위 아래쪽으로 움직인 점
}

{
    function sum(arr, f) {
        // 함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 씀
        if (typeof f != 'function') f = x => x;

        return arr.reduce((a, x) => a += f(x), 0);
    }

    console.log(sum([1, 2, 3]));                        // 6
    console.log(sum([1, 2, 3], x => x * x));            // 14
    console.log(sum([1, 2, 3], x => Math.pow(x, 3)));   // 36
}

{
    function sum(arr, f) {
        if (typeof f != 'function') f = x => x;

        return arr.reduce((a, x) => a += f(x), 0);
    }

    function sumOfSquares(arr) {
        return sum(arr, x => x * x);
    }
    const fs = sumOfSquares([1, 2, 3]);
    console.log(fs);
}
{
    function sum(arr, f) {
        if (typeof f != 'function') f = x => x;

        return arr.reduce((a, x) => a += f(x), 0);
    }

    function newSummer(f) {
        return arr => sum(arr, f);
    }

    const sumOfSquares = newSummer(x => x * x);
    const sumOfcubes = newSummer(x => Math.pow(x, 3));
    console.log(sumOfSquares([1, 2, 3]));               // returns 14
    console.log(sumOfcubes([1, 2, 3]));                 // returns 36
}


// 재귀
{
    function findNeedle(haystack) {
        if (haystack.length === 0) return "no haystack here!";
        if (haystack.shift() === 'needle') return "found it!";
        return findNeedle(haystack);    // 건초더미에 들어있는 건초가 하나 줄음
    }

    console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']));
}
{
    function fact(n) {
        if (n === 1) return 1;
        return n * fact(n - 1);
    }
    console.log(fact(5));
}