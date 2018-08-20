var cells = document.querySelectorAll('td');
var arr = [...cells].reverse();
var open = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var open1 = [];

let begind = () => {
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }
    open1 = open.sort(compareRandom);
    [...cells].forEach((cell, i) => {
        cell.children[0].textContent = open1[i];
        cell.children[0].hidden = true;
        cell.style.backgroundColor = 'white';
    });
}
begind();

var proverka = [];
var openTd = [];
var openI = [];
var winArr = [];

[...cells].forEach((cell, i) => {
    cell.addEventListener('click', (event) => {
        function dontTuch(number) {
            return number == i;
        }
        if (winArr.some(dontTuch)) {
            cell.children[0].hidden = true;
        } else {
            proverka.push(cell.children[0].textContent);
            openTd.push(cell);
            openI.push(i);
            cell.children[0].hidden = false;
            if (proverka.length == 2) {
                if (proverka[0] == proverka[1]) {
                    let q = () => {
                        openTd[0].children[0].hidden = true;
                        openTd[1].children[0].hidden = true;
                        openTd[0].style.backgroundColor = 'red';
                        openTd[1].style.backgroundColor = 'red';
                        winArr = winArr.concat(openI);
                        proverka.splice(0);
                        openTd.splice(0);
                        openI.splice(0);
                        console.log(`3p`, winArr);
                    }
                    setTimeout(q, 500);
                    let w = () => {
                        if (winArr.length > 15) {
                            begind();
                            winArr.splice(0);
                        }
                    }
                    setTimeout(w, 1000);
                } else {
                    let f = () => {
                        openTd[0].children[0].hidden = true;
                        openTd[1].children[0].hidden = true;
                        proverka.splice(0);
                        openTd.splice(0);
                        openI.splice(0);

                    }
                    setTimeout(f, 500);
                }
            }
        }

    });
});