// 프로퍼티 나열
{
    const SYM = Symbol();
    const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
    for (let prop in o) {
        if (!o.hasOwnProperty(prop)) continue;
        console.log(`${prop}: ${o[prop]}`);
    }
}
{
    const SYM = Symbol();
    const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
    console.log(Object.keys(o));
    Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
}
{
    const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
    Object.keys(o)
        .filter(prop => prop.match(/^x/))
        .forEach(prop => console.log(`${prop}: ${o[prop]}`));
}


// 객체지향 프로그래밍
{
    class Car {
        constructor() {

        }
    }
    const car1 = new Car();
    const car2 = new Car();
    console.log(Car);
    console.log(car1);
    console.log(car2);
    console.log(car1 instanceof Car);
    console.log(car1 instanceof Array);
}
{
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.userGears = ['P', 'N', 'R', 'D'];
            this.userGear = this.userGears[0];
        }
        shift(gear) {
            if (this.userGears.indexOf(gear) < 0)
                throw new Error(`Invalid gear: ${gear}`);
            this.userGear = gear;
        }
    }
    const car1 = new Car("Tesla", "Model S");
    const car2 = new Car("Mazda", "3i");
    console.log(car1);
    console.log(car2);
    car1.shift('D');
    car2.shift('R');
    console.log(car1);
    console.log(car2);
}
{
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            this._userGear = this._userGears[0];
        }

        get userGear() { return this._userGear; }
        set userGear(value) {
            if (this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`);
            this._userGear = value;
        }

        shift(gear) { this.userGear = gear; }
    }
}
{
    const Car = (function () {
        const carProps = new WeakMap();

        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
                this._userGears = ['P', 'N', 'R', 'D'];
                carProps.set(this, { userGear: this._userGears[0] });
            }

            get userGear() { return carProps.get(this).userGear; }
            set userGear(value) {
                if (this._userGears.indexOf(value) < 0)
                    throw new Error(`Invalid gear: ${value}`);
                carProps.get(this).userGear = value;
            }

            shift(gear) { this.userGear = gear; }
        }

        return Car;
    })();
}

{
    function Car(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }
}
{
    class Es6Car { }
    function Es5Car() { }
    console.log(typeof Es6Car);
    console.log(typeof Es5Car);
}

{
    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.userGears = ['P', 'N', 'R', 'D'];
            this.userGear = this.userGears[0];
        }
        shift(gear) {
            if (this.userGears.indexOf(gear) < 0)
                throw new Error(`Invalid gear: ${gear}`);
            this.userGear = gear;
        }
    }

    const car1 = new Car();
    const car2 = new Car();
    console.log(car1.shift === Car.prototype.shift);    // true
    car1.shift('D');
    // car1.shift('d');                                 에러
    console.log(car1.userGear);                         // 'D'
    console.log(car1.shift === car2.shift);             // true

    car1.shift = function (gear) { this.userGear = gear.toUpperCase(); };
    console.log(car1.shift === Car.prototype.shift);    // false
    console.log(car1.shift === car2.shift);             // false
    car1.shift('d');
    console.log(car1.userGear);                         // 'D'
    console.log(car1);
    console.log(car2);
}

{
    class Car {
        static getNextVin() {
            return Car.nextVin++;           // this.nextVin++ 라고 써도 되지만, Car를 앞에 쓰면 정적 메서드라는 점을 상기하기 쉬움
        }

        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        static areSimilar(car1, car2) {
            return car1.make === car2.make && car1.model === car2.model;
        }

        static areSame(car1, car2) {
            return car1.vin === car2.vin;
        }
    }

    Car.nextVin = 0;

    const car1 = new Car("Tesla", "S");
    const car2 = new Car("Mazda", "3");
    const car3 = new Car("Mazda", "3");
    console.log(car1);
    console.log(car2);
    console.log(car3);
    console.log(car1.vin);
    console.log(car2.vin);
    console.log(car3.vin);

    console.log(Car.areSimilar(car1, car2));     // false
    console.log(Car.areSimilar(car2, car3));     // true
    console.log(Car.areSame(car2, car3));        // false
    console.log(Car.areSame(car2, car2));        // true
}

{
    class Vehicle {
        constructor() {
            this.passengers = [];
            console.log("Vehicle created");
        }
        addPassenger(p) {
            this.passengers.push(p);
        }
    }

    class Car extends Vehicle {
        constructor() {
            super();
            console.log("Car created");
        }
        deployAirbags() {
            console.log("BWOOSH!");
        }
    }

    const v = new Vehicle();
    v.addPassenger("Frank");
    v.addPassenger("Judy");
    console.log(v.passengers);          // ["Frank", "Judy"]

    const c = new Car();
    c.addPassenger("Alice");
    c.addPassenger("Cameron");
    console.log(c.passengers);          // ["Alice", "Cameron"]
    // v.deployAirbags();               에러
    c.deployAirbags();                  // "BWOOSH!"
}

{
    class Vehicle {
        constructor() {
            this.passengers = [];
            console.log("Vehicle created");
        }
        addPassenger(p) {
            this.passengers.push(p);
        }
    }

    class Car extends Vehicle {
        constructor() {
            super();
            console.log("Car created");
        }
        deployAirbags() {
            console.log("BWOOSH!");
        }
    }

    class Motorcycle extends Vehicle {

    }

    const c = new Car();
    const m = new Motorcycle();
    console.log(c instanceof Car);
    console.log(c instanceof Vehicle);
    console.log(m instanceof Car);
    console.log(m instanceof Motorcycle);
    console.log(m instanceof Vehicle);
}

{
    class Super {
        constructor() {
            this.name = 'Super';
            this.isSuper = true;
        }
    }

    // 유효하지만, 권장하지는 않음
    Super.prototype.sneaky = 'not recommended';

    class Sub extends Super {
        constructor() {
            super();
            this.name = 'Sub';
            this.isSub = true;
        }
    }

    const obj = new Sub();
    for (let p in obj) {
        console.log(`${p}: ${obj[p]}` +
            (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
    }
    console.log(Object.keys(obj));
}

{
    class Car {
        static getNextVin() {
            return Car.nextVin++;
        }

        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        static areSimilar(car1, car2) {
            return car1.make === car2.make && car1.model === car2.model;
        }

        static areSame(car1, car2) {
            return car1.vin === car2.vin;
        }

        toString() {
            return `${this.make} ${this.model}: ${this.vin}`;
        }
    }
    const car = new Car("cho", "si");
    console.log(car.toString());
}


// 다중 상속, 믹스인, 인터페이스
{
    class InsurancePolicy {

    }

    function makeInsurable(o) {
        o.addInsurancePolicy = function (p) { this.insurancePolicy = p; };
        o.getInsurancePolicy = function () { return this.insurancePolicy; };
        o.isInsured = function () { return !!this.insurancePolicy; };
    }

    class Car {
        static getNextVin() {
            return Car.nextVin++;
        }

        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        static areSimilar(car1, car2) {
            return car1.make === car2.make && car1.model === car2.model;
        }

        static areSame(car1, car2) {
            return car1.vin === car2.vin;
        }
    }
    /*
    const car1 = new Car();
    makeInsurable(car1);
    car1.addInsurancePolicy(new InsurancePolicy());
    */
    makeInsurable(Car.prototype);
    const car1 = new Car();
    car1.addInsurancePolicy(new InsurancePolicy());
}
{
    class InsurancePolicy {

    }

    const ADD_POLICY = Symbol();
    const GET_POLICY = Symbol();
    const IS_INSURED = Symbol();
    const _POLICY = Symbol();

    function makeInsurable(o) {
        o[ADD_POLICY] = function (p) { this[_POLICY] = p; };
        o[GET_POLICY] = function () { return this[_POLICY]; };
        o[IS_INSURED] = function () { return !!this[_POLICY]; };
    }
}