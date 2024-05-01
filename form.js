document.querySelector('button[type="submit"]').onclick = function() {
    let password = document.getElementById("password").value;
    let passwordConf = document.getElementById("passwordconf").value;
    
    if (password == "") {
        alert("empty")
    }
    else if (password != passwordConf) {
        alert ("does not match")
        return false;
    }
    else{
        alert("matched")
        return true;
    }
}
