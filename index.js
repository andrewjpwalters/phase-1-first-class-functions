function receivesAFunction(cb) {
    return cb();
};

function returnsANamedFunction() {
    return function Hello() {
        console.log('hello')
    }
}

function returnsAnAnonymousFunction() {
    return x => x + x
}