function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    function namedFunc(params) {
        return params;
    }

    return namedFunc;
}

function returnsAnAnonymousFunction() {
    return function(){
        return "this is a callback";
    }
}