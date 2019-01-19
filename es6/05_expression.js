let x, y;
y = x = 3 * 5;  // 원래 문. 곱셈 표현식을 평가
y = x = 15;     // 첫 번째 할당을 평가. x는 이제 15, y는 아직 undefined
y = 15;         // 두 번째 할당을 평가. y는 이제 15
15;             // w전체 문의 결과는 15. 이 값은 사용하지도 않았고 어딘가에 할당하지도 않았으니 그냥 버려짐
console.log(x, y);


// 산술 연산자
const xx = 5;
const yy = 3 - -xx;
console.log(yy);        // y는 8

const s = "5";
const yyy = 3 + +s;
console.log(yyy);       // y는 8. 단항 플러스를 사용하지 않았다면 문자열 병합이 일어나서 결과는 "35"가 됨.

// 여기서는 굳이 단항 플러스가 필요하지 않지만 줄을 잘 맞출 수 있음
const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1 * 1;
const p2 = +x2 * 2;
const p3 = +x3 * 3;
const p4 = -x4 * 4;
console.log(p1, p2, p3, p4);

let xxx = 2;
const r1 = xxx++ + xxx++;
//  ((xxx++) + (xxx++))
//  ( 2   + (xxx++))           왼쪽에서 오른쪽으로 진행. x는 지금 3
//  ( 2   +   3 )            x는 지금 4
//        5                  결과는 5, x는 4
const r2 = ++xxx + ++xxx;
//  ((++xxx) + (++xxx))
//  ( 5   + (++xxx))           왼쪽에서 오른쪽으로 진행. x는 지금 5
//  ( 5   +   6 )            x는 지금 6
//        11                 결과는 11, x는 6
const r3 = xxx++ + ++xxx;
//  ((xxx++) + (++xxx))
//  ( 6   + (++xxx))           왼쪽에서 오른쪽으로 진행. x는 지금 7
//  ( 6   +   8 )            x는 지금 8
//        14                 결과는 14, x는 8
const r4 = ++xxx + xxx++;
//  ((++xxx) + (xxx++))
//  ( 9   + (xxx++))           왼쪽에서 오른쪽으로 진행. x는 지금 9
//  ( 9   +   9 )            x는 지금 10
//        18                 결과는 18, x는 10
console.log(r1, r2, r3, r4);

let yyyy = 10;
const r5 = yyyy-- + yyyy--;
const r6 = --yyyy + --yyyy;
const r7 = yyyy-- + --yyyy;
const r8 = --yyyy + yyyy--;
console.log(r5, r6, r7, r8);

// ※ 자바스크립트의 숫자는 모두 더블 형식


// 연산자 우선순위
let xxxxx = 3, yyyyy;
console.log(xxxxx += yyyyy = 6 * 5 / 2);
// 이 표현식을 우선순위에 따라 다음에 일어날 행동에 괄호를 침
//
// 곱셈과 나눗셈. 우선순위 14, 왼쪽에서 오른쪽으로
//      xxxxx += yyyyy = (6*5)/2
//      xxxxx += yyyyy = (30)/2
//      xxxxx += yyyyy = 15
// 할당. 우선순위 3, 오른쪽에서 왼쪽으로
//      xxxxx += (yyyyy = 15)
//      xxxxx += 15             yyyyy는 이제 15
//      18                      xxxxx는 이제 18


// 비교 연산자
// == 같은 동등 연산자 사용하지 말고 === 같은 일치 연산자로 계속 사용하자.
// 일치 연산자를 쓰면 데이터 타입을 바꿔야하는 경우가 있지만 동등 연산자를 써서 불필요한 문제를 초래하는 것 보다 나음
const nn = 5;
const ss = "5";
console.log(nn === ss);         // false 타입이 다름
console.log(nn !== ss);         // true
console.log(nn === Number(ss)); // true 문자열 "5"를 숫자 5로 변환
console.log(nn !== Number(ss)); // false
console.log(nn == ss);          // true 권장하지 않음
console.log(nn != ss);          // false 권장하지 않음

const a = { name: "an object" };
const b = { name: "an object" };
console.log(a === b);           // false 객체는 항상 다름
console.log(a !== b);           // true
console.log(a == b);            // false 권장하지 않음
console.log(a != b);            // true 권장하지 않음

console.log(3 > 5);
console.log(3 >= 5);
console.log(3 < 5);
console.log(3 <= 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 < 5);
console.log(5 <= 5);


// 숫자 비교
console.log(NaN === NaN, NaN == NaN);       // 특별한 숫자형 값 NaN은 그 자신을 포함하여 무엇과도 같지 않음
console.log(null === null, null == null);
console.log(undefined === undefined, undefined == undefined);

/*
let n = 0;
while (true) {      // 이 루프를 세 번째 반복할 때 n의 값은 0.30000000000000004 이므로 테스트는 false이고 무한 루프
    n += 0.1;
    if (n === 0.3) break;
}
console.log(`Stopped at ${n}`);
*/

let n = 0;
while (true) {      // Number.EPSILON(약 2.22e-16)과 관계 연산자를 사용해서 '느슨하게' 비교하고 성공적으로 루프를 빠져나갈 수 있음
    n += 0.1;
    if (Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);


// 문자열 병합
console.log(3 + 5 + "8");     // 문자열 "88"이 됨
console.log("3" + 5 + 8);     // 문자열 "358"이 됨


// 논리 연산자
/*
    거짓 같은 값
    undefined, null, false, 0, NaN, ''(빈 문자열)

    참 같은 값
    모든 객체, valueOf() 메서드를 호출했을 때 false를 반환하는 객체도 참 같은 값에 속함
    배열, 빈 배열도 참 같은 값에 속함
      - 빈 배열은 참 같은 값이지만, [] == false는 true
    공백만 있는 문자열(" " 등)
    문자열 "false"
*/
const arr = [];
console.log(Boolean(arr));
console.log(arr == false);
console.log(arr === false);


// AND, OR, NOT
{
    const skipIt = true;
    let xxxxxx = 0;
    const result = skipIt || xxxxxx++;
    console.log(result, xxxxxx);        // 단축 평가가 일어나므로 xxxxxx의 값은 그대로 0
}
{
    const skipIt = false;
    let xxxxxx = 0;
    const result = skipIt || xxxxxx++;
    console.log(result, xxxxxx);
}
{
    const doIt = false;
    let xxxxxx = 0;
    const result = doIt && xxxxxx++;
    console.log(result, xxxxxx);        // 단축 평가가 일어나므로 xxxxxx의 값은 그대로 0
}
{
    const doIt = true;
    let xxxxxx = 0;
    const result = doIt && xxxxxx++;
    console.log(result, xxxxxx);        // 단축 평가가 일어나므로 xxxxxx의 값은 그대로 0
}

{
    const suppliedOptions = { name: "supply" };
    const options = suppliedOptions || { name: "Default" };
    console.log(options);
}
{
    const suppliedOptions = null;
    const options = suppliedOptions || { name: "Default" };
    console.log(options);
}

{
    const doIt = false;
    const result = doIt ? "Did it" : "Didn't do it.";
    console.log(result);
}

{
    // 쉼표 연산자는 표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환
    let x = 0, y = 20, z;
    z = (x++ , y++);
    console.log(z, x, y);
    // 쉼표 연산자는 우선순위가 가장 낮은 연산자이므로 괄호를 사용
}
{
    let x = 0, y = 20, z;
    z = x++ , y++;
    console.log(z, x, y);
}


// 연산자 그룹
/*
{
    // 비트 연산자
    let n = 22;
    console.log(n >> 1);
    console.log(n >>> 1);
    n = ~n;
    console.log(n);
    console.log(n++);
    console.log(n >> 1);
    console.log(n >>> 1);
}
*/
{
    console.log(typeof (undefined));
    console.log(typeof (null));
    console.log(typeof ({}));
    console.log(typeof (true));
    console.log(typeof (1));
    console.log(typeof (""));
    console.log(typeof (Symbol()));
    console.log(typeof (function () { }));
    console.log("괄호 생략 가능");
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof true);
    console.log(typeof 1);
    console.log(typeof "");
    console.log(typeof Symbol());
    console.log(typeof function () { });
}
/*
    void 연산자
    <a href="javascript:void 0">Do nothing.</a>
    void 연산자는 피연산자를 평가한 후 undefined를 반환. 쓸모 없음
    HTML에서 <a> 태그의 URI에 사용. 이렇게 하면 브라우저에서 다른 페이지로 이동하는 일을 막음
    실무에서 쓰지도 않을뿐더러 권장하는 방법도 아니지만 가끔 보일 수 있음.
*/
{
    let v, v0;
    v = v0 = 9.8;       // 먼저 v0이 9.8이 되고, 그 다음 v가 9.8이 됨

    // while 문의 조건에 있는 할당을 보아라. 먼저 n이 nums[i]의 값을 받고 다음에는 표현식 전체가 그 값으로 평가되므로 숫자로 비교할 수 없음.
    const nums = [3, 5, 15, 7, 5];
    let n, i = 0;
    while ((n = nums[i]) < 10 && i++ < nums.length) {
        console.log(`Number less than 10: ${n}.`);
    }
    console.log(`Number greater than 10 found: ${n}.`);
    console.log(`${nums.length - i - 1} numbers remain.`);
}


// 해체 할당
{
    // 객체 선언
    const obj = { b: 2, c: 3, d: 4 };

    // 해체 할당
    const { a, b, c } = obj;
    console.log(a, b, c);       // obj에 "a" 프로퍼티가 없으므로 undefinde, b는 2, c는 3
    // console.log(d);    // ReferenceError: "d"는 정의되지 않음
}
{
    const obj = { b: 2, c: 3, d: 4 };
    let a, b, c;

    // 에러 - 괄호를 쓰지 않으면 자바스크립트 표현식 좌변을 블록으로 해석
    // {a, b, c} = obj;

    // 동작
    ({ a, b, c } = obj);
    console.log(a, b, c);
}
{
    // 배열 선언
    const arr = [1, 2, 3];

    // 배열 해체 할당 - 배열 요소에 대응할 변수 이름을 마음대로 쓸 수 있으며 배열 순서대로 대응
    let [x, y] = arr;
    console.log(x, y);  // x는 1, y는 2
    // console.log(z);  // ReferenceError: "z"는 정의되지 않음
}
{
    const arr = [1, 2, 3, 4, 5];

    let [x, y, ...rest] = arr;  // x와 y는 배열의 처음 두 요소를 받고, 변수 rest에는 나머지가 저장
    console.log(x, y, rest);
}
{
    let a = 5, b = 10;
    [a, b] = [b, a];
    console.log([b, a]);
    console.log([a, b]);
    console.log(a, b);
}


// 객체와 배열 연산자
/*
    .               점 연산자                           3장
    []              대괄호 연산자                       3장
    in              프로퍼티 존재 연산자                9장
    new             객체 인스턴스화 연산자              9장
    instanceof      프로토타입 체인 테스트 연산자       9장
    ...             확산 연산자                        6장, 8장
    delete          삭제 연산자                        3장
*/


// 템플릿 문자열과 표현식
{
    const roomTempC = 21.5;
    let currentTempC = 19.5;
    const message = `The current temperature is ` +
        `${currentTempC - roomTempC}\u00b0C different than room temperature.`;
    const fahrenheit =
        `The current temperature is ${currentTempC * 9 / 5 + 32}\u00b0F`;
    console.log(message);
    console.log(fahrenheit);
}


// 표현식과 흐름 제어 패턴
{
    const flag = true;
    let v;
    if (flag) {
        v = 'prime';
    } else {
        v = 'non-prime';
    }
    console.log(v);
}
{
    const flag = true;
    let v = flag ? 'prime' : 'non-prime';
    console.log(v);
}

{
    let options = 1;
    if (!options) options = {};
    console.log(options);
}
{
    let options = 1;
    options = options || {};
    console.log(options);
}
// 3항 연산자는 if...else 문보다 거의 항상 더 좋지만, 단축 평가는 뚜렷하게 무엇이 좋다고 말하기는 어려우나 매우 자주 사용하는 패턴이니 알아두는 편이 좋음
