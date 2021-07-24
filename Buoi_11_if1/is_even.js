      // câu lệnh điều kiện
    // function is_even() {
    //     let number = document.getElementById("number").value;
    //     let even = number % 2 == 0;  // true/false

    //     if(even) {
    //         alert( number + " Là số chẵn")
    //     }
    //     else {
    //         alert ( number + " Không là số chẵn")
    //     }
    // }



    // biểu thức điều kiện
    function is_even() {
        let number = document.getElementById("number").value;
        let even = number % 2 ==0;

        alert( even ? number+ " là số chẵn" : number + " không là số chẵn")
    }