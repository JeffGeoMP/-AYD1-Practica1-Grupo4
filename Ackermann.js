/*
Funcion ackermann
    By. Miguel Angel Solis Yantuche
        201700543
*/

function ackermann(m, n){
    if (m == 0) {
        return (n + 1);
    } else if (m > 0 && n == 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}