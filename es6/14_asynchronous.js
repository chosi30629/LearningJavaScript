// // 콜백
// {
//     console.log("Before timeout: " + new Date());
//     function f() {
//         console.log("After timeout: " + new Date());
//     }
//     setTimeout(f, 2000);    // 60 * 1000 = 1분
//     console.log("I happen after setTimeout!");
//     console.log("Me too!");
// }
// {
//     console.log("Before timeout: " + new Date());

//     setTimeout(function () {
//         console.log("After timeout: " + new Date());
//     }, 2000);               // 60 * 1000 = 1분
//     console.log("I happen after setTimeout!");
//     console.log("Me too!");
// }

// {
//     const start = new Date();
//     let i = 0;
//     const intervalId = setInterval(function () {
//         let now = new Date();
//         if (now.getMinutes() !== start.getMinutes() || ++i > 10)
//             return clearInterval(intervalId);
//         console.log(`${i}: ${now}`);
//     }, 2000);
// }

// {
//     function countdown() {
//         let i;          // i를 for 루프 밖에서 선언
//         console.log("Countdown:");
//         for (i = 5; i >= 0; i--) {
//             setTimeout(function () {
//                 console.log(i === 0 ? "Go!" : i);
//             }, (5 - i) * 1000);
//         }
//     }
//     countdown();
// }
// {
//     function countdown() {
//         console.log("Countdown:");
//         for (let i = 5; i >= 0; i--) {
//             setTimeout(function () {
//                 console.log(i === 0 ? "Go!" : i);
//             }, (5 - i) * 1000);
//         }
//     }
//     countdown();
// }

// {
//     const fs = require('fs');

//     const fname = 'may_or_may_not_exist.txt';
//     fs.readFile(fname, function (err, data) {
//         if (err) return console.error(`error reading file ${fname}: ${err.message}`);
//         console.log(`${fname} contents: ${data}`);
//     });
// }
// /*
// {
//     const fs = require('fs');

//     fs.readFile('a.txt', function (err, dataA) {
//         if (err) console.error(err);
//         fs.readFile('b.txt', function (err, dataB) {
//             if (err) console.error(err);
//             fs.readFile('c.txt', function (err, dataC) {
//                 if (err) console.error(err);
//                 setTimeout(function () {
//                     fs.writeFile('d.txt', dataA + dataB + dataC, function (err) {
//                         if (err) console.error(err);
//                     });
//                 }, 60 * 1000);
//             });
//         });
//     });
// }
// */
// /*
// {
//     const fs = require('fs');
//     function readSketchyFile() {
//         try {
//             fs.readFile('does_not_exist.txt', function (err, data) {
//                 if (err) throw err;
//             });
//         } catch (err) {
//             console.log('warning: minor issue occurred, program continuing');
//         }
//     }
//     readSketchyFile();
// }
// */


// // 프라미스
// {
//     function countdown(seconds) {
//         return new Promise(function (resolve, reject) {
//             for (let i = seconds; i >= 0; i--) {
//                 setTimeout(function () {
//                     if (i > 0) console.log(i + '...');
//                     else resolve(console.log("Go!"));
//                 }, (seconds - i) * 1000);
//             }
//         });
//     }

//     countdown(5).then(
//         function () {
//             console.log("countdown completed successfully");
//         },
//         function (err) {
//             console.log("countdown experienced an error: " + err.message);
//         }
//     );

//     const p = countdown(5);
//     p.then(function () {
//         console.log("countdown completed successfully");
//     });
//     p.catch(function (err) {
//         console.log("countdown experienced an error: " + err.message);
//     });
// }
// {
//     function countdown(seconds) {
//         return new Promise(function (resolve, reject) {
//             for (let i = seconds; i >= 0; i--) {
//                 setTimeout(function () {
//                     if (i === 13) return reject(new Error("Oh my god"));
//                     if (i > 0) console.log(i + '...');
//                     else resolve(console.log("Go!"));
//                 }, (seconds - i) * 1000);
//             }
//         });
//     }

//     const p = countdown(14);
//     p.then(function () {
//         console.log("countdown completed successfully");
//     });
//     p.catch(function (err) {
//         console.log("countdown experienced an error: " + err.message);
//     });
// }

// {
//     const EventEmitter = require('events').EventEmitter;

//     class Countdown extends EventEmitter {
//         constructor(seconds, superstitious) {
//             super();
//             this.seconds = seconds;
//             this.superstitious = superstitious;
//         }
//         go() {
//             const countdown = this;
//             return new Promise(function (resolve, reject) {
//                 for (let i = countdown.seconds; i >= 0; i--) {
//                     setTimeout(function () {
//                         if (countdown.superstitious && i === 13) return reject(new Error("Oh my god!"));
//                         countdown.emit('tick', i);
//                         if (i === 0) resolve();
//                     }, (countdown.seconds - i) * 1000);
//                 }
//             });
//         }
//     }
//     /*
//     const c = new Countdown(13);
//     c.on('tick', function (i) {
//         if (i > 0) console.log(i + '...');
//     });
//     c.go()
//         .then(function () {
//             console.log('Go!');
//         })
//         .catch(function (err) {
//             console.error(err.message);
//         });
//     */
//     const c = new Countdown(13, true)
//         .on('tick', function (i) {          // 체인으로 연결해도 됨
//             if (i > 0) console.log(i + '...');
//         });
//     c.go()
//         .then(function () {
//             console.log('Go!');
//         })
//         .catch(function (err) {
//             console.error(err.message);
//         });
// }
// {
//     const EventEmitter = require('events').EventEmitter;

//     class Countdown extends EventEmitter {
//         constructor(seconds, superstitious) {
//             super();
//             this.seconds = seconds;
//             this.superstitious = superstitious;
//         }
//         go() {
//             const countdown = this;
//             const timeoutIds = [];
//             return new Promise(function (resolve, reject) {
//                 for (let i = countdown.seconds; i >= 0; i--) {
//                     timeoutIds.push(setTimeout(function () {
//                         if (countdown.superstitious && i === 13) {
//                             // 대기중인 타임아웃을 모두 취소
//                             timeoutIds.forEach(clearTimeout);
//                             return reject(new Error("Oh my god!"));
//                         }
//                         countdown.emit('tick', i);
//                         if (i === 0) resolve();
//                     }, (countdown.seconds - i) * 1000));
//                 }
//             });
//         }
//     }

//     const c = new Countdown(13, true)
//         .on('tick', function (i) {
//             if (i > 0) console.log(i + '...');
//         });
//     c.go()
//         .then(function () {
//             console.log('Go!');
//         })
//         .catch(function (err) {
//             console.error(err.message);
//         });
// }
// {
//     const EventEmitter = require('events').EventEmitter;

//     class Countdown extends EventEmitter {
//         constructor(seconds, superstitious) {
//             super();
//             this.seconds = seconds;
//             this.superstitious = superstitious;
//         }
//         go() {
//             const countdown = this;
//             const timeoutIds = [];
//             return new Promise(function (resolve, reject) {
//                 for (let i = countdown.seconds; i >= 0; i--) {
//                     timeoutIds.push(setTimeout(function () {
//                         if (countdown.superstitious && i === 13) {
//                             // 대기중인 타임아웃을 모두 취소
//                             timeoutIds.forEach(clearTimeout);
//                             return reject(new Error("Oh my god!"));
//                         }
//                         countdown.emit('tick', i);
//                         if (i === 0) resolve();
//                     }, (countdown.seconds - i) * 1000));
//                 }
//             });
//         }
//     }

//     function launch() {
//         return new Promise(function (resolve, reject) {
//             console.log("Lift off!");
//             setTimeout(function () {
//                 resolve("In orbit!");
//             }, 2 * 1000);         // 2초만에 궤도에 도달하다니!
//         });
//     }

//     const c = new Countdown(15, true)
//         .on('tick', i => console.log(i + '...'));

//     c.go()
//         .then(launch)
//         .then(function (msg) {
//             console.log(msg, "asdfsdf");
//         })
//         .catch(function (err) {
//             console.error("Houston, we have a problem.....");
//         });
// }

// {
//     const EventEmitter = require('events').EventEmitter;

//     class Countdown extends EventEmitter {
//         constructor(seconds, superstitious) {
//             super();
//             this.seconds = seconds;
//             this.superstitious = superstitious;
//         }
//         go() {
//             const countdown = this;
//             const timeoutIds = [];
//             return new Promise(function (resolve, reject) {
//                 for (let i = countdown.seconds; i >= 0; i--) {
//                     timeoutIds.push(setTimeout(function () {
//                         if (countdown.superstitious && i === 13) {
//                             // 대기중인 타임아웃을 모두 취소
//                             timeoutIds.forEach(clearTimeout);
//                             return reject(new Error("Oh my god!"));
//                         }
//                         countdown.emit('tick', i);
//                         if (i === 0) resolve();
//                     }, (countdown.seconds - i) * 1000));
//                 }
//             });
//         }
//     }

//     function launch() {
//         return new Promise(function (resolve, reject) {
//             if (Math.random() < 0.5) return;     // 문제가...
//             console.log("Lift off!");
//             setTimeout(function () {
//                 resolve("In orbit!");
//             }, 2 * 1000);         // 2초만에 궤도에 도달하다니!
//         });
//     }

//     function addTimeout(fn, timeout) {
//         if (timeout === undefined) timeout = 1000;   // 타임아웃 기본값
//         return function (...args) {
//             return new Promise(function (resolve, reject) {
//                 const tid = setTimeout(reject, timeout, new Error("Promise timed out"));
//                 fn(...args)
//                     .then(function (...args) {
//                         clearTimeout(tid);
//                         resolve(...args);
//                     })
//                     .catch(function (...args) {
//                         clearTimeout(tid);
//                         reject(...args);
//                     });
//             });
//         };
//     }

//     const c = new Countdown(12, true)
//         .on('tick', i => console.log(i + '...'));

//     c.go()
//         .then(addTimeout(launch, 11 * 1000))
//         .then(function (msg) {
//             console.log(msg);
//         })
//         .catch(function (err) {
//             console.error("Houston, we have a problem: " + err.message);
//         });
// }


// 제너레이터
{
    const fs = require('fs');
    function nfcall(f, ...args) {
        return new Promise(function (resolve, reject) {
            f.call(null, ...args, function (err, ...args) {
                if (err) return reject(err);
                resolve(args.length < 2 ? args[0] : args);
            });
        });
    }

    function ptimeout(delay) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, delay);
        });
    }

    function grun(g) {
        const it = g();
        (function iterate(val) {
            const x = it.next(val);
            if (!x.done) {
                if (x.value instanceof Promise) {
                    x.value.then(iterate).catch(err => it.throw(err));
                } else {
                    setTimeout(iterate, 0, x.value);
                }
            }
        })();
    }
    /*
    function* theFutureIsNow() {
        const dataA = yield nfcall(fs.readFile, 'a.txt');
        const dataB = yield nfcall(fs.readFile, 'b.txt');
        const dataC = yield nfcall(fs.readFile, 'c.txt');
    */
    /*
     function* theFutureIsNow() {
         const data = yield Promise.all([
             nfcall(fs.readFile, 'a.txt'),
             nfcall(fs.readFile, 'b.txt'),
             nfcall(fs.readFile, 'c.txt'),
         ]);
         yield ptimeout(10 * 1000);
         yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
     }
     */
    function* theFutureIsNow() {
        let data;
        try {
            data = yield Promise.all([
                nfcall(fs.readFile, 'a.txt'),
                nfcall(fs.readFile, 'b.txt'),
                nfcall(fs.readFile, 'c.txt'),
            ]);
        } catch (err) {
            console.error("Unable to read one or more input files: " + err.message);
            throw err;
        }
        yield ptimeout(10 * 1000);
        try {
            yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
        } catch (err) {
            console.error("Unable to write output files: " + err.message);
            throw err;
        }
    }

    grun(theFutureIsNow);
}