/*
function fun(num) {
    if (num < 1) return;
    
    num = num - 1;
    fun(num);
    console.log(num + 1);
}
// */

fun(5);

let n = 5;
function fun(x) {
    if (x > n) return;
    console.log(x);
    x++;
    fun(x);
}

fun(1);