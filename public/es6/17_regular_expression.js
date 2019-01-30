// 부분 문자열 검색과 대체
{
    const input = "As I was going to Saint Ives";
    console.log(input.startsWith("As"));
    console.log(input.endsWith("Ives"));
    console.log(input.startsWith("going", 9));  // 인덱스 9에서 시작
    console.log(input.endsWith("going", 14));   // 인덱스 14를 문자열의 끝으로 간주
    console.log(input.includes("going"));
    console.log(input.includes("going", 10));   // 인덱스 10에서 시작하면 going이 없음
    console.log(input.indexOf("going"));
    console.log(input.indexOf("going", 10));
    console.log(input.indexOf("nope"));

    console.log(input.toLowerCase());
    console.log(input.toLowerCase().startsWith("as"));

    const output = input.replace("going", "walking");
    console.log(output);
}


// 정규식 만들기
{
    const re1 = /going/;                // 단어 "going"을 찾을 수 있는 정규식
    const re2 = new RegExp("going");    // 생성자를 사용했지만 결과는 같음
}


// 정규식 검색
{
    const input = "As I was going to Saint Ives";
    const re = /\w{3,}/ig;

    // 문자열(input)의 메서드를 사용할 때
    console.log(input.match(re));
    console.log(input.search(re));      // 세 글자 이상으로 이루어진 첫 단어의 인덱스는 5

    // 정규식(re)의 메서드를 사용할 때
    console.log(re.exec(input));        // ["was"] 처음 일치하는 것
    console.log(re.exec(input));        // ["going"] exec는 마지막 위치를 기억함
    console.log(re.exec(input));        // ["Saint"] 
    console.log(re.exec(input));        // ["Ives"]
    console.log(re.exec(input));        // null 일치하는 것이 더는 없음
    console.log(re.test(input));        // true (input에는 세 글자 이상으로 이루어진 단어가 한 개 이상 있음)

    // 위 예제는 모두 정규식 리터럴을 그대로 써도 됨
    console.log(input.match(/\w{3,}/ig));
    console.log(input.search(/\w{3,}/ig));
    console.log(/\w{3,}/ig.test(input));
    console.log(/\w{3,}/ig.exec(input));
}


// 정규식을 사용한 문자열 교체
{
    const input = "As I was going to Saint Ives";
    const output = input.replace(/\w{4,}/ig, '****');

    console.log(output);                // // "As I was **** to **** ****"
}


// 대체
{
    const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' + '<script src="stuff.js>';
    const matches = html.match(/area|a|link|script|source/ig);      // 첫 시도
    console.log(matches);
}


// HTML 찾기
{
    const html = '<br> [!CDATA[[<br]]';
    const matches = html.match(/<br>/ig);
    console.log(matches);
}


// 문자셋
{
    const beer99 = "99 bottles of beer on the wall " +
        "tack 1 down and pass it around -- " +
        "98 bottles of beer on the wall.";
    const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
    console.log(matches);
    const m1 = beer99.match(/[0123456789]/g);   // 가능함
    const m2 = beer99.match(/[0-9]/g);          // 더 좋음
    console.log(m1);
    console.log(m2);
    const match = beer99.match(/[\-0-9a-z.]/ig);
    console.log(match);
    const match1 = beer99.match(/[^\-0-9a-z.]/);
    console.log(match1);
}


// 자주 쓰는 문자셋
{
    /*
        \d = [0-9]
        \D = [^0-9]
        \s = [ \t\v\n\r]    탭, 스페이스, 세로 탭, 줄바꿈이 포함
        \S = [^ \t\v\n\r]
        \w = [a-zA-Z_]      하이픈과 마침표는 포함되지 않으므로 이 문자셋으로 도메인 이름이나 CSS 클래스 등을 찾을 수는 없음
        \W = [^a-zA-Z_]
    */

    const stuff =
        'hight:         9\n' +
        'medium:        5\n' +
        'low:           2\n';
    const levels = stuff.match(/:\s*[0-9]/g);
    console.log(levels);

    const messyPhone = '(505) 555-1515';
    const neatPhone = messyPhone.replace(/\D/g, '');
    console.log(neatPhone);
    const field = '   something   ';
    const valid = /\S/.test(field);
    console.log(valid);
}


// 반복
{
    const beer99 = "99 bottles of beer on the wall " +
        "tack 1 down and pass it around -- " +
        "98 bottles of beer on the wall.";
    const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
    console.log(match);
}
{
    const beer99 = "99 bottles of beer on the wall " +
        "tack 1 down and pass it around -- " +
        "98 bottles of beer on the wall.";
    const match = beer99.match(/[0-9]+/);
    console.log(match);
}


// 마침표와 이스케이프
{
    const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
    const match = input.match(/\d{5}.*/);
    console.log(match);

    const equation = "(2 + 3.5) * 7";
    const match1 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
    console.log(match1);
}


// 그룹
{
    const text = "Visit oreilly.com today!";
    const match = text.match(/[a-z]+(?:\.com|\.org||\.edu)/i);
    console.log(match);

    const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
        '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
        '<link rel="stylesheet" href="//anything.com/flexible.css">';
    const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
    console.log(matches);
}


// 소극적 일치, 적극적 일치
{
    const input = "Regex pros know the difference between\n" +
        "<i>greedy</i> and <i>lazy</i> matching.";
    console.log(input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'));
    console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));
}


// 역참조
{
    const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
    const bands = promo.match(/([A-Z])([A-Z])\2\1/g);
    console.log(bands);

    // 작은따옴표와 큰따옴표를 모두 썼으므로 백틱으로 문자열 경계를 나타냄
    const html = `<img alt='A "simple" example.'>` +
        `<img alt="Don't abuse it!">`;
    const matches = html.match(/<img alt=(['"]).*?\1/g);
    console.log(matches);
    console.log(html.match(/<img alt=(['"]).*\1/g));

}


// 그룹 교체
{
    let html = '<a class="nope" href="/yep">Yep</a>';
    html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
    console.log(html);
}
{
    let html = '<a class="nope" href="/yep">Yep</a>';
    html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
    console.log(html);
}
{
    const input = "One two three";
    console.log(input.replace(/two/, '($`)'));
    console.log(input.replace(/two/, '($&)'));
    console.log(input.replace(/two/, "($')"));
    console.log(input.replace(/two/, '($$)'));
}


// 함수를 이용한 교체
{
    const html =
        `<a class="foo" href="/foo" id="foo">Fooo</a>\n` +
        `<A href='/bar' Class="bar">Bar</A>\n` +
        `<a href="/baz">Baz</a>\n` +
        `<a onClick="javascript:alert('quz!')" href="/qux">Qux</a>\n`;

    function sanitizeATag(aTag) {
        // 태크에서 원하는 부분을 뽑아냄
        const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
        // parts[1]은 여는 <a> 태그에 들어있는 속성
        // parts[2]는 <a>와 </a> 사이에 있는 텍스트
        const attributes = parts[1]
            // 속성을 분해
            .split(/\s+/);
        return '<a ' + attributes
            // class, id, href 속성만 필요
            .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
            // 스페이스 한 칸으로 구분해서 합침
            .join(' ')
            // 여는 <a> 태그를 완성
            + '>'
            // 텍스트를 추가
            + parts[2]
            // 마지막으로 태그를 닫음
            + '</a>';
    }

    console.log(sanitizeATag(html));
    console.log(html.match(/<a .*?>(.*?)<\/a>/ig));
    html.replace(/<a .*?>(.*?)<\/a>/ig, function (m, g1, offset) {
        console.log(`<a> tag found at ${offset}. contents: ${g1}`);
    });

    const html5 = html.replace(/<a .*?<\/a>/ig, function (m) {
        return sanitizeATag(m);
    });
    console.log(html5);

    console.log(html.replace(/<a .*?<\/a>/ig, sanitizeATag));
}


// 위치 지정
{
    const input = "It was the best of times, it was the worst of times";
    const beginning = input.match(/^\w+/g);
    const end = input.match(/\w+$/g);
    const everything = input.match(/^.*$/g);
    const nomatch1 = input.match(/^best/ig);
    const nomatch2 = input.match(/worst$/ig);

    console.log(beginning);
    console.log(end);
    console.log(everything);
    console.log(nomatch1);
    console.log(nomatch2);
}
{
    const input = "One line\nTwo lines\nThree lines\nFour";
    const beginnings = input.match(/^\w+/mg);
    const endings = input.match(/\w+$/mg);

    console.log(beginnings);
    console.log(endings);
}


// 단어 경계 일치
{
    const inputs = [
        "john@doe.com",                 // 이메일 주소만 있음
        "john@doe.com is my email",     // 이메일 주소로 시작
        "my email is john@doe.com",     // 이메일 주소로 끝남
        "use john@doe.com, my email",   // 이메일 주소가 중간에 있고 바로 뒤에 쉼표가 있음
        "my email:john@doe.com."        // 이메일 주소 주위에 구두점이 있음
    ];
    const emailMatcher = /\b[a-z][a-z0-9._-]+@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
    console.log(inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>')));
}


// 룩어 헤드
{
    function validPassword(p) {
        return /[A-Z]/.test(p) &&
            /[a-z]/.test(p) &&
            /[0-9]/.test(p) &&
            !/[^a-zA-Z0-9]/.test(p);
    }
    console.log(validPassword("AAa1A"));
}
{
    function validPassword(p) {
        return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
    }
    console.log(validPassword("a1aaA"));
}


// 동적으로 정규식 만들기
{
    const users = ["mary", "nick", "arthur", "sam", "yvette"];
    const text = "User @arthur started the backup and 15:15, " +
        "and @nick and @yvette restored it at 18:35.";
    const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
    console.log(text.match(userRegex));
}