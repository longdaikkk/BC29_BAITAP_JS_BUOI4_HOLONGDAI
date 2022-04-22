/**
 * Bài tập 1: Sắp xếp số nguyên tăng dần
 */
document.getElementById("result_1").onclick = function () {
    /**
     * Đầu vào
     */
    var a = document.getElementById("number_1").value * 1;
    var b = document.getElementById("number_2").value * 1;
    var c = document.getElementById("number_3").value * 1;
    var number1 = "";
    var number2 = "";
    var number3 = "";
    /**
     * Xử lý
     */
    //Tìm số lớn hơn giữa a và b
    if (a >= b) {
        number1 = a;
        number2 = b;
    } else {
        number1 = b;
        number2 = a;
    }
    //Tìm số lớn nhất số lớn nhì và số lớn ba
    if (number1 >= c) {
        if (number2 >= c) {
            number3 = c;
        } else {
            number3 = number2;
            number2 = c;
        }
    } else {
        number3 = number2;
        number2 = number1;
        number1 = c;
    }
    /**
     * Đầu ra
     */
    document.getElementById("bt_1").innerHTML = "";
    tagP = document.createElement("p");
    tagP.innerHTML = "Thứ tự tăng dần là: " + number3 + " " + number2 + " " + number1;
    document.getElementById("bt_1").appendChild(tagP);
}

/**
 * Bài tập 2: Chào hỏi
 */
document.getElementById("result_2").onclick = function () {
    /**
     * Đầu vào
     */
    var user = document.getElementById("user").value;
    var txtOutput = "";
    /**
     * Xử lý
     */
    if (user == "B") {
        txtOutput = "Bố";
    } else if (user == "M") {
        txtOutput = "Mẹ";
    } else if (user == "A") {
        txtOutput = "Anh Trai";
    } else if (user == "E") {
        txtOutput = "Em Gái";
    } else {
        txtOutput = "sai";
    }
    var content = "";
    /**
     * Đầu ra
     */
    document.getElementById("bt_2").innerHTML = "";
    var tagP = document.createElement("p");
    if (txtOutput == "sai") {
        tagP.innerHTML = "Nhập sai (Chỉ được nhập B, M, A, E)";
        content += "<a href = \"./index.html\">Nhấn để nhập lại</a>";
    } else {
        tagP.innerHTML = "Xin chào " + txtOutput;
        content += "<a href = \"./index.html\">Quay lại</a>";
    }
    document.getElementById("bt_2").appendChild(tagP);
    document.getElementById("Home").innerHTML = content;
}

/**
 * Bài tập 3: Kiểm tra chẵn lẻ
 */
document.getElementById("result_3").onclick = function () {
    /**
     * Đầu vào
     */
    var number1 = document.getElementById("number_4").value * 1;
    var number2 = document.getElementById("number_5").value * 1;
    var number3 = document.getElementById("number_6").value * 1;
    var demChan = 0;
    var demLe = 0;
    /**
     * Xử lý
     */
    if (number1 % 2 == 0) {
        demChan++;
    }
    if (number2 % 2 == 0) {
        demChan++;
    }
    if (number3 % 2 == 0) {
        demChan++;
    }
    /**
     * Đầu ra
     */
    demLe = 3 - demChan;
    document.getElementById("bt_3").innerHTML = "";
    var tagP = document.createElement("p");
    tagP.innerHTML = "Có " + demChan + " số chẵn và " + demLe + " số lẻ.";
    document.getElementById("bt_3").appendChild(tagP);
}

/**
 * Bài tập 4:
 */
document.getElementById("result_4").onclick = function () {
    /**
     *  Đầu vào
     */
    var a = document.getElementById("number_7").value * 1;
    var b = document.getElementById("number_8").value * 1;
    var c = document.getElementById("number_9").value * 1;
    //Khai báo các biến 
    var cHuyen = a;
    var cBen1 = b;
    var cBen2 = c;
    var result = "Tam giác";
    /**
     * Xử lý
     */
    // Tìm cạnh huyền và 2 cạnh bên 
    if (b > cHuyen) {
        cHuyen = b;
        cBen1 = a;
        cBen2 = c;
    }
    if (c > cHuyen) {
        cHuyen = c;
        cBen1 = b;
        cBen2 = a;
    }
    // Xét tam giác vuông
    if (cHuyen * cHuyen == cBen1 * cBen1 + cBen2 * cBen2) {
        result += " vuông";
    }

    if (a == b && a == c) {
        result += " đều";
    } else if (a == b || a == c || b == c) {
        result += " cân";
    } else if(result != "Tam giác vuông") {
        result += " thường";
    }
    // Kiểm tra có phải là tam giác hay không
    if ((a > 0 && b > 0 && c > 0) && (a + b > c) && (a + c > b) && (b + c > a)) {
        result += "";
    } else {
        result = "Không phải tam giác";
    }
    /**
     * Đầu ra
     */
    document.getElementById("bt_4").innerHTML = "";
    var tagP = document.createElement("p");
    tagP.innerHTML = result;
    document.getElementById("bt_4").appendChild(tagP);

}