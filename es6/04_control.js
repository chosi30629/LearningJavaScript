// 제어문의 기초
{
    // 블록 문 시작
    console.log("statement 1");
    console.log("statement 2");
}   // 블록 문 끝
console.log("statement 3");

let funds = 50;     // 시작 조건
let round = 0;
while (funds > 1 && funds < 100) {
    funds = funds + 2;  // 2보 전진
    funds = funds - 1;  // 1보 후퇴
}

// 2를 더하기만 한다면 블록 문을 쓰지 않아도 됨
while (funds > 1 && funds < 100)
    funds = funds + 2;

// 위와 동일
while (funds > 1 && funds < 100)

    funds = funds + 2;

// 줄바꿈이 없음.
while (funds > 1 && funds < 100) funds = funds + 2;

// 줄바꿈 없이 문 하나를 블록 안에 씀
while (funds > 1 && funds < 100) { funds = funds + 2; }

while (funds > 1 && funds < 100)
    funds = funds + 2;      // while 루프 바디
funds = funds - 1;          // while 루프가 끝난 다음 실행됨

// 이렇게 하지 말 것
if (funds > 1) {
    console.log("There's money left!");
    console.log("That means keep playing!");
} else
    console.log("I'm broke! Time to quit.");

// 이렇게도 하지 말 것
if (funds > 1)
    console.log("There's money left! Keep playing!");
else {
    console.log("I'm broke!");
    console.log("Time to quit.");
}

// m 이상 n 이하의 무작위 정수를 반환
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// 크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위 반환
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

const bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0
};
let totalBet = rand(1, funds);
if (totalBet === 7) {
    totalBet - funds;
    bets.heart = totalBet;
} else {
    // 그 판에 걸 돈을 분배
}
funds = funds - totalBet;

let remaining = totalBet;
do {
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
} while (remaining > 0);

const hand = [];
for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
}

let winnings = 0;
for (let die = 0; die < hand.length; die++) {
    let face = hand[die];
    if (bets[face] > 0) winnings = winnings + bets[face];
}
funds = funds + winnings;

while (funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstaring funds: ${funds}p`);
    // 돈을 건다.
    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0
    };
    let totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // 판돈을 나눈다.
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while (remaining > 0);
    }
    funds = funds - totalBet;
    console.log('\tbets: ' +
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
        ` (total: ${totalBet} pence)`);

    // 주사위를 굴립니다.
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // 딴 돈을 가져온다.
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);


// 자바스크립트의 제어문
if (new Date().getDay == 3) {       // new Date().getDay() 는 현재 요일에 해당하는 숫자를 반환. 0은 일요일
    totalBet = 1;
} else if (funds === 7) {
    totalBet = funds;
} else {
    console.log("No superstition here!");
}

// 아래보단 위 형식으로 쓰는게 나음
if (new Date().getDay == 3) {
    totalBet = 1;
} else {
    if (funds === 7) {
        totalBet = funds;
    } else {
        console.log("No superstition here!");
    }
}

/*
// 다른 문법을 설명하는 메타 문법, 메타 문법은 단순하고 비공식적. 메타 문법은 모질라 개발자 네트워크의 자바스크립트 문서에서 사용하는 문법
// []로 감싼 것은 옵션, 생략 부호 (...)는 '여기 들어갈 내용이 더 있다'는 뜻
// condition이 참 같은 값이면 statement를 실행    
while (condition)
    statement
// condition이 참 같은 값이면 statement1을 실행하고, 그렇지 않고 else 부분이 있다면 statement2를 실행    
if (condition)
    statement1
    [else
    statement2]
// statement는 최소한 한 번 실행하고, condition이 참 같은 값인 동안 반복해서 실행
do
    statement
while (condition);
// 루프에 들어가기 전에 initialization을 실행. condition이 true인 동안 statement를 실행. final-expression를 실행한 다음 condition을 다시 체크
for ([initialization]; [condition]; [final-expression])
    statement
// 위와 같음
[initialization]
while([condition]) {
    statement
    [final-expression]
}
*/

// 피보나치 수열의 숫자 중 처음 여덟 개 출력
for (let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)
    console.log(j);

// 무한루프
// for (; ;) console.log("I will repeat forever");

let s = '3';                                                // 숫자가 들어있는 문자열
for (; s.length < 10; s = ' ' + s) { console.log(s); }      // 문자열의 길이를 조건으로 씀. 여기서 사용한 for 루프 마지막에 세미콜론이 없으면 에러 발생

for (let x = 0.2; x < 3.0; x += 0.2) console.log(x);        // 제어 변수가 정수가 아니어도 괜찮음

let players = {
    isBroke: true
    // isBroke: false
};
for (; !players.isBroke;) console.log("Still playing!");      // 조건 객체 프로퍼티를 씀

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:
        totalBet = 0;
        break;
    case 13:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 11:                // 11과 13은 같은 행위
    case 13:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1;      // 1펜스를 기부하고 break가 없으므로 다음 case(11)로 넘어가서 totalBet을 0으로 만듦
    case 11:                    // 유효한 자바스크립트 코드이지만, 다른 사람들이 보기에 실수처럼 보일 수 있음
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
}

switch (totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1;
    case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
    default:
        console.log("No superstition here!");
        break;
}

// 함수 안에서 쓸 때만 break 대신 return 사용 가능
function adjustBet(totalBet, funds) {
    switch (totalBet) {
        case 7:
            return funds;
        case 13:
            return 0;
        default:
            return totalBet;
    }
}

/*
switch (totalBet) {
    case 7: totalBet = funds; break;
    case 13: totalBet = 0;    break;
    case 11: totalBet = 0;    break;
    case 21: totalBet = 21;   break;
}
*/

const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for (let prop in player) {
    if (!player.hasOwnProperty(prop)) continue;
    console.log(prop + ': ' + player[prop]);
}

const hands = [randFace(), randFace(), randFace()];
for (let face of hands)
    console.log(`you rolled...${face}!`);

const handss = [randFace(), randFace(), randFace()];
for (let i = 0; i < handss.length; i++)
    console.log(`Roll ${i + 1}: ${hand[i]}`);
// for..of는 배열에 루프를 실행해야 하지만 각 요소의 인덱스를 알 필요는 없을 때 알맞고 인덱스를 알아야 한다면 일반적인 for 루프를 사용


// 유용한 제어문 패턴
while (funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if (totalBet === 13) {
        console.log("Unlucky! Skip this round.....");
    } else {
        // 플레이
    }
}

while (funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if (totalBet === 13) {
        console.log("Unlucky! Skip this round.....");
        continue;
    }
    // 플레이
}

/*
break나 return 문을 써서 불필요한 연산 줄이기
let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n) && firstPrime === null) firstPrime = n;
}
let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n)) firstPrime = n; break;  // 이 루프가 함수 안에 있었다면 break 대신 return 문을 써도 됨
}
*/

/*
// 루프를 완료한 뒤 인덱스 값 사용하기
let i = 0;
for (; i < bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNubmers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);
*/

/*
배열을 수정할 때 감소하는 인덱스 사용하기
for (let i = 0; i < bigArrayOfNumbers.length; i++) {
    if (isPrimitive(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}

for (let i = bigArrayOfNumbers.length - 1; i >= 0; i--) {
    if (isPrimitive(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
*/