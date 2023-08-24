// tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + 3  + ... + n > 10000
function findMinNumber(n) {
  let sum = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
  console.log(n);
}
findMinNumber(0);

// Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 + ... + x^n (sử dụng vòng lặp và hàm)
function sum(x, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  console.log(sum);
}
sum(2, 3);

// Nhập vào n. Tính gia thừa 1*2*...n (sử dụng vòng lặp và hàm)
function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  console.log(sum);
}
factorial(5);

// Viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
document.querySelector("#btnClick").onclick = function () {
  let div = document.querySelector(".content");
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      div.innerHTML += `<div class="box mb-3" style="background: red">Đây là div chẵn</div>`;
    } else {
      div.innerHTML += `<div class="box mb-3" style="background: blue">Đây là div lẻ</div>`;
    }
  }
};

// Viết chương trình có 1 ô input, 1 button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input
document.querySelector("#btnClick2").onclick = function () {
  let number = document.querySelector("#number").value;
  kiemTraSNT(number);
};

function kiemTraSNT(number) {
  let div = document.querySelector(".content2");
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      i % j == 0 && count++;
    }
    count == 2 && (div.innerHTML += `<div class="box mb-3">${i}</div>`);
  }
}
