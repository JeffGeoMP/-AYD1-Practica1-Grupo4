/**
 * 
 * @author Jefferson Geovanny Moreno Perez - 201603047 
 */
function IsPalindrome(word) {
    let InputBuffer = "" + word;                //Trasladamos la cadena si este fuera un numero
    let ReverseBuffer = "";                     //Iniciamos la cadena que contendra la palabra al revez

    for(let i = InputBuffer.length; i>=0 ; i--){
        ReverseBuffer = ReverseBuffer + InputBuffer.charAt(i);
    }
    return InputBuffer.toLowerCase() == ReverseBuffer.toLowerCase() ? true : false
}   
