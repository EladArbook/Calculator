let temp = "0", result = 0,
    fraction = 0, action = "",
    copy = "";
let screenNum = document.getElementById("screenNum");   /*   1    */

// window.addEventListener('load', function () {
//     document.getElementById("screenNum").maxLength = "10";
// })
buttonCle.focus();

function buttonCle() {
    result = 0;
    temp = "0";
    fraction = 0;
    screenResult();
}

function buttonDot() {
    if (temp.length < 9) {
        if (fraction == 0) {
            if (temp == 0)
                temp += ".";
            else  //temp != 0
                temp += ".";
            fraction = 1;
            document.getElementById("screenNum").innerHTML = temp;
        }
    }


}

function buttonPos() {
    if (temp != 0)
        result = temp;
    if (result < 0)
        result *= ("-1");
    screenResult();
}

function buttonNeg() {
    if (temp != 0)
        result = temp;
    if (result > 0) {
        result *= ("-1");
        screenResult();
    }
}

function buttonCop() {
    if (temp != 0)
        copy = temp;
    else
        copy = result;
}

function buttonPas() {

    if (temp == 0)
        temp = copy;
    else
        temp += copy;
    if (result % 1 != 0)
        fraction = 1;
    document.getElementById("screenNum").innerHTML = temp;
}

function buttonSqr() {
    if (temp != 0)
        result = temp;
    if (result < 0)
        error();
    else {
        result = Math.sqrt(result);
        screenResult();
    }
}

function buttonSup() {
    if (temp != 0) {
        result = temp;
        temp = "0";
    }
    result **= 2;
    if (result > 999999999 || result < -99999999)
        error();
    else
        screenResult();
}

function button1() {
    if (temp.length < 9) {
        // alert("1");
        if (fraction == 1 || temp != 0) {
            temp += "1";
        }
        else {
            temp = "1";
        }
        document.getElementById("screenNum").innerHTML = temp;                                        /*             2           */


    }
}

function button2() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "2";
        else
            temp = "2";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function button3() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "3";
        else
            temp = "3";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function buttonMul() {
    if (result != 0) {
        resultCalc();
    }
    else { //result == 0
        result = temp;
        temp = "0";
    }
    action = "*";
    fraction = 0;
    document.getElementById("screenAction").innerHTML = action;
    if (result > 999999999 || result < -99999999)
        error();
}

function button4() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "4";
        else
            temp = "4";
        document.getElementById("screenNum").innerHTML = temp;
    }
}
function button5() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "5";
        else
            temp = "5";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function button6() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "6";
        else
            temp = "6";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function buttonDiv() {
    if (result != 0) {
        resultCalc();
    }
    else { //result == 0
        result = temp;
        temp = "0";
    }
    action = "/";
    fraction = 0;
    document.getElementById("screenAction").innerHTML = action;
    if (result > 999999999 || result < -99999999)
        error();
}

function button7() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "7";
        else
            temp = "7";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function button8() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "8";
        else
            temp = "8";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function button9() {
    if (temp.length < 9) {
        if (fraction == 1 || temp != 0)
            temp += "9";
        else
            temp = "9";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function buttonEqu() {
    if (result != 0) {
        resultCalc();
    }
    else { //result == 0
        result = temp;
        if (action == "-")
            result *= "-1";
        document.getElementById("screenNum").innerHTML = result;
    }
    action = "";
    document.getElementById("screenAction").innerHTML = action;
    temp = "0";

    if (result > 999999999 || result < -99999999)
        error();
}

function buttonMin() {
    if (result != 0) {
        resultCalc();
    }
    else { //result == 0
        result = temp;
        temp = "0";
    }
    action = "-";
    fraction = 0;
    document.getElementById("screenAction").innerHTML = action;
    if (result > 999999999 || result < -99999999)
        error();
}

function button0() {
    if (temp.length < 9) {
        if (temp != 0)
            temp += 0;
        else if (fraction == 1)
            temp += "0";
        document.getElementById("screenNum").innerHTML = temp;
    }
}

function buttonPul() {
    if (result != 0) {
        resultCalc();
    }
    else { //result == 0
        result = temp;
        temp = "0";
    }
    action = "+";
    fraction = 0;
    document.getElementById("screenAction").innerHTML = action;
    if (result > 999999999 || result < -99999999)
        error();
}

function resultCalc() {
    if (action == "+")
        result = Number(result) + Number(temp);

    if (action == "-")
        result = Number(result) + ("-1" * Number(temp));

    if (action == "*")
        result = Number(result) * Number(temp);

    if (action == "/") {
        if (temp == 0) {
            error();
        }
        else
            result = Number(result) / Number(temp);
    }

    if (result % 1 != 0)
        fraction = 1;
    temp = "0";
    if (document.getElementById("screenNum").innerHTML != "ERROR")
        screenResult();
}

function error() {
    result = action = 0;
    action = "";
    document.getElementById("screenNum").innerHTML = "ERROR";
    document.getElementById("screenAction").innerHTML = action;

    /*  Calling condition:
     if (result > 999999999 || result < -99999999)
        error();
        */
}

function screenResult() {
    action = "";
    document.getElementById("screenNum").innerHTML = result;
    document.getElementById("screenAction").innerHTML = action;
}

