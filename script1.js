let captcha;

function generate() {
    document.getElementById("submit").value = "";
    captcha = document.getElementById("image");
    let uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 6; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    captcha.innerHTML = uniquechar;
}

function validation() {
    const usr_input = document.getElementById("submit").value;
    let x = document.forms["sampleform"]["name"].value;
    let y = document.forms["sampleform"]["email"].value;
    if (x == "" || y == "") {
        if (x == "") {
            alert("Name must be filled out");
        } else {
            alert("Email must be filled out");
        }
        alert("Name must be filled out");
        return false;
    } else if (usr_input == "") {
        alert("Captcha code must be filled out");
    } else if (usr_input != captcha.innerHTML) {
        alert("Captcha code Note Matched");
    } else {
        let s = document.write("Successfully Login");
        generate();
    }
}