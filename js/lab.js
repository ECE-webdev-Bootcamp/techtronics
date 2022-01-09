document.getElementById("lab1btn").onclick = function() {

    var m = document.getElementById("lab1");
    var n = document.getElementById("lab2");
    if(n.style.display == "block"){
        n.style.display = "none";
    }
    if(m.style.display == "block"){
        m.style.display = "none";
    }else {
        m.style.display = "block";
    }
}

document.getElementById("lab2btn").onclick = function() {
    var m = document.getElementById("lab2");
    var n = document.getElementById("lab1");
    if(n.style.display == "block"){
        n.style.display = "none";
    }

    if(m.style.display == "block"){
        m.style.display = "none";
    }else{
        m.style.display = "block";
    }
}
    


    