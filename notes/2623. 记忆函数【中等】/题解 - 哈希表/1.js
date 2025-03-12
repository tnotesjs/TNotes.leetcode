function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (args in cache) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    };
}