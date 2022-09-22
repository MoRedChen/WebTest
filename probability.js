function cal() {
    if (document.getElementById("title").innerHTML == "機率計算") {
        if (document.getElementById("one").value < 0) {
            document.getElementById("output").innerHTML = "機率不能為負數";
        } else if (document.getElementById("two").value <= 0 || document.getElementById("two").value % 1 != 0) {
            document.getElementById("output").innerHTML = "次數必須為正整數";
        } else {
            probability = document.getElementById("one").value / 100;
            times = document.getElementById("two").value;
            output = 1 - Math.pow((1 - probability), times);
            document.getElementById("output").innerHTML = (output * 100).toFixed(2) + "%";
        }
    } else {
        if (document.getElementById("one").value <= 0 || document.getElementById("two").value <= 0) {
            document.getElementById("output").innerHTML = "機率不能為0或負數";
        } else {
            probability = document.getElementById("one").value / 100;
            expect = document.getElementById("two").value / 100;
            output = Math.log(1 - expect) / Math.log(1 - probability);
            document.getElementById("output").innerHTML = Math.ceil(output) + "次";
        }
    }
}

function switch_mode() {
    if (document.getElementById("title").innerHTML == "機率計算") {
        document.getElementById("title").innerHTML = "次數計算";
        document.getElementById("label-two").innerHTML = "期望機率：";
        document.getElementById("two").placeholder = "請輸入0~100的數值";
        document.getElementById("two-measure").innerHTML = "%";
        document.getElementById("label-three").innerHTML = "所需次數：";
        document.getElementById("one").value = "";
        document.getElementById("two").value = "";
        document.getElementById("output").innerHTML = "??? 次";
    } else {
        document.getElementById("title").innerHTML = "機率計算";
        document.getElementById("label-two").innerHTML = "抽獎次數：";
        document.getElementById("two").placeholder = "請輸入大於或等於1的整數";
        document.getElementById("two-measure").innerHTML = "次";
        document.getElementById("label-three").innerHTML = "抽中機率：";
        document.getElementById("one").value = "";
        document.getElementById("two").value = "";
        document.getElementById("output").innerHTML = "??? %";
    }
}