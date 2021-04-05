function send() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    actual_ans = parseInt(num1) * parseInt(num2);

    var question = "<h4>" + num1 + "X" + num2 + "</h4>";
    var answer = "<br>Answer : <input type='text' id='answer_input'>";
    var check_Btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = question + answer + check_Btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}