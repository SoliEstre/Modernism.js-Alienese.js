/*

MIT License

Copyright (c) 2025 Estre Soliette (SoliEstre)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

     

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// Modernism.js - Estre Modernism javscript patch //
// 
// Collections of bypass for process codes takes be inline,
// and monkey patching like as modern languages.
// 
// v0.4.3    / release 2025.11.24
// 
// Author: Estre Soliette
// Established: 2025.01.05


let _global = (typeof globalThis !== 'undefined') ? globalThis : (typeof window !== 'undefined' ? window : global);
let defineGlobal = (name, value) => {
    Object.defineProperty(_global, name, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: false
    });
};

// primitive types alias constant
defineGlobal("UNDEFINED", "undefined");
defineGlobal("NULL", "null");
defineGlobal("TRUE", "true");
defineGlobal("FALSE", "false");

// prototype of primitive types alias constant
defineGlobal("FUNCTION", "function");
defineGlobal("BOOLEAN", "boolean");
defineGlobal("STRING", "string");
defineGlobal("SYMBOL", "symbol");
defineGlobal("NUMBER", "number");
defineGlobal("BIGINT", "bigint");
defineGlobal("OBJECT", "object");

// class names of primitive types constant
defineGlobal("_FUNCTION", "Function");
defineGlobal("_BOOLEAN", "Boolean");
defineGlobal("_STRING", "String");
defineGlobal("_SYMBOL", "Symbol");
defineGlobal("_NUMBER", "Number");
defineGlobal("_BIG_INT", "BigInt");
defineGlobal("_OBJECT", "Object");

// frequent object types alias constant
defineGlobal("_DATE", "Date");

defineGlobal("_ARRAY", "Array");
defineGlobal("_SET", "Set");
defineGlobal("_MAP", "Map");


// frequent assign types alias constant
defineGlobal("DEFAULT", "default");
defineGlobal("FINALLY", "finally");


// bypass constant
defineGlobal("executeIf", (bool, work = () => { }, args = [], ornot = () => { }) => {
    if (bool) return work(...args);
    else return ornot(...args);
});
defineGlobal("executeWhen", (args = [], isTrue = args => 1 == "0", work = args => { }, ornot = () => { }) => {
    if (isTrue(...args)) return work(...args);
    else return ornot(...args);
});

defineGlobal("ifReturn", (bool, returns, orNot) => bool ? returns : orNot);

defineGlobal("ifReturnOrEmptyNumber", (bool, returns) => ifReturn(bool, returns, 0));
defineGlobal("ifReturnOrEmptyString", (bool, returns) => ifReturn(bool, returns, ""));
defineGlobal("ifReturnOrEmptyArray", (bool, returns) => ifReturn(bool, returns, []));
defineGlobal("ifReturnOrEmptyObject", (bool, returns) => ifReturn(bool, returns, {}));

defineGlobal("valet", (value, process = it => it) => process(value));


// common process shortcut constant
defineGlobal("forZeroToBefore", (toward, work = i => { return false; }) => {
    for (let i = 0; i < toward; i++) if (work(i)) break;
});
defineGlobal("forZeroToReach", (toward, work = i => { return false; }) => {
    for (let i = 0; i <= toward; i++) if (work(i)) break;
});

defineGlobal("forToZeroFrom", (begins, work = i => { return false; }) => {
    for (let i = begins; i >= 0; i--) if (work(i)) break;
});
defineGlobal("forToPrimeFrom", (begins, work = i => { return false; }) => {
    for (let i = begins; i > 0; i--) if (work(i)) break;
});

defineGlobal("forForward", (from, work = i => { return false; }) => {
    for (let i = 0; i < from.length; i++) if (work(i, from[i])) break;
});
defineGlobal("forBackward", (from, work = i => { return false; }) => {
    for (let i = from.length - 1; i >= 0; i--) if (work(i, from[i])) break;
});

defineGlobal("forin", (from, work = (k, v) => { return false; }) => {
    for (const k in from) if (work(k, from[k])) break;
});
defineGlobal("forinner", (from, work = v => { return false; }) => {
    for (const k in from) if (work(from[k])) break;
});

defineGlobal("forof", (from, work = v => { return false; }) => {
    for (const v of from) if (work(v)) break;
});
defineGlobal("forkv", (from, work = (k, v) => { return false; }) => {
    for (const [k, v] of Object.entries(from)) if (work(k, v)) break;
});

defineGlobal("whileIn", function (cond = function (self) { return true; }, work = function (self, count) { return false; }, self = {}) {
    forinner(self, (i, v) => this[i] = v);
    this.origin = self;
    this.cond = cond;
    this.work = work;
    let count = 0;
    while (this.cond(this)) if (this.work(this, count++)) break;
    return this;
});
defineGlobal("doWhileIn", function (cond = function (self) { return true; }, work = function (self, count) { return false; }, self = {}) {
    forinner(self, (i, v) => this[i] = v);
    this.origin = self;
    this.cond = cond;
    this.work = work;
    let count = 0;
    do if (this.work(this, count++)) break;
    while (this.cond(this));
    return this;
});


// meaning comparator constant
defineGlobal("typeOf", it => {
    if (it === null) return "null";
    return typeof it;
});

defineGlobal("typeMatch", (it, type) => typeOf(it) == type);

defineGlobal("typeUndefined", it => typeOf(it) == "undefined");
defineGlobal("typeFunction", it => typeOf(it) == "function");
defineGlobal("typeBoolean", it => typeOf(it) == "boolean");
defineGlobal("typeString", it => typeOf(it) == "string");
defineGlobal("typeSymbol", it => typeOf(it) == "symbol");
defineGlobal("typeNumber", it => typeOf(it) == "number");
defineGlobal("typeBigint", it => typeOf(it) == "bigint");
defineGlobal("typeObject", it => typeOf(it) == "object");

defineGlobal("instanceMatch", (it, cls) => it instanceof cls);
defineGlobal("isObject", it => typeObject(it) && it !== null);
defineGlobal("isArray", Array.isArray);
defineGlobal("isString", it => typeString(it));
defineGlobal("isNumber", it => typeNumber(it));
defineGlobal("isSet", it => instanceMatch(it, Set));
defineGlobal("isMap", it => instanceMatch(it, Map));

defineGlobal("exact", (a, b) => a === b);
defineGlobal("notExact", (a, b) => a !== b);
defineGlobal("exactMatches", (a, ...b) => b.includes(a));
defineGlobal("notExactMatches", (a, ...b) => !b.includes(a));

defineGlobal("equals", (a, b) => a == b);
defineGlobal("notEquals", (a, b) => a != b);
defineGlobal("same", (a, b) => JSON.stringify(a) === JSON.stringify(b));
defineGlobal("diffrent", (a, b) => !same(a, b));

defineGlobal("getherThan", (a, b) => a > b);
defineGlobal("lessThan", (a, b) => a < b);
defineGlobal("notGetherThan", (a, b) => !(a > b));
defineGlobal("notLessThan", (a, b) => !(a < b));
defineGlobal("getherOrEquals", (a, b) => a >= b);
defineGlobal("lessOrEquels", (a, b) => a <= b);

defineGlobal("notGetherAndEquals", (a, b) => !(a >= b));
defineGlobal("notLessAndEquals", (a, b) => !(a <= b));
defineGlobal("isFalseCase", it => !it);
defineGlobal("isTrueCase", it => !!it);

defineGlobal("isUndefined", it => it === undefined);
defineGlobal("isNull", it => it === null);
defineGlobal("isExactTrue", it => it === true);
defineGlobal("isExactFalse", it => it === false);
defineGlobal("isNotUndefined", it => it !== undefined);

defineGlobal("isNotNull", it => it !== null);
defineGlobal("isNotTrue", it => it !== true);
defineGlobal("isNotFalse", it => it !== false);

defineGlobal("isNully", it => it === undefined || it === null);
defineGlobal("isTruely", it => !!it);
defineGlobal("isFalsely", it => !it);
defineGlobal("isEmpty", (it, numberEmptyMatch = 0) => {
    if (isNully(it)) return true;
    if (typeString(it) || isArray(it)) return it.length === 0;
    if (isObject(it)) return Object.keys(it).length === 0;
    if (typeNumber(it)) return it === numberEmptyMatch;
    return false;
});

defineGlobal("isNotNully", it => !isNully(it));
defineGlobal("isNotTruely", it => !isTruely(it));
defineGlobal("isNotFalsely", it => !isFalsely(it));
defineGlobal("isNotEmpty", (it, numberEmptyMatch = 0) => !isEmpty(it, numberEmptyMatch));

defineGlobal("isNullOrEmpty", (it, numberEmptyMatch = 0) => isNully(it) || isEmpty(it, numberEmptyMatch));
defineGlobal("isNotNullAndEmpty", (it, numberEmptyMatch = 0) => isNotNully(it) && isNotEmpty(it, numberEmptyMatch));


// quick execute by conditions constant
defineGlobal("ifNullOrEmpty", (val, work = () => { }, ornot = () => { }) => executeIf(isNullOrEmpty(val), work, [], ornot));
defineGlobal("ifNotNullAndEmpty", (val, work = () => { }, ornot = () => { }) => executeIf(isNotNullAndEmpty(val), work, [], ornot));


// do and return inline double takes
defineGlobal("doAndReturn", (does = (it) => { }, returns, args = []) => { does(...args); return returns; });
defineGlobal("doAndReturnByExecute", (does = (it) => { }, forReturns = () => { }, args = []) => { does(...args); return forReturns(); });


// object method shortcut constant
defineGlobal("keysOf", (object) => Object.keys(object));
defineGlobal("waysOf", keysOf);
defineGlobal("valuesOf", (object) => Object.values(object));
defineGlobal("looksOf", valuesOf);
defineGlobal("entriesOf", (object) => Object.entries(object));
defineGlobal("entireOf", entriesOf);
defineGlobal("countOf", (object) => keysOf(object).length);
defineGlobal("casesOf", countOf);

defineGlobal("checkCount", (object, checker = (k, v) => true) => {
    let count = 0;
    forin(entriesOf(object), ([k, v]) => executeIf(checker(k, v), _ => count++));
    return count;
});


// match case constant
defineGlobal("matchCase", (val, cases = { [DEFAULT]: val => { }, [FINALLY]: (val, returns) => { } }, ignoreCase = false) => {
    let match;
    forin(cases, (k, v) => executeIf(k != DEFAULT && rx(k, ignoreCase ? "i" : "").test(val), () => doAndReturn(() => match = v, true)));
    const defaultCase = cases[DEFAULT];
    const finallyCase = cases[FINALLY];
    const returns = isNotNully(match) ? (typeFunction(match) ? match(val) : match) : (typeFunction(defaultCase) ? defaultCase(val) : defaultCase);
    const returnFinal = typeFunction(finallyCase) ? finallyCase(val, returns) : finallyCase;
    return isUndefined(returnFinal) ? returns : returns ?? returnFinal;
});
defineGlobal("equalCase", (val, cases = { [DEFAULT]: val => { }, [FINALLY]: (val, returns) => { } }, ignoreCase = false) => {
    let match;
    const vlc = to(val) == STRING ? val.toLowerCase() : val;
    forin(cases, (k, v) => executeIf(k != DEFAULT && (ignoreCase ? (to(k) == STRING ? k.toLowerCase() : k) == vlc : k == val), () => doAndReturn(() => match = v, true)));
    const defaultCase = cases[DEFAULT];
    const finallyCase = cases[FINALLY];
    const returns = isNotNully(match) ? (typeFunction(match) ? match(val) : match) : (typeFunction(defaultCase) ? defaultCase(val) : defaultCase);
    const returnFinal = typeFunction(finallyCase) ? finallyCase(val, returns) : finallyCase;
    return isUndefined(returnFinal) ? returns : returns ?? returnFinal;
});
defineGlobal("exactCase", (val, cases = { [DEFAULT]: val => { }, [FINALLY]: (val, returns) => { } }) => {
    const match = cases[val];
    const defaultCase = cases[DEFAULT];
    const finallyCase = cases[FINALLY];
    const returns = isNotNully(match) ? (typeFunction(match) ? match(val) : match) : (typeFunction(defaultCase) ? defaultCase(val) : defaultCase);
    const returnFinal = typeFunction(finallyCase) ? finallyCase(val, returns) : finallyCase;
    return isUndefined(returnFinal) ? returns : returns ?? returnFinal;
});
defineGlobal("typeCase", (variable, cases = { [DEFAULT]: variable => { }, [FINALLY]: (variable, returns) => { } }) => {
    const type = to(variable);
    const match = cases[type];
    const defaultCase = cases[DEFAULT];
    const finallyCase = cases[FINALLY];
    const returns = isNotNully(match) ? (typeFunction(match) ? match(variable) : match) : (typeFunction(defaultCase) ? defaultCase(variable) : defaultCase);
    const returnFinal = typeFunction(finallyCase) ? finallyCase(variable, returns) : finallyCase;
    return isUndefined(returnFinal) ? returns : returns ?? returnFinal;
});
defineGlobal("classCase", (object, cases = { [DEFAULT]: object => { }, [FINALLY]: (object, returns) => { } }) => {
    const className = object.constructor.name;
    const match = cases[className];
    const defaultCase = cases[DEFAULT];
    const finallyCase = cases[FINALLY];
    const returns = isNotNully(match) ? (typeFunction(match) ? match(object) : match) : (typeFunction(defaultCase) ? defaultCase(object) : defaultCase);
    const returnFinal = typeFunction(finallyCase) ? finallyCase(object, returns) : finallyCase;
    return isUndefined(returnFinal) ? returns : returns ?? returnFinal;
});
defineGlobal("kindCase", (kindFrom, cases = { [DEFAULT]: val => { }, [FINALLY]: val => { val, returns } }) => typeCase(kindFrom, { ...cases, [OBJECT]: () => classCase(kindFrom, { ...cases, [FINALLY]: undefined }) }));


/** variable data copy */
defineGlobal("copy", (from, dataOnly = true, primitiveOnly = false, recusive = true) => isNully(from) ? from : typeCase(from, {
    [OBJECT]: val => {
        const object = new val.constructor();
        if (dataOnly || primitiveOnly) {
            for (const key in val) if (isNully(val) || typeCase(val[key], {
                [FUNCTION]: _ => !dataOnly,
                [OBJECT]: _ => !primitiveOnly,
                [DEFAULT]: _ => true
            })) object[key] = recusive ? copy(val[key], dataOnly, primitiveOnly, recusive) : val[key];
        } else for (const key in val) object[key] = copy(val[key], dataOnly, primitiveOnly);
        return object;
    },
    [DEFAULT]: val => val
}));
/** Object data only shallow copy */
defineGlobal("mock", from => copy(from, true, false, true));
/** Object data only deep copy */
defineGlobal("mimic", from => copy(from, true, false, true));
/** Object functional shallow copy */
defineGlobal("twin", from => copy(from, false, false, false));
/** Object functional deep copy */
defineGlobal("clone", from => copy(from, false, false, true));

/** object data patch */
defineGlobal("patch", (to, from, dataOnly = true, primitiveOnly = false, recusive = true, append = false) => {
    if (!append) for (const key in to) if (typeUndefined(from[key]) && typeCase(to[key], {
        [FUNCTION]: _ => !dataOnly,
        [OBJECT]: _ => !primitiveOnly,
        [DEFAULT]: _ => true
    })) delete to[key];
    for (const key in from) if (isNully(from[key])) to[key] = from[key];
    else typeCase(from[key], {
        [FUNCTION]: val => {
            if (!dataOnly) to[key] = val;
        },
        [OBJECT]: val => {
            if (!primitiveOnly) {
                if (recusive) {
                    if (isNully(to[key])) to[key] = from[key].constructor();
                    patch(to[key], val, dataOnly, primitiveOnly, recusive, append);
                } else to[key] = val;
            }
        },
        [DEFAULT]: val => to[key] = val
    });
    return to;
});
/** object data overwrite */
defineGlobal("overwrite", (to, from) => patch(to, from, false, false, true, false));
/** object data takeover */
defineGlobal("takeover", (to, from) => patch(to, from, false, false, true, true));
/** object data acquire */
defineGlobal("acquire", (to, from) => patch(to, from, true, false, true, false));
/** object data inherit */
defineGlobal("inherit", (to, from) => patch(to, from, true, false, true, true));

defineGlobal("revert", (to, from, dataOnly = true, primitiveOnly = false, recusive = true, exceptNew = false) => {
    fromKeys = keysOf(from);
    toKeys = keysOf(to);
    scanKeys = exceptNew ? fromKeys : [...new Set([...fromKeys, ...toKeys])];
    for (const key of scanKeys) if (exceptNew || fromKeys.includes(key)) {
        if (isNully(from[key])) to[key] = from[key];
        else typeCase(from[key], {
            [FUNCTION]: val => {
                if (!dataOnly) to[key] = val;
            },
            [OBJECT]: val => {
                if (!primitiveOnly) {
                    if (recusive) revert(to[key], val, dataOnly, primitiveOnly, recusive, exceptNew);
                    else to[key] = val;
                }
            },
            [DEFAULT]: val => to[key] = val,
        });
    } else if (isNully(to[key]) || typeCase(to[key], {
        [FUNCTION]: _ => !dataOnly,
        [OBJECT]: _ => !primitiveOnly,
        [DEFAULT]: _ => true
    })) delete to[key];
});


/** run handle */
defineGlobal("postQueue", (process = (...args) => args[0], ...args) => setTimeout(process, 0, ...args));
defineGlobal("postDelayed", (process = (...args) => args[0], delay = 100, ...args) => setTimeout(process, delay, ...args));
defineGlobal("postPromise", (process = (rs, rj, ...args) => rs(args[0]), ...args) => new Promise((rs, rj) => process(rs, rj, ...args)));
defineGlobal("postBonded", (process = (rs, rj, ...args) => rs(args[0]), delay = 100, ...args) => new Promise((rs, rj) => setTimeout(process, delay, rs, rj, ...args)));
defineGlobal("postPromiseQueue", (process = (rs, rj, ...args) => rs(args[0]), ...args) => new Promise((rs, rj) => setTimeout(process, 0, rs, rj, ...args)));
defineGlobal("postAsyncQueue", (process = async (...args) => args[0], ...args) => process(...args));
defineGlobal("postAwaitQueue", async (process = async (...args) => args[0], ...args) => await process(...args));
defineGlobal("postFrameQueue", (process = (...args) => args[0], ...args) => requestAnimationFrame(() => process(...args)));
defineGlobal("postFramePromise", (process = (rs, rj, ...args) => rs(args[0]), ...args) => new Promise((rs, rj) => requestAnimationFrame(() => process(rs, rj, ...args))));


// Object function shortcut constants
defineGlobal("defineStaticProperty", (cls, name, value, wa = true, ca = true, ea = false, extras = {}) => Object.defineProperty(cls, name, {
    value,
    writable: wa,
    configurable: ca,
    enumerable: ea,
    ...extras,
}));
defineGlobal("defineProperty", (cls, name, value, wa = true, ca = true, ea = false, extras = {}) => defineStaticProperty(cls.prototype, name, value, wa, ca, ea, extras));
// obj.defineProperty(cls.prototype, name, {
//     // get value() { return tc(value, {
//     //     // [FUNCTION]: it => it,//function (...args) { return (value.bind(this))(...args); },
//     //     // [DEFAULT]: it => cls(it),
//     //     [BOOLEAN]: it => Boolean(it),
//     //     [NUMBER]: it => Number(it),
//     //     [STRING]: it => String(it),
//     //     [BIGINT]: it => BigInt(it),
//     //     [DEFAULT]: it => it,
//     // }); },
//     value,
//     writable: wa,
//     configurable: ca,
//     enumerable: ea,
//     ...extras,
// });
defineGlobal("definePropertyPlex", (name, value, wa = true, ca = true, ea = false, classes = [Object, Function, String, Number, Boolean, BigInt], extras = {}) => forof(classes, cls => defineProperty(cls, name, value, wa, ca, ea, extras)));
defineGlobal("ESTRE_MODERNISM_COMPATIBILITY_PREFIX", "__emcp_");
defineGlobal("defineStaticGetterAndSetter", (cls, name, gets, sets, ca = true, ea = false, extras = {}) => Object.defineProperty(cls, name, {
    "get": function () { return isNotUndefined(this[ESTRE_MODERNISM_COMPATIBILITY_PREFIX + name]) ? this[ESTRE_MODERNISM_COMPATIBILITY_PREFIX + name] : gets.bind(this)() },
    "set": function (val) { if (isUndefined(sets)) this[ESTRE_MODERNISM_COMPATIBILITY_PREFIX + name] = val; else sets.bind(this)(val); },
    configurable: ca,
    enumerable: ea,
    ...extras,
}));
defineGlobal("defineGetterAndSetter", (cls, name, gets, sets, ca = true, ea = false, extras = {}) => defineStaticGetterAndSetter(cls.prototype, name, gets, sets, ca, ea, extras));
defineGlobal("defineGetterAndSetterPlex", (name, gets, sets, ca = true, ea = false, classes = [Object, Function, String, Number, Boolean, BigInt], extras = {}) => forof(classes, cls => defineGetterAndSetter(cls, name, gets, sets, ca, ea, extras)));


// additional static function for classes
defineStaticGetterAndSetter(Object, "new", function () { return new this.constructor(...arguments); });


// additional global prototype functions
defineGetterAndSetterPlex("it", function () { return classCase(this, { [_BOOLEAN]: it => Boolean(it), [_NUMBER]: it => Number(it), [_STRING]: it => String(it), [_BIG_INT]: it => BigInt(it), [DEFAULT]: it => it }); });

definePropertyPlex("matchCase", function () { return matchCase(this.it, ...arguments); });
definePropertyPlex("equalCase", function () { return equalCase(this.it, ...arguments); });
definePropertyPlex("exactCase", function () { return exactCase(this.it, ...arguments); });
definePropertyPlex("typeCase", function () { return typeCase(this.it, ...arguments); });
definePropertyPlex("classCase", function () { return classCase(this.it, ...arguments); });
definePropertyPlex("kindCase", function () { return kindCase(this.it, ...arguments); });

definePropertyPlex("ifEmpty", function (process = it => it, ornot = it => it, numberEmptyMatch = 0) { return isEmpty(this.it, numberEmptyMatch) ? process(this.it) : ornot(this.it); });
definePropertyPlex("ifNotEmpty", function (process = it => it, ornot = it => it, numberEmptyMatch = 0) { return isNotEmpty(this.it, numberEmptyMatch) ? process(this.it) : ornot(this.it); });

definePropertyPlex("doAndReturn", function (does = (it, args) => { }, returns, args = []) { return doAndReturn(does, returns, [this.it, ...args]); });
definePropertyPlex("doAndReturnByExecute", function (does = (it, args) => { }, forReturns, args = []) { return doAndReturnByExecute(does, forReturns, [this.it, ...args]); });

defineGetterAndSetter(Object, "ways", function () { return keysOf(this.it); });
defineGetterAndSetter(Object, "looks", function () { return valuesOf(this.it); });
defineGetterAndSetter(Object, "entire", function () { return entriesOf(this.it); });
defineGetterAndSetter(Object, "count", function () { return countOf(this.it); });
defineGetterAndSetter(Object, "checkCount", function () { return checkCount(this.it, (k, v) => true); });

defineProperty(Object, "forKeys", function (work = key => { return false; }) { return forof(this.it.ways, work); });
defineProperty(Object, "forWays", function (work = key => { return false; }) { return forof(this.it.ways, work); });
defineProperty(Object, "forValues", function (work = value => { return false; }) { return forof(this.it.looks, work); });
defineProperty(Object, "forLooks", function (work = value => { return false; }) { return forof(this.it.looks, work); });
defineProperty(Object, "forEntries", function (work = (key, value) => { return false; }) { return forkv(this.it.entire, work); });
defineProperty(Object, "forEntire", function (work = (key, value) => { return false; }) { return forkv(this.it.entire, work); });

defineProperty(Object, "keyOf", function (value) { for (const [key, val] of this.it.entire) if (val === value) return key; return undefined; });

defineProperty(Object, "copy", function (dataOnly = true, primitiveOnly = false, recusive = true) { return copy(this, dataOnly, primitiveOnly, recusive); });
defineGetterAndSetter(Object, "mock", function () { return mock(this); });
defineGetterAndSetter(Object, "mimic", function () { return mimic(this); });
defineGetterAndSetter(Object, "twin", function () { return twin(this); });
defineGetterAndSetter(Object, "clone", function () { return clone(this); });
defineProperty(Object, "patch", function (from, dataOnly = true, primitiveOnly = false, recusive = true, append = false) { return patch(this.it, from, dataOnly, primitiveOnly, recusive, append); });
defineProperty(Object, "overwrite", function (from) { return overwrite(this.it, from); });
defineProperty(Object, "takeover", function (from) { return takeover(this.it, from); });
defineProperty(Object, "acquire", function (from) { return acquire(this.it, from); });
defineProperty(Object, "inherit", function (from) { return inherit(this.it, from); });
defineProperty(Object, "revert", function (from, dataOnly = true, primitiveOnly = false, recusive = true, exceptNew = false) { return revert(this.it, from, dataOnly, primitiveOnly, recusive, exceptNew); });

// dpx("apply", function (process = it => it) { process.bind(this)(); return this.it; });
definePropertyPlex("also", function (process = it => it) { process(this.it); return this.it; });
// dpx("run", function (process = it => it) { return process.bind(this)(); });
definePropertyPlex("let", function (process = it => it) { return process(this.it); });
definePropertyPlex("wait", async function (process = async it => it) { return await process(this.it); });
definePropertyPlex("go", function (asyncProcess = (resolve, reject) => resolve(this.it)) { return new Promise(asyncProcess); });

definePropertyPlex("if", function (bool, process = it => it, ornot = it => { }) { return executeIf(bool, process, [this.it], ornot); });

definePropertyPlex("ifis", function (that, process = it => it, ornot = it => { }) { return this.let(it => executeIf(it === that, process, [it], ornot)); });
definePropertyPlex("ifisnt", function (that, process = it => it, ornot = it => { }) { return this.let(it => executeIf(it !== that, process, [it], ornot)); });

definePropertyPlex("ifEquals", function (that, process = it => it, ornot = it => { }) { return this.let(it => executeIf(it == that, process, [it], ornot)); });
definePropertyPlex("ifNotEquals", function (that, process = it => it, ornot = it => { }) { return this.let(it => executeIf(it != that, process, [it], ornot)); });
