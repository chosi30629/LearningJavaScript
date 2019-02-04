// 접근자 프로퍼티 getter와 setter
{
  const USER_EMAIL = Symbol();

  class User {
    setEmail(value) {
      if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
      this[USER_EMAIL] = value;
    }

    getEmail() {
      return this[USER_EMAIL];
    }
  }

  const u = new User();
  u.setEmail("john@doe.com");
  console.log(`User email: ${u.getEmail()}`);
}
{
  const USER_EMAIL = Symbol();

  class User {
    set email(value) {
      if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
      this[USER_EMAIL] = value;
    }

    get email() {
      return this[USER_EMAIL];
    }
  }

  const u = new User();
  u.email = "john@doe.com";
  console.log(`User email: ${u.email}`);
}
{
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    get perimeter() {
      return this.width * 2 + this.height * 2;
    }
  }

  const Rec = new Rectangle(5, 6);
  console.log(Rec.perimeter);
}

// 객체 프로퍼티 속성
{
  const obj = { foo: "bar" };
  console.log(Object.getOwnPropertyDescriptor(obj, "foo"));
  Object.defineProperty(obj, "foo", { writable: false });
  console.log(Object.getOwnPropertyDescriptor(obj, "foo"));
  obj.foo = 3; // 읽기 전용 프로퍼티에 값을 할당하려 할 때 에러가 발생하는 것은 스트릭트 모드에서뿐. 스트릭트 모드가 아닐 때는 할당이 실패하지만 에러는 일어나지 않음
  Object.defineProperty(obj, "color", {
    get: function() {
      return this._color;
    },
    set: function(value) {
      this._color = value;
    }
  });
  console.log(Object.getOwnPropertyDescriptor(obj, "foo"));
  Object.defineProperty(obj, "name", {
    value: "Cynthia",
    enumerable: true
  });
  Object.defineProperty(obj, "greet", {
    value: function() {
      return `Hello, my name is ${this.name}!`;
    }
  });
  console.log(obj);

  const arr = [3, 1.5, 9, 2, 5.2];
  arr.sum = function() {
    return this.reduce((a, x) => a + x);
  };
  arr.avg = function() {
    return this.sum() / this.length;
  };
  Object.defineProperty(arr, "sum", { enumerable: false });
  Object.defineProperty(arr, "avg", { enumerable: false });
}
{
  const arr = [3, 1.5, 9, 2, 5.2];
  Object.defineProperty(arr, "sum", {
    value: function() {
      return this.reduce((a, x) => a + x);
    },
    enumerable: false
  });
  Object.defineProperty(arr, "avg", {
    value: function() {
      return this.sum() / this.length;
    },
    enumerable: false
  });
}
{
  const arr = [3, 1.5, 9, 2, 5.2];
  Object.defineProperties(arr, {
    sum: {
      value: function() {
        return this.reduce((a, x) => a + x);
      },
      enumerable: false
    },
    avg: {
      value: function() {
        return this.sum() / this.length;
      },
      enumerable: false
    }
  });
}

// 객체 보호: 동결, 봉인, 확장 금지
{
  const appInfo = {
    company: "White Knight Software Inc.",
    version: "1.3.5",
    buildId: "3a975448-ead7-2g4d-b214-9c9123564ea2",
    // 이 함수는 getter이므로 동결한 상태에서도 계속 동작
    copyright() {
      return `ⓒ ${new Date().getFullYear()}, ${this.company}`;
    }
  };

  Object.freeze(appInfo);
  console.log(Object.isFrozen(appInfo)); // true

  appInfo.newProp = "test"; // 에러

  delete appInfo.company; // 에러

  appInfo.company = "test"; // 에러

  // Object.defineProperty(appInfo, "company", { enumerable: false }); // 에러

  console.log(appInfo);
}
{
  class Logger {
    constructor(name) {
      this.name = name;
      this.log = [];
    }
    add(entry) {
      this.log.push({
        log: entry,
        timestamp: Date.now()
      });
    }
  }

  const log = new Logger("Gaptain's Log");
  Object.seal(log);
  console.log(Object.isSealed(log)); // true

  log.name = "Captain's Boring Log"; // OK
  log.add("Another boring day at sea...."); // OK

  log.newProp = "test"; // 에러

  log.name = "test"; // OK

  delete log.name; // 에러

  // Object.defineProperty(log, "log", { enumerable: false }); // 에러
  console.log(log);

  const log2 = new Logger("First Mate's Log");
  Object.preventExtensions(log2);
  console.log(Object.isExtensible(log2)); // false\

  log2.name = "First Mate's Boring Log"; // OK
  log2.add("Another boring day at sea...."); // OK

  log2.newProp = "test"; // 에러

  log2.name = "test"; // OK
  console.log(log2);
  delete log2.name; // OK
  Object.defineProperty(log2, "log", {
    enumerable: false
  }); // OK
  console.log(log2);
}

// 프락시
{
  const coefficients = {
    a: 1,
    b: 2,
    c: 5
  };

  function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
  }

  console.log(evaluate(5, coefficients));
}
{
  const coefficients = {
    a: 1,
    c: 3
  };

  function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
  }

  console.log(evaluate(5, coefficients)); // NaN
}
{
  const coefficients = {
    a: 1,
    c: 3
  };

  const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
      return target[key] || 0;
    }
  });

  console.log(betterCoefficients.a); // 1
  console.log(betterCoefficients.b); // 0
  console.log(betterCoefficients.c); // 3
  console.log(betterCoefficients.d); // 0
  console.log(betterCoefficients.anything); // 0
}
{
  const coefficients = {
    a: 1,
    c: 3
  };

  const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
      if (!/^[a-z]$/.test(key)) return target[key];
      return target[key] || 0;
    }
  });

  console.log(betterCoefficients.a); // 1
  console.log(betterCoefficients.b); // 0
  console.log(betterCoefficients.c); // 3
  console.log(betterCoefficients.d); // 0
  console.log(betterCoefficients.anything); // undefined
}
{
  const cook = {
    name: "Walt",
    redPhosphorus: 100, // 위험
    water: 500 // 안전
  };
  const protectedCook = new Proxy(cook, {
    set(target, key, value) {
      if (key === "redPhosphorus") {
        if (target.allowDangerousOperations)
          return (target.redPhosphorus = value);
        else return console.log("Too dangerous!");
      }
      // 다른 프로퍼티는 모두 안전
      target[key] = value;
    }
  });

  protectedCook.water = 550; // 550
  protectedCook.redPhosphorus = 150; // Too dangerous!
  console.log(cook);
  protectedCook.allowDangerousOperations = true;
  protectedCook.redPhosphorus = 150; // 150
  console.log(cook);
}
