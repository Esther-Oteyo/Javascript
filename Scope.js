let globalvar = "i'm a global variable";

function demoscope() {
    let localvar  = "i'm a locai variable";
    console.log(globalvar);
    console.log(localvar);
}

demoscope();
console.log(globalvar);
