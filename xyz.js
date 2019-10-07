// function add (a, b) {
//         return a + b
//     }

// module.exports = add




function myModule() {
    let foo = [];
    foo.testModule = function () {
        foo.push('one');
        foo.push('two');
    }
    return foo;
}

module.exports = myModule;
