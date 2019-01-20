// 배열의 기초
{
    // 배열 리터럴
    const arr1 = [1, 2, 3];                             // 숫자로 구성된 배열
    const arr2 = ["one", 2, "three"];                   // 비균질적 배열
    const arr3 = [[1, 2, 3], ["one", 2, "three"]];      // 배열을 포함한 배열
    const arr4 = [                                      // 비균질적 배열
        { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
        [
            { name: "Susan", type: "object" },
            { name: "Anthony", type: "object" },
        ],
        1,
        function () { return "arrays can contain functions too" },
        "three",
    ];
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열 요소에 접근하기
    console.log(arr1[0]);           // 1
    console.log(arr1[2]);           // 3
    console.log(arr3[1]);           // ["one", 2, "three"]
    console.log(arr4[1][0]);        // { name: "Susan", type: "object" }

    // 배열 길이
    console.log(arr1.length);       // 3
    console.log(arr4.length);       // 5
    console.log(arr4[1].length);    // 2

    // 배열 길이 늘리기
    arr1[4] = 5;
    console.log(arr1);              // [1, 2, 3, <1 empty item>, 5]
    console.log(typeof arr1[3]);    // undefined
    console.log(arr1.length);       // 5

    // 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않음
    console.log(arr2[10]);              // undifined
    console.log(arr2.length);           // 3

    // Array 생성자(거의 사용하지 않음)
    const arr5 = new Array();           // 빈 배열
    const arr6 = new Array(1, 2, 3);    // [1, 2, 3]
    const arr7 = new Array(2);          // 길이가 2인 배열, 요소는 모두 undefined
    const arr8 = new Array("2");        // ["2"]
    console.log(arr5);
    console.log(arr6);
    console.log(arr7);
    console.log(arr8);
}


// 배열 요소 조작
{
    // (수정) 배열 자체를 수정
    const arr = ["b", "c", "d"];
    arr.push("e");                  // 4. arr은 이제 ["b", "c", "d", "e"]
    console.log(arr);
    arr.pop();                      // "e". arr은 이제 ["b", "c", "d"]
    console.log(arr);
    arr.unshift("a");               // 4. arr은 이제 ["a", "b", "c", "d"]
    console.log(arr);
    arr.shift();                    // "a". arr은 이제 ["b", "c", "d"] 
    console.log(arr);
}

{
    // (사본)원래 배열은 바뀌지 않고 변경된 내용을 반환
    const arr = [1, 2, 3];
    console.log(arr.concat(4, 5, 6));       // [1, 2, 3, 4, 5, 6]
    console.log(arr);
    console.log(arr.concat([4, 5, 6]));     // [1, 2, 3, 4, 5, 6]
    console.log(arr);
    console.log(arr.concat([4, 5], 6));     // [1, 2, 3, 4, 5, 6]
    console.log(arr);
    console.log(arr.concat([4, [5, 6]]));   // [1, 2, 3, 4, [5, 6]]
    console.log(arr);
}

{
    // (사본) 배열 일부 가져오기
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.slice(3));              // [4, 5]
    console.log(arr.slice(2, 4));           // [3, 4]
    console.log(arr.slice(3, 4));           // [4]
    console.log(arr.slice(-1));             // [5]
    console.log(arr.slice(-2));             // [4, 5]
    console.log(arr.slice(-3));             // [3, 4, 5]
    console.log(arr.slice(1, -2));          // [2, 3]
    console.log(arr.slice(-2, -1));         // [4]
}

{
    // (수정) 임의의 위치에 요소 추가하거나 제거하기
    // 첫 번째 매개변수는 수정을 시작할 인덱스, 두 번째는 제거할 요소 숫자, 아무 요소 제거하지 않을 때는 0, 나머지 매겨변수는 배열에 추가될 요소
    const arr = [1, 5, 7];
    arr.splice(1, 0, 2, 3, 4);              // []. arr은 이제 [1, 2, 3, 4, 5, 7]
    console.log(arr);
    arr.splice(5, 0, 6);                    // []. arr은 이제 [1, 2, 3, 4, 5, 6, 7]
    console.log(arr);
    arr.splice(1, 2);                       // []. arr은 이제 [1, 4, 5, 6, 7]
    console.log(arr);
    arr.splice(2, 1, 'a', 'b');             // []. arr은 이제 [1, 4, 'a', 'b', 6, 7]
    console.log(arr);
}

{
    // (수정) 배열 안에서 요소 교체하기
    const arr = [1, 2, 3, 4];
    arr.copyWithin(1, 2);                   // arr은 이제 [1, 3, 4, 4]
    console.log(arr);
    arr.copyWithin(2, 0, 2);                // arr은 이제 [1, 3, 1, 3]
    console.log(arr);
    arr.copyWithin(0, -3, -1);              // arr은 이제 [3, 1, 1, 3]
    console.log(arr);
}

{
    // (수정) 특정 값으로 배열 채우기
    const arr = new Array(5).fill(1);       // arr이 [1, 1, 1, 1, 1]로 초기화
    arr.fill("a");                          // arr은 이제 ["a", "a", "a", "a", "a"]
    console.log(arr);
    arr.fill("b", 1);                       // arr은 이제 ["a", "b", "b", "b", "b"]
    console.log(arr);
    arr.fill("c", 2, 4);                    // arr은 이제 ["a", "a", "c", "c", "a"]
    console.log(arr);
    arr.fill(5.5, -4);                      // arr은 이제 ["a", 5.5, 5.5, 5.5, 5.5]
    console.log(arr);
    arr.fill(0, -3, -1);                    // arr은 이제 ["a", 5.5, 0, 0, 5.5]
    console.log(arr);
}

{
    // (수정) 배열 정렬과 역순 정렬
    const arr = [1, 2, 3, 4, 5];
    arr.reverse();                          // arr은 이제 [5, 4, 3, 2, 1]
    console.log(arr);
}
{
    const arr = [5, 3, 2, 4, 1];            // arr은 이제 [1, 2, 3, 4, 5]
    arr.sort();
    console.log(arr);
    arr.sort().reverse();
    console.log(arr);
}
{
    const arr = [{ name: "Suzanne" }, { name: "Jim" }, { name: "Trevor" }, { name: "Amanda" }];
    arr.sort();                                     // arr은 바뀌지 않음
    console.log(arr);
    arr.sort((a, b) => a.name > b.name);            // arr은 name 프로퍼티의 알파벳 순으로 정렬
    console.log(arr);
    arr.sort((a, b) => a.name[1] < b.name[1]);      // arr은 name 프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬
    console.log(arr);
}


// 배열 검색
{
    const o = { name: "Jerry" };
    const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
    console.log(arr.indexOf(5));
    console.log(arr.lastIndexOf(5));
    console.log(arr.indexOf("a"));
    console.log(arr.lastIndexOf("a"));
    console.log(arr.indexOf({ name: "Jerry" }));
    console.log(arr.indexOf(o));
    console.log(arr.indexOf([1, 2]));
    console.log(arr.indexOf("9"));
    console.log(arr.indexOf(9));

    console.log(arr.indexOf("a", 5));
    console.log(arr.indexOf(5, 5));
    console.log(arr.lastIndexOf(5, 4));
    console.log(arr.lastIndexOf(true, 3));

}
{
    const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
    console.log(arr.findIndex(arrObj => arrObj.id === 5));                  // 0
    console.log(arr.findIndex(arrObj => arrObj.name === "Francis"));        // 1
    console.log(arr.findIndex(arrObj => arrObj === 3));                     // -1
    console.log(arr.findIndex(arrObj => arrObj.id === "17"));               // -1
}
{
    const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
    console.log(arr.find(arrObj => arrObj.id === 5));                       // 객체 { id: 5, name: 'Judith' }
    console.log(arr.find(arrObj => arrObj.id === 2));                       // undefined
}
{
    const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
    console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));
}
{
    class Person {
        constructor(name) {
            this.name = name;
            this.id = Person.nextId++;
        }
    }
    Person.nextId = 0;
    const jamie = new Person("Jamie"),
        juliet = new Person("Juliet"),
        peter = new Person("Peter"),
        jay = new Person("Jay");
    const arr = [jamie, juliet, peter, jay];

    // 옵션 1: ID를 직접 비교하는 방법
    console.log(arr.find(p => p.id === juliet.id));

    // 옵션 2: "this" 매개변수를 이용하는 방법
    console.log(arr.find(function (p) {
        return p.id === this.id;
    }, juliet));
}
{
    const arr = [5, 7, 12, 15, 17];
    console.log(arr.some(x => x % 2 === 0));                    // true; 12는 짝수
    console.log(arr.some(x => Number.isInteger(Math.sqrt(x)))); // false; 제곱수가 없음
}
{
    const arr = [4, 6, 16, 36];
    console.log(arr.every(x => x % 2 === 0));                   // true; 홀수가 없음
    console.log(arr.every(x => Number.isInteger(Math.sqrt(x)))); // false; 6은 제곱수가 제곱수가 아님
}


// map과 filter
{
    const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
    const names = cart.map(x => x.name);
    const prices = cart.map(x => x.price);
    const discountPrices = prices.map(x => x * 0.8);
    console.log(names);
    console.log(prices);
    console.log(discountPrices);
}
{
    const items = ["Widget", "Gadget"];
    const prices = [9.95, 22.95];
    const cart = items.map((x, i) => ({ name: x, price: prices[i] }));      // 화살표 표기법에서 리터럴의 중괄호를 블록으로 판단하기 때문에 객체를 괄호로 감쌈
    console.log(cart);
}
{
    // 카드 덱을 만든다.
    const cards = [];
    for (let suit of ['H', 'C', 'D', 'S'])   // 하트, 클로버, 다이아몬드, 스페이드
        for (let value = 1; value <= 13; value++)
            cards.push({ suit, value });

    console.log(cards);
    // value가 2인 카드
    console.log(cards.filter(c => c.value === 2));

    // 다이아몬드
    console.log(cards.filter(c => c.suit === 'D'));

    // 킹, 퀸, 주니어
    console.log(cards.filter(c => c.value > 10));

    // 하트의 킹, 퀸, 주니어
    console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));
}
{
    const cards = [];
    for (let suit of ['H', 'C', 'D', 'S'])   // 하트, 클로버, 다이아몬드, 스페이드
        for (let value = 1; value <= 13; value++)
            cards.push({ suit, value });

    function cardToString(c) {
        const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
        const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
        // cardToString을 호출할 때마다 매번 값을 만드는 건 그리 효율적인 방법은 아님
        for (let i = 2; i <= 10; i++) values[i] = i;
        return values[c.value] + suits[c.suit];
    }

    // value가 2인 카드
    console.log(cards.filter(c => c.value === 2).map(cardToString));

    // 하트의 킹, 퀸, 주니어
    console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));
}


// 배열의 마법 reduce
{
    const arr = [5, 7, 2, 4];
    const sum = arr.reduce((a, x) => a += x, 0);
    console.log(sum);
}
{
    const arr = [5, 7, 2, 4];
    const sum = arr.reduce((a, x) => a += x);
    console.log(sum);
}
{
    const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    const alphabetical = words.reduce((a, x) => {
        if (!a[x[0]]) a[x[0]] = [];
        a[x[0]].push(x);
        return a;
    }, {});
    console.log(alphabetical);
}
{
    const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
    // 도널드 커누스가 분산 계산을 위해 만든 알고리즘
    // 컴퓨터 프로그래밍의 예술: 준수치적 알고리즘(개정 3판)
    const stats = data.reduce((a, x) => {
        a.N++;
        let delta = x - a.mean;
        a.mean += delta / a.N;
        a.M2 = + delta * (x - a.mean);
        return a;
    }, { N: 0, mean: 0, M2: 0 });
    if (stats.N > 2) {
        stats.variance = stats.M2 / (stats.N - 1);
        stats.stdev = Math.sqrt(stats.variance);
    }
    console.log(stats);
}
{
    const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
    const longWordss = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "");
    console.log(longWords);
    console.log(longWordss);
}


// 삭제되거나 정의되지 않은 요소들
{
    const arr = Array(10).map(function (x) { return 5 });
    console.log(arr);
}
{
    const arr = [1, 2, 3, 4, 5];
    delete arr[2];
    console.log(arr.map(x => 0));   // [0, 0, undefined, 0, 0]
}


// 문자열 병합
{
    const arr = [1, null, "hello", "world", true, undefined];
    delete arr[3];
    console.log(arr.join());        // "1,,hello,,true,"
    console.log(arr.join(''));      // "1hellotrue"
    console.log(arr.join(' -- '));  // "1 -- -- hello -- -- true --"
    console.log(arr);
}
{
    const attributes = ["Nimble", "Perceptive", "Generous"];
    const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
    console.log(html);
}