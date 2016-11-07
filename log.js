function log(templateStrings, ...substitutions) {
    let result = templateStrings[0];
    for (let [i, obj] of substitutions.entries()) {
        result += JSON.stringify(obj, null, 2)
        result += templateStrings[i + 1];
    }
    return result;
}

module.exports = log
