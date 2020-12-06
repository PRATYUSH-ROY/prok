var adxd;
var players;
var pn = 0;
var sc1 = 0;
var sc2 = 0;
var ply;

function sett() {
    var name1 = document.getElementById("inp1").value;
    var name2 = document.getElementById("inp12").value;
    localStorage.setItem("names", [name1, name2])
    localStorage.setItem("scrores", [0, 0])
    localStorage.setItem("player", name1)
    window.location = "game.html"

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function load() {
    players = localStorage.getItem("names").split(",");
    document.getElementById("namee2").innerHTML = localStorage.getItem("names").split(",")[1];
    document.getElementById("namee1").innerHTML = localStorage.getItem("names").split(",")[0];
    sc1 = localStorage.getItem("scrores").split(",")[0];
    sc2 = localStorage.getItem("scrores").split(",")[1];
    ply = localStorage.getItem("player");
    pn = players.indexOf(ply);
    console.log(pn)
    document.getElementById("scr1").innerHTML = sc1;
    document.getElementById("scr2").innerHTML = sc2;
}

function math() {
    var name1 = document.getElementById("inp11").value;
    var name2 = document.getElementById("inp121").value;
    localStorage.setItem("math", [name1, name2]);
    document.getElementById("ffff").style.display = "none";
    document.getElementById("gggg").style.display = "block";
    var add = Number(name1) + Number(name2);
    var ans = [add, (name1 - name2), (name1 * name2), (name1 / name2)];
    no = randomNumber(0, 3);
    adxd = ans[no];
    var signs = ["+", "-", "x", "/"];
    document.getElementById("ques2").innerHTML = name1 + " " + signs[no] + " " + name2 + "= __________";
}

function go() {


    if (document.getElementById("inp111").value == adxd) {
        if (pn == 0) {
            sc1++;
        } else if (pn == 1) {
            sc2++;
        }
        localStorage.setItem("scrores", [sc1, sc2])
    }


    if (pn == 0) {
        pn = 1;
    } else if (pn == 1) {
        pn = 0;
    }

    localStorage.setItem("player", players[pn])
    document.getElementById("scr1").innerHTML = sc1;
    document.getElementById("scr2").innerHTML = sc2;
    document.getElementById("ffff").style.display = "block";
    document.getElementById("gggg").style.display = "none";
    console.log(pn);
}