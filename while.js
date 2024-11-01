/*let a = 1;
while (a <= 10) {
  console.log(a, "hello");
  a = a + 1;
}*/
/*let a = 1,
  b = 0;
while (a <= 20) {
  b += a;
  a += 1;
}
console.log(b);*/

/*let a = 1;
while (a < 20) {
  console.log(a);
  a = a + 2;
}*/
/*let a = 100,
  n = 1;
while (a > 1) {
  n *= a;
  a -= 1;
}
console.log(n);*/
// let a = 20,
//   b = 0,
//   c;

// while (b <= 9) {
//   c = b + 1;
//   b = b + 1;
//   console.log(a, "*", c, "=", a * c);
// }
// let a = 2912;
// b = 0;
// while (a > 0) {
//   b = b * 10 + (a % 10);
//   a = (a - (a % 10)) / 10;
// }
// console.log(b);
// let a = 1;
// while (a <= 100) {
//   if (a == 50) {
//     console.log("half way there!");
//   } else if (a == 100) {
//     console.log("You made it");
//   } else if (a % 10 == 0) {
//     console.log("checkpoint!", a);
//   }
//   a += 1;
// }
// console.log("All done");
// let a = 1,
//   b = 0;

// while (b <= 100) {
//   if (a <= 5) {
//     b = b + 5;
//   } else if (a > 5 && a <= 7) {
//     b = b + 10;
//   }
//   if (b >= 80 && b < 100) {
//     console.log(b, "warning");
//   } else if (b <= 100) {
//     console.log(b, "limit");
//   }
//   if (a > 6) {
//     a = 1;
//   } else a += 1;
// }
// let a = 1;
// while (a <= 10) {
//   if (a % 3 == 0) {
//     console.log("Танд үнэгүй бялуу бэлэглэж байна");
//   } else if (a % 10 == 0) {
//     console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!");
//   } else if (a <= 10) {
//     console.log("ta", a, "кофегоо худалдан авлаа");
//   }
//   a += 1;
// }
// console.log("Урамшууллын карт дууслаа!");
// let a = 10239179;
// let b = 0;
// while (a > 0) {
//   b = b * 1 + (a % 10);
//   a = (a - (a % 10)) / 10;
// }
// console.log(b);
// let a = 301;
// let c = 0;

// while (a > 0) {
//   let b = 0;

//   b = a % 10;
//   if (b > c) {
//     c = b;
//   }
//   a = (a - (a % 10)) / 10;
// }
// console.log(c);
// let a = 9999,
//   b = 3,
//   c,
//   p;
// if (a % 3 == 0) {
//   c = a / b;
//   p = ((b + a) / 2) * c;
//   console.log(p);
// }
let b = "";
let c = 0;
while (c < 9) {
  b = "*" + b;
  c = c + 1;
  console.log(b);
}
