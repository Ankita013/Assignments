alert("JS file loaded!");

function calculator(operation) {
    let a = parseInt(document.getElementById("first_num").value);
    let b = parseInt(document.getElementById("second_num").value);

    let ans;

    // switch (operation) {
    //     case "add":
    //         ans = a + b;
    //         break;
    //     case "sub":
    //         ans = a - b;
    //         break;
    //     case "mul":
    //         ans = a * b;
    //         break;
    //     case "div":
    //         ans = a / b;
    //         break;
    // }
    if (operation === "add") {
    ans = a + b;
    } 
    else if (operation === "sub") {
        ans = a - b;
    }
    else if (operation === "mul") {
        ans = a * b;
    }
    else if (operation === "div") {
        ans = a / b;
    }
    else {
        ans = "Invalid operation";
    }

    document.getElementById("result").innerHTML = ans;
}
