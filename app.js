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

// PHASES

//  EXECUTION CONTEXTNI 3 FAZASI
// CREATION PHASE ( yaratish bosqichi )
// 1. Bu Boshqichda JS Engine Kodni O'qib Oladi
// 2. Scope Aniqlaydi ( lexical environmenthosil bo'ladi )
// 3. var --- rlon qlinsa qiymati undefined qlib qo'yiladi
// 4. let ba const elon qlinsa Temporal Dead Zone ( TDZ: Vaqtinchalik O'lik Zona ) ga Tushadi
// 5. function deklareshnlar to'liq tanasi bilan Memory ga yuklanadi
