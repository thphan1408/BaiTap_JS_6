// tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + 3  + ... + n > 10000
function findMinNumber() {
  let n = +document.getElementById("number1").value;
  let div = document.querySelector(".result");
  let sum = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }
  div.innerHTML = `<p style="font-size: 20px">Số nguyên dương nhỏ nhất sao cho: 1 + 2 + 3  + ... + n > 10000 là: <span style="color: red; font-size: 20px"> ${n} </span></p> `;
}

// Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 + ... + x^n (sử dụng vòng lặp và hàm)
function sum() {
  let x = +document.getElementById("number2").value;
  let n = +document.getElementById("number3").value;
  let div = document.querySelector(".result2");

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  div.innerHTML = `<p style="font-size: 20px">Tổng S(n) = x + x^2 + x^3 + ... + x^n là: <span style="color: red; font-size: 20px"> ${sum} </span></p> `;
}

// Nhập vào n. Tính gia thừa 1*2*...n (sử dụng vòng lặp và hàm)
function factorial() {
  let n = +document.getElementById("number4").value;
  let div = document.querySelector(".result3");

  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  console.log(sum);
  div.innerHTML = `<p style="font-size: 20px">Tổng 1*2*...n là: <span style="color: red; font-size: 20px"> ${sum} </span></p> `;
}

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
