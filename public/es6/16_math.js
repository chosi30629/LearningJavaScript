// 숫자 형식
{
    const x = 19.51;
    console.log(x.toFixed(3));
    console.log(x.toFixed(2));
    console.log(x.toFixed(1));
    console.log(x.toFixed(0));
}

{
    const x = 3800.5;
    console.log(x.toExponential(4));
    console.log(x.toExponential(3));
    console.log(x.toExponential(2));
    console.log(x.toExponential(1));
    console.log(x.toExponential(0));
}

{
    let x = 1000;
    console.log(x.toPrecision(5));
    console.log(x.toPrecision(4));
    console.log(x.toPrecision(3));
    console.log(x.toPrecision(2));
    console.log(x.toPrecision(1));
    x = 15.335;
    console.log(x.toPrecision(6));
    console.log(x.toPrecision(5));
    console.log(x.toPrecision(4));
    console.log(x.toPrecision(3));
    console.log(x.toPrecision(2));
    console.log(x.toPrecision(1));
}

{
    const x = 12;
    console.log(x.toString());
    console.log(x.toString(10));
    console.log(x.toString(16));
    console.log(x.toString(8));
    console.log(x.toString(2));
}


// 상수
{
    // 기본적인 상수
    console.log(Math.E);        // 자연로그의 밑수(root) : ~2.718
    console.log(Math.PI);       // 원주율: ~3.142

    // 로그 관련 상수는 Math 객체의 프로퍼티로 호출해도 되지만, 자주 사용한다면 따로 상수에 할당해서 편리하게 사용하는게 좋음
    console.log(Math.LN2);
    console.log(Math.LN10);
    console.log(Math.LOG2E);
    console.log(Math.LOG10E);

    // 대수 관련 상수
    console.log(Math.SQRT1_2);
    console.log(Math.SQRT2);
}


// 대수 함수
{
    console.log(Math.pow(2, 3));
    console.log(Math.pow(1.7, 2.3));
    console.log(Math.sqrt(16));
    console.log(Math.sqrt(15.5));
    console.log(Math.cbrt(27));
    console.log(Math.cbrt(22));
    console.log(Math.exp(1));
    console.log(Math.exp(5.5));
    console.log(Math.expm1(1));
    console.log(Math.expm1(5.5));
    console.log(Math.hypot(3.4));
    console.log(Math.hypot(2, 3, 4));
}

{
    console.log(Math.log(Math.E));
    console.log(Math.log(17.5));
    console.log(Math.log10(10));
    console.log(Math.log10(16.7));
    console.log(Math.log2(2));
    console.log(Math.log2(5));
    console.log(Math.log1p(Math.E - 1));
    console.log(Math.log1p(17.5));
}

{
    console.log(Math.abs(-5.5));
    console.log(Math.abs(5.5));
    console.log(Math.sign(-10.5));
    console.log(Math.sign(6.77));
    console.log(Math.ceil(2.2));
    console.log(Math.ceil(-3.8));
    console.log(Math.floor(2.8));
    console.log(Math.floor(-3.2));
    console.log(Math.trunc(7.7));
    console.log(Math.trunc(-5.8));
    console.log(Math.round(7.2));
    console.log(Math.round(7.7));
    console.log(Math.round(-7.7));
    console.log(Math.round(-7.2));
    console.log(Math.min(1, 2));
    console.log(Math.min(3, 0.5, 0.66));
    console.log(Math.min(3, 0.5, -0.66));
    console.log(Math.max(1, 2));
    console.log(Math.max(3, 0.5, 0.66));
    console.log(Math.max(-3, 0.5, -0.66));
}

{
    console.log(Math.random());
    console.log(1.5 + (2.5 - 1.5) * Math.random());
    console.log(5 + Math.floor((10 - 5) * Math.random()));
    console.log(5 + Math.floor((10 - 5 + 1) * Math.random()));
}


// 삼각함수
{
    console.log(Math.sin(Math.PI / 2));
    console.log(Math.sin(Math.PI / 4));
    console.log(Math.cos(Math.PI));
    console.log(Math.cos(Math.PI / 4));
    console.log(Math.tan(Math.PI / 4));
    console.log(Math.tan(0));
    console.log(Math.asin(0));
    console.log(Math.asin(Math.SQRT1_2));
    console.log(Math.acos(0));
    console.log(Math.acos(Math.SQRT1_2));
    console.log(Math.atan(0));
    console.log(Math.atan(Math.SQRT1_2));
    console.log(Math.atan2(0, 1));
    console.log(Math.atan2(1, 1));
}
{
    function deg2rad(d) { return d / 180 * Math.PI; }
    function rad2deg(r) { return r / Math.PI * 180; }

    console.log(deg2rad(5));
    console.log(rad2deg(5));
}


// 쌍곡선함수
{
    console.log(Math.sinh(0));
    console.log(Math.sinh(1));
    console.log(Math.cosh(0));
    console.log(Math.cosh(1));
    console.log(Math.tanh(0));
    console.log(Math.tanh(1));
    console.log(Math.asinh(0));
    console.log(Math.asinh(1));
    console.log(Math.acosh(0));
    console.log(Math.acosh(1));
    console.log(Math.atanh(0));
    console.log(Math.atanh(1));
    console.log(typeof Math.atanh(1));
}