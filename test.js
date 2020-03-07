function Inc() {
    let i = 0;
    this.toString = function() {
        return ++i;
    }
}

let inc = new Inc();

alert(inc);
alert(inc);
alert(inc + inc);

