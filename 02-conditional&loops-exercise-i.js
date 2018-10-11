for (var i = 1; i<31; i++) {
    if ((Number.isInteger(i/3)) && (Number.isInteger(i/5))) { 
        console.log ('Hong Kong');
    } else if (Number.isInteger(i/3)) {
        console.log ('Hong');
    } else if (Number.isInteger(i/5)) {
        console.log ('Kong');
    } else { console.log (i);
    }
}