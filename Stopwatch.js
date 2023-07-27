let millisecond = document.getElementById("millisecond");
millisecond.innerHTML = "00";

let second = document.getElementById("second");
second.innerHTML = "00";

document.getElementById("start").onclick = function () {
    let timer = setInterval(startm, 10);
    function startm() {
        millisecond.innerHTML++;
        if (millisecond.innerHTML < 10) {
            millisecond.innerHTML = "0" + millisecond.innerHTML;
        }
        if (millisecond.innerHTML > 99) {
            millisecond.innerHTML = "00";
            second.innerHTML++;
            if (second.innerHTML < 10) {
                second.innerHTML = "0" + second.innerHTML;
            }
        }
    }

    document.getElementById("stop").onclick = function () {
        clearInterval(timer);
    };

    document.getElementById("reset").onclick = function () {
        clearInterval(timer);
        millisecond.innerHTML = "00";
        second.innerHTML = "00";
    };
};
