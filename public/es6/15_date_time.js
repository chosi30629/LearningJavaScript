const moment = require('moment-timezone');


// 날짜, 타임존, 타임스탬프, 유닉스 시간
{
    console.log(new Date());
}
{
    const d = new Date();
    console.log(d);             // 타임존이 들어간 그레고리력 날짜
    console.log(d.valueOf());   // 유닉스 타임스탬프 
}


// Date 객체 만들기
{
    // 아래 결과는 해당 지역의 표준시에 따라 다를 수 있음
    console.log(new Date());

    // 자바스크립트의 월은 0으로 시작함. 즉 0은 1월이고, 1은 2월
    console.log(new Date(2015, 0));                          // 2015년 1월 1일 0시
    console.log(new Date(2015, 1));                          // 2015년 2월 1일 0시
    console.log(new Date(2015, 1, 14));                      // 2015년 2월 14일 0시
    console.log(new Date(2015, 1, 14, 13));                  // 2015년 2월 14일 오후 1시
    console.log(new Date(2015, 1, 14, 13, 30));              // 2015년 2월 14일 오후 1시 30분
    console.log(new Date(2015, 1, 14, 13, 30, 5));           // 2015년 2월 14일 오후 1시 30분 5초
    console.log(new Date(2015, 1, 14, 13, 30, 5, 500));      // 2015년 2월 14일 오후 1시 30분 5.5초

    // 유닉스 타임스탬프로 날짜 생성
    console.log(new Date(0));                               // 12:00 A.M., Jan 1, 1970 UTC
    console.log(new Date(1000));                            // 12:00 A.M., Jan 1, 1970 UTC
    console.log(new Date(1463443200000));                   // 5:00 P.M., May 16, 2016 UTC

    // 유닉스 시간 원점 이전의 날짜를 구할 때
    console.log(new Date(-365 * 24 * 60 * 60 * 1000));      // 12:00 A.M., Jan 1, 1969 UTC

    // 날짜 문자열 해석 (표준시를 기준으로 함)
    console.log(new Date('June 14, 1903'));                 // 12:00 A.M., Jun 14, 1903 지역 표준시
    console.log(new Date('June 14, 1903 GMT-0000'));        // 12:00 A.M., Jun 14, 1903 UTC 
}


// Moment.js
{
    const moment = require('moment-timezone');
}


// 날짜 데이터 만들기
{
    const d = new Date(Date.UTC(2019, 1, 27));
    console.log(d);
}
{
    // Moment.js에 넘기는 배열은 자바스크립트의 Date 생정자에 넘기는 매개변수와 똑같고
    // 월은 0으로 시작
    // toDate() 메서드는 Moment.js 객체를 자바스크립트 Date 객체로 변환
    const d = moment.tz([2019, 1, 27, 10, 51], 'America/Los_Angeles').toDate();
    const s = moment.tz([2019, 1, 27, 10, 51], 'Asia/Seoul').toDate();
    console.log(d);
    console.log(s);
}


// 날짜 데이터 전송하기
{
    const before = { d: new Date() };
    console.log(before);
    console.log(before.d instanceof Date);  // true
    const json = JSON.stringify(before);
    console.log(json);
    const after = JSON.parse(json);
    console.log(after);
    console.log(after.d instanceof Date);   // false
    console.log(typeof after.d);            // "string"

    after.d = new Date(after.d);
    console.log(after.d instanceof Date);   // true

}
{
    const before = { d: new Date().valueOf() };
    console.log(typeof before.d);                  // "number"
    const json = JSON.stringify(before);
    console.log(json);
    const after = JSON.parse(json);
    console.log(after);
    console.log(typeof after.d);                   // "number"
    const d = new Date(after.d);
    console.log(d);
}


// 날짜 형식
{
    const d = new Date(Date.UTC(1930, 4, 10));

    // 다음 결과는 로스앤젤레스 사는 사람 기준
    console.log(d.toLocaleDateString());
    console.log(d.toLocaleTimeString());
    console.log(d.toTimeString());
    console.log(d.toUTCString());

    console.log(moment(d).format("YYYY-MM-DD"));
    console.log(moment(d).format("YYYY-MM-DD HH:mm"));
    console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
    console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));
    console.log(moment(d).format("YYYY년 M월 D일 HH:mm"));

    console.log(moment(d).format("dddd, MMMM [the] Do, YYYY"));

    console.log(moment(d).format("h:mm a"));
}


// 날짜 구성 요소
{
    const d = new Date(Date.UTC(1815, 9, 10));

    console.log(d.getFullYear());
    console.log(d.getMonth());
    console.log(d.getDate());
    console.log(d.getDay());
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    console.log(d.getMilliseconds());


    // UTC 기준 메서드
    console.log(d.getUTCFullYear());
    console.log(d.getUTCMonth());
    console.log(d.getUTCDate());
}


// 날짜 비교
{
    const d1 = new Date(1996, 2, 1);
    const d2 = new Date(2009, 4, 27);
    console.log(d1);
    console.log(d2);
    console.log(d1 > d2);   // false
    console.log(d1 < d2);   // true
}


// 날짜 연산
{
    const d1 = new Date(1996, 2, 1);
    const d2 = new Date(2009, 4, 27);
    const msDiff = d2 - d1;
    const daysDiff = msDiff / 1000 / 60 / 60 / 24;
    console.log(msDiff);    // 417744000000 ms
    console.log(daysDiff);  // 4835 days
}
{
    const dates = [];

    // 랜덤한 날짜를 몇 개 만든다.
    const min = new Date(2017, 0, 1).valueOf();
    const delta = new Date(2020, 0, 1).valueOf() - min;
    for (let i = 0; i < 10; i++)
        dates.push(new Date(min + delta * Math.random()));

    // dates 배열은 랜덤으로 만들었으므로 (아마) 뒤죽박죽
    // 다음과 같이 역순으로 정렬할 수 있음
    console.log(dates);
    console.log(dates.sort((a, b) => b - a));
    // 날짜순으로 정렬할 수도 있음
    console.log(dates.sort((a, b) => a - b));
}
{
    let m = moment();                   // 현재
    console.log(m.add(3, 'days'));      // m은 이제 3일 뒤
    console.log(m.subtract(2, 'year')); // m은 이제 2년 전으로부터 3일이 지난 날짜

    m = moment();                       // 리셋
    console.log(m.startOf('year'));     // m은 이제 올해의 1월 1일
    console.log(m.endOf('month'));      // m은 이제 올해의 1월 31일
}
{
    let m = moment()
        .add(10, 'hour')
        .subtract(3, 'day')
        .endOf('month');
    // m은 이제 3일 전으로부터 10시간 뒤인 달의 마지막 순간
    console.log(m);
}


// 사용자가 알기 쉬운 상대적 날짜
{
    console.log(moment().subtract(10, 'seconds').fromNow());    // a few seconds ago
    console.log(moment().subtract(44, 'seconds').fromNow());    // a few seconds ago
    console.log(moment().subtract(45, 'seconds').fromNow());    // a minute ago
    console.log(moment().subtract(5, 'minutes').fromNow());     // 5 minutes ago
    console.log(moment().subtract(44, 'minutes').fromNow());    // 44 minutes ago
    console.log(moment().subtract(45, 'minutes').fromNow());    // an hour ago
    console.log(moment().subtract(5, 'hours').fromNow());       // 5 hours ago
    console.log(moment().subtract(21, 'hours').fromNow());      // 21 hours ago
    console.log(moment().subtract(22, 'hours').fromNow());      // a day ago   
    console.log(moment().subtract(300, 'days').fromNow());      // 10 months ago
    console.log(moment().subtract(345, 'days').fromNow());      // a year ago
}