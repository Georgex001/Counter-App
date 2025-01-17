let Label = document.getElementById('count-label')

let Plus = document.getElementById('plus-btn')
let Reset = document.getElementById('reset-btn')
let Minus = document.getElementById('minus-btn')

let Count = 0;


Plus.onclick = function() {
    Count++
    Label.textContent = Count;
}

Reset.onclick = function() {
    Count = 0;
    Label.textContent = Count;
}

Minus.onclick = function() {
    Count--
    Label.textContent = Count;
}
