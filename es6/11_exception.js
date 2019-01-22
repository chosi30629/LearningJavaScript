// Error 객체
{
    const err = new Error('iinvalid email');
    // console.log(err);
}
{
    function validateEmail(email) {
        return email.match(/@/) ?
            email :
            new Error(`invalid email: ${email}`);
    }
    console.log(validateEmail("e@mail"));
}
{
    const email = "jane@doe.com";

    function validateEmail(email) {
        return email.match(/@/) ?
            email :
            new Error(`invalid email: ${email}`);
    }

    const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.error(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }
}


// try/catch와 예외 처리
{
    const email = null;     // 이런...

    function validateEmail(email) {
        return email.match(/@/) ?
            email :
            new Error(`invalid email: ${email}`);
    }

    try {
        const validatedEmail = validateEmail(email);
        if (validatedEmail instanceof Error) {
            console.error(`Error: ${validatedEmail.message}`);
        } else {
            console.log(`Valid email: ${validatedEmail}`);
        }
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}


// 에러 일으키기
{
    function billPay(amount, payee, account) {
        if (amount > account.balance)
            throw new Error("insufficient funds");
        account.transfer(payee, amount);
    }
}


// 예외 처리와 호출 스택
{
    function a() {
        console.log('a: calling b');
        b();
        console.log('a.: done');
    }
    function b() {
        console.log('b: calling c');
        c();
        console.log('b.: done');
    }
    function c() {
        console.log('c: throwing error');
        throw new Error('c error');
        console.log('c.: done');
    }
    function d() {
        console.log('d: calling c');
        c();
        console.log('d.: done');
    }

    try {
        a();
    } catch (err) {
        console.log(err.stack);
    }

    try {
        d();
    } catch (err) {
        console.log(err.stack);
    }
}


// try...catch...finally
{
    try {
        console.log("this line is executed...");
        throw new Error("whoops");
        console.log("this line is not...");
    } catch (err) {
        console.log("there was an error...");
    } finally {
        console.log("...always executed");
        console.log("perform cleanup here");
    }
}