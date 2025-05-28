function undefinedToNull(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = undefinedToNull(obj[key]);
        }
        if (obj[key] === undefined) {
            obj[key] = null;
        }
    }
    return obj;
}