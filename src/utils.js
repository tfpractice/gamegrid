
export const isFunc = fn => fn instanceof Function;
export const callOn = x => fn => isFunc(fn) ? fn(x) : x;
export const callBin = (x, fn) => callOn(x)(fn);
export const pipeline = (...funcs) => x => funcs.reduce(callBin, x);
