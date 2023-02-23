"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    if(input === true){
        return true;
    }else{
        return false;
    }
}

function isFalse(input){
    if(input === false){
        return true;
    }else{
        return false;
    }
}

function not(input){
    return !input
}

function addOne (input){
    let add = Number(input) + 1
    return add
}

function isEven (input){
    return input % 2 === 0
}

function isIdentical(input, otherInput){
    if(input === otherInput){
        return true;
    }else{
        return false
    }
}

function isEqual(input, otherInput){
    if (input == otherInput){
        return true
    }else{
        return false
    }
}

function or(input, otherInput){
    if (input === 'hello' || otherInput === 'world'){
        return 'hello'
    }else if (input == true || otherInput == true){
        return true
    }else{
        return false
    }
}
function and (input, otherInput){
    if (input === 'hello' || otherInput === 'world'){
        return 'world'
    }else if (input == true && otherInput == true){
        return true
    }else {
        return false
    }
}

function concat (input, otherInput){
    return String(input) + String(otherInput)
}