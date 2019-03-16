const inputs = [
    "this is it.",
    "hello world"
];

String.prototype.getSubStringCount = function (word) {
    return this.split(word).length - 1;
}

 const getUniqueChars = (str) => {
    let output = "";
    for(var i=0;i<str.length;i++) {
        if (str.getSubStringCount(str[i]) === 1) {
            output = output.concat(str[i]);
        }
    }
    return output;
 }

 //test

 inputs.forEach((input) => {
     console.log(getUniqueChars(input));
 })