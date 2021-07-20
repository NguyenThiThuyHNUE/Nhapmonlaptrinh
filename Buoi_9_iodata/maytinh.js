// // let demo = document.getElementsByClassName('number');


// // demo.addEventListener("mouseover", mouseover);
// // // demo.addEventListener("mouseout", mouseout);

// function mouseover() {
//     document.getElementsByClassName('number').style.backgroundColor = "red";
// }

// function mouseout() {
//     document.getElementsByClassName('number').style.backgroundColor = "green";
// }


 function cong(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let tong = parseFloat(number1) + parseFloat(number2);
    document.getElementById('result').innerHTML = tong;
}

function tru(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let hieu = number1 - number2;
    document.getElementById('result').innerHTML = hieu;
}

function nhan(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let tich = number1 * number2;
    document.getElementById('result').innerHTML = tich;
}

function chia(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let thuong = number1 / number2;
    document.getElementById('result').innerHTML = thuong;
}

//         let input1 = document.getElementById("toan_hang_1");
//         let input2 = document.getElementById("toan_hang_2");
//         let p = document.getElementById("ket_qua");

//         function cong() {
//             let number_1 = +input1.value;
//             let number_2 = +input2.value;
//             let result = number_1 + number_2;
//             p.innerHTML = "Result Division: " + result;
//         }

//         function tru() {
//             let number_1 = +input1.value;
//             let number_2 = +input2.value;
//             let result = number_1 - number_2;
//             p.innerHTML = "Result Division: " + result;
//         }
