// EXECUTION CONTEXT
function test() {
  console.log("Hello World"); // kod ishga tushyapti
}
test(); // funksiya chaqirilyabdi

// LEXICAL ENVIRONMENT

function tashqi() {
  let ism = "Ali";
  function ichki() {
    // ichki funskiya ism ni ishlata oladi va LEXICAL ENVIRONMENT yuz beradi
    console.log("Hello " + ism);
  }
  ichki();
}
tashqi();
// AMMO TASHQARIDA ism ni ISHLATIB BO'LMAYDI
// LEXICAL ENVIRONMENT --- BU KOD YOZILGAN JOY BILAN BOG'LIQ MUHIT

// SCOPE = KO'RISH DOIRASI
// TURLARI:
// 1. Global Scope --- Hammaga Ko'rinadigan
// 2. Funcytion Scope ---- Faqat Funksiya Ichida Ko'rinadigan Narsalar
// 3. Block Scope ---  let const - faqat { } ichida ko'rinadigan narsalar

// Misol;
let global = "Men hammaga ko'rinaman";

function test(global) {
  let local = "Faqat funksiya ichida ko'rinaman";
  console.log(global); // ishlaydi         Tashqaridagi Narsa Funksiya Ichida Ko'rinadi
  console.log(local); // ishlaydi
}
console.log(global); // ishlaydi           Chunki Bu Global Scope
test(global);
// console.log(local); // xato! tashqarida ko‘rinmaydi   (Function Scope)      Funskiya Ichidagi Narsa Tashqarida Ko'rinmaydi

// HOISTING --- Faqat function decloration bilan ishlaydi

sayHi();
function sayHi() {
  console.log("Hi");
}

//  function expression

// sayHello(); // TypeError
// var sayHello = function () {
//   console.log("Hello!");
// };
