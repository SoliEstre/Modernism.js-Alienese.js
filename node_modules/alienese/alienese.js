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

// Alienise.js - Estre javscript Alienese patch //
//
// A collection of aliases for shortening and simplifying JavaScript code.
// This patch aims to create smaller (quicker) and more concise (lighter) JavaScript code.
// It makes the code more implicit and serves as an alternative to obfuscation.
// 
// v0.4.1 / release 2025.11.24
// 
// * Must be loaded modernism.js before this script.
// 
// Author: Estre Soliette
// Established: 2025.01.05 / Extracted: 2025.03.15



// primitive types alias constant
const _global = (typeof globalThis !== 'undefined') ? globalThis : (typeof window !== 'undefined' ? window : global);
const defineGlobal = (name, value) => {
    Object.defineProperty(_global, name, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: false
    });
};

// Auto-load modernism in Node.js environment
if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    try { require("modernism"); } catch (e) { }
}

defineGlobal("U", UNDEFINED);
defineGlobal("N", NULL);
defineGlobal("T", TRUE);
defineGlobal("F", FALSE);

defineGlobal("u", _global.undefined);
defineGlobal("n", _global.null);
defineGlobal("t", _global.true);
defineGlobal("f", _global.false);

// end point assigner constant
defineGlobal("eoo", _global.u);
defineGlobal("eoa", _global.u);

// prototype of primitive types alias constant
defineGlobal("FNC", _global.FUNCTION);
defineGlobal("BLE", _global.BOOLEAN);
defineGlobal("STR", _global.STRING);
defineGlobal("SYM", _global.SYMBOL);
defineGlobal("NUM", _global.NUMBER);
defineGlobal("BIG", _global.BIGINT);
defineGlobal("OBJ", _global.OBJECT);

defineGlobal("fun", Function);
defineGlobal("ble", Boolean);
defineGlobal("str", String);
defineGlobal("sym", Symbol);
defineGlobal("num", Number);
defineGlobal("big", BigInt);
defineGlobal("obj", Object);

// class names of primitive types constant
defineGlobal("FN", _global._FUNCTION);
defineGlobal("BL", _global._BOOLEAN);
defineGlobal("ST", _global._STRING);
defineGlobal("SY", _global._SYMBOL);
defineGlobal("NO", _global._NUMBER);
defineGlobal("BI", _global._BIG_INT);
defineGlobal("OJ", _global._OBJECT);

defineGlobal("fn", Function);
defineGlobal("bl", Boolean);
defineGlobal("sg", String);
defineGlobal("sl", Symbol);
defineGlobal("no", Number);
defineGlobal("bi", BigInt);
defineGlobal("oj", Object);


// frequent object types alias constant
defineGlobal("DT", _global._DATE);

defineGlobal("RA", _global._ARRAY);
defineGlobal("SA", _global._SET);
defineGlobal("MA", _global._MAP);

defineGlobal("dt", Date);

defineGlobal("ra", Array);
defineGlobal("sa", Set);
defineGlobal("ma", Map);


// frequent assign types alias constant
defineGlobal("def", _global.DEFAULT);
defineGlobal("fin", _global.FINALLY);


// frequent object types empty object issuer alias constant
defineGlobal("x", {
    get a() { return new Array(); },
    get d() { return new Date(); },
    get t() { return new Set(); },
    get p() { return new Map(); },
});


// bypass constant
defineGlobal("ifx", _global.executeIf);
defineGlobal("itx", _global.executeWhen);

defineGlobal("ifr", _global.ifReturn);

defineGlobal("roen", _global.ifReturnOrEmptyNumber);
defineGlobal("roes", _global.ifReturnOrEmptyString);
defineGlobal("roea", _global.ifReturnOrEmptyArray);
defineGlobal("roeo", _global.ifReturnOrEmptyObject);

defineGlobal("val", _global.valet);


// common process shortcut constant
defineGlobal("f02b", _global.forZeroToBefore);
defineGlobal("f02r", _global.forZeroToReach);

defineGlobal("f20", _global.forToZeroFrom);
defineGlobal("f21", _global.forToPrimeFrom);

defineGlobal("ff", _global.forForward);
defineGlobal("fb", _global.forBackward);

defineGlobal("fi", _global.forin);
defineGlobal("fiv", _global.forinner);

defineGlobal("fo", _global.forof);
defineGlobal("fkv", _global.forkv);

defineGlobal("w", _global.whileIn);
defineGlobal("dw", _global.doWhileIn);


// meaning comparator constant
defineGlobal("to", _global.typeOf);

defineGlobal("tm", _global.typeMatch);

defineGlobal("tu", _global.typeUndefined);
defineGlobal("tf", _global.typeFunction);
defineGlobal("tb", _global.typeBoolean);
defineGlobal("ts", _global.typeString);
defineGlobal("ty", _global.typeSymbol);
defineGlobal("tn", _global.typeNumber);
defineGlobal("tg", _global.typeBigint);
defineGlobal("tj", _global.typeObject);

defineGlobal("im", _global.instanceMatch);
defineGlobal("io", _global.isObject);
defineGlobal("ia", _global.isArray);
defineGlobal("ioa", _global.isArray);
defineGlobal("ios", _global.isString);
defineGlobal("ion", _global.isNumber);
defineGlobal("iot", _global.isSet);
defineGlobal("iop", _global.isMap);

defineGlobal("xv", _global.exact);
defineGlobal("nxv", _global.notExact);
defineGlobal("xm", _global.exactMatches);
defineGlobal("nx", _global.notExactMatches);

defineGlobal("ev", _global.equals);
defineGlobal("nev", _global.notEquals);
defineGlobal("sm", _global.same);
defineGlobal("df", _global.diffrent);

defineGlobal("gtv", _global.getherThan);
defineGlobal("ltv", _global.lessThan);
defineGlobal("ngt", _global.notGetherThan);
defineGlobal("nlt", _global.notLessThan);

defineGlobal("gev", _global.getherOrEquals);
defineGlobal("lev", _global.lessOrEquels);
defineGlobal("nge", _global.notGetherAndEquals);
defineGlobal("nle", _global.notLessAndEquals);

defineGlobal("fc", _global.isFalseCase);
defineGlobal("nfc", _global.isTrueCase);

defineGlobal("xu", _global.isUndefined);
defineGlobal("xn", _global.isNull);
defineGlobal("xt", _global.isExactTrue);
defineGlobal("xf", _global.isExactFalse);

defineGlobal("nxu", _global.isNotUndefined);
defineGlobal("nxn", _global.isNotNull);
defineGlobal("nxt", _global.isNotTrue);
defineGlobal("nxf", _global.isNotFalse);

defineGlobal("en", _global.isNully);
defineGlobal("et", _global.isTruely);
defineGlobal("ef", _global.isFalsely);
defineGlobal("ee", _global.isEmpty);

defineGlobal("nn", _global.isNotNully);
defineGlobal("nt", _global.isNotTruely);
defineGlobal("nf", _global.isNotFalsely);
defineGlobal("ne", _global.isNotEmpty);

defineGlobal("noe", _global.isNullOrEmpty);
defineGlobal("nne", _global.isNotNullAndEmpty);


// quick execute by conditions constant
defineGlobal("inoe", _global.ifNullOrEmpty);
defineGlobal("inne", _global.ifNotNullAndEmpty);


// do and return inline double takes
defineGlobal("dr", _global.doAndReturn);
defineGlobal("drx", _global.doAndReturnByExecute);


// object method shortcut constant
defineGlobal("ok", _global.keysOf);
defineGlobal("ov", _global.valuesOf);
defineGlobal("oe", _global.entriesOf);
defineGlobal("oc", _global.countOf);

defineGlobal("occ", _global.checkCount);


// match case constant
defineGlobal("mc", _global.matchCase);
defineGlobal("ec", _global.equalCase);
defineGlobal("xc", _global.exactCase);
defineGlobal("tc", _global.typeCase);
defineGlobal("cc", _global.classCase);
defineGlobal("kc", _global.kindCase);


/** variable data copy */
defineGlobal("cp", _global.copy);
defineGlobal("mk", _global.mock);
defineGlobal("mm", _global.mimic);
defineGlobal("tw", _global.twin);
defineGlobal("cn", _global.clone);

defineGlobal("pc", _global.patch);
defineGlobal("ow", _global.overwrite);
defineGlobal("tk", _global.takeover);
defineGlobal("aq", _global.acquire);
defineGlobal("ih", _global.inherit);

defineGlobal("rv", _global.revert);


/** run handle */
defineGlobal("pq", _global.postQueue);
defineGlobal("pd", _global.postDelayed);
defineGlobal("pp", _global.postPromise);
defineGlobal("pb", _global.postBonded);
defineGlobal("ppq", _global.postPromiseQueue);
defineGlobal("paq", _global.postAsyncQueue);
defineGlobal("pwq", _global.postAwaitQueue);
defineGlobal("pfq", _global.postFrameQueue);
defineGlobal("pfp", _global.postFramePromise);


// Object function shortcut constants
defineGlobal("dsp", _global.defineStaticProperty);
defineGlobal("dp", _global.defineProperty);
defineGlobal("dpx", _global.definePropertyPlex);
defineGlobal("dspgs", _global.defineStaticGetterAndSetter);
defineGlobal("dpgs", _global.defineGetterAndSetter);
defineGlobal("dpgsx", _global.defineGetterAndSetterPlex);


// additional static function for classes
defineStaticGetterAndSetter(dt, "n", function () { return new Date(...arguments); });
defineStaticGetterAndSetter(dt, "t", function () { return this.now(); });


// additional global prototype functions
definePropertyPlex("mc", function () { return matchCase(this.it, ...arguments); });
definePropertyPlex("ec", function () { return equalCase(this.it, ...arguments); });
definePropertyPlex("xc", function () { return exactCase(this.it, ...arguments); });
definePropertyPlex("tc", function () { return typeCase(this.it, ...arguments); });
definePropertyPlex("cc", function () { return classCase(this.it, ...arguments); });
definePropertyPlex("kc", function () { return kindCase(this.it, ...arguments); });

definePropertyPlex("ee", function (process = it => it, ornot = it => it, numberEmptyMatch = 0) { return _global.isEmpty(this.it, numberEmptyMatch) ? process(this.it) : ornot(this.it); });
definePropertyPlex("ne", function (process = it => it, ornot = it => it, numberEmptyMatch = 0) { return _global.isNotEmpty(this.it, numberEmptyMatch) ? process(this.it) : ornot(this.it); });

definePropertyPlex("dr", function (does = (it, args) => { }, returns, args = []) { return _global.doAndReturn(does, returns, [this.it, ...args]); });
definePropertyPlex("drx", function (does = (it, args) => { }, forReturns, args = []) { return _global.doAndReturnByExecute(does, forReturns, [this.it, ...args]); });

defineGetterAndSetter(Object, "ok", function () { return _global.keysOf(this.it); });
defineGetterAndSetter(Object, "ov", function () { return _global.valuesOf(this.it); });
defineGetterAndSetter(Object, "oe", function () { return _global.entriesOf(this.it); });
defineGetterAndSetter(Object, "oc", function () { return _global.countOf(this.it); });
defineGetterAndSetter(Object, "occ", function () { return _global.checkCount(this.it, (k, v) => true); });

defineProperty(Object, "fk", function (work = key => { return false; }) { return _global.forof(this.it.ways, work); });
defineProperty(Object, "fv", function (work = value => { return false; }) { return _global.forof(this.it.looks, work); });
defineProperty(Object, "fe", function (work = (key, value) => { return false; }) { return _global.forkv(this.it.entire, work); });
defineProperty(Object, "fkv", function (work = (key, value) => { return false; }) { return _global.forkv(this.it.entire, work); });

defineProperty(Object, "cp", function (dataOnly = true, primitiveOnly = false, recusive = true) { return _global.copy(this, dataOnly, primitiveOnly, recusive); });
defineProperty(Object, "pc", function (from, dataOnly = true, primitiveOnly = false, recusive = true, append = false) { return _global.patch(this.it, from, dataOnly, primitiveOnly, recusive, append); });
defineProperty(Object, "rv", function (from, dataOnly = true, primitiveOnly = false, recusive = true, exceptNew = false) { return _global.revert(this.it, from, dataOnly, primitiveOnly, recusive, exceptNew); });

definePropertyPlex("ifeq", function (that, process = it => it, ornot = it => { }) { return this.let(it => _global.executeIf(it == that, process, [it], ornot)); });
definePropertyPlex("ifneq", function (that, process = it => it, ornot = it => { }) { return this.let(it => _global.executeIf(it != that, process, [it], ornot)); });



// Regex builder alias
defineGlobal("rx", (regex, flags) => new RegExp(regex, flags));
defineGlobal("reg", _global.rx);
defineGlobal("ri", regex => new RegExp(regex, "i"));
defineGlobal("rg", regex => new RegExp(regex, "g"));
defineGlobal("rm", regex => new RegExp(regex, "m"));
defineGlobal("rig", regex => new RegExp(regex, "ig"));
defineGlobal("rim", regex => new RegExp(regex, "im"));
defineGlobal("rgm", regex => new RegExp(regex, "gm"));
defineGlobal("rigm", regex => new RegExp(regex, "igm"));



// common extra characters constants
defineGlobal("lt", "<");
defineGlobal("gt", ">");
defineGlobal("ab", _global.lt + _global.gt);
defineGlobal("cb", _global.gt + _global.lt);
defineGlobal("ti", "~");
defineGlobal("ep", "!");
defineGlobal("em", _global.ep);
defineGlobal("at", "@");
defineGlobal("ds", "$");
defineGlobal("ms", "&");
defineGlobal("ps", "%");
defineGlobal("cf", "^");
defineGlobal("ak", "*");
defineGlobal("mp", _global.ak);
defineGlobal("ad", "+");
defineGlobal("add", _global.ad + _global.ad);
defineGlobal("hp", "-");
defineGlobal("sr", _global.hp);
defineGlobal("srr", _global.sr + _global.sr);
defineGlobal("us", "_");
defineGlobal("eq", "=");
defineGlobal("vl", "|");
defineGlobal("bs", "\\");
defineGlobal("ss", "/");
defineGlobal("dv", _global.ss);
defineGlobal("qm", "?");
defineGlobal("nl", _global.ep + _global.eq);
defineGlobal("le", _global.lt + _global.eq);
defineGlobal("ge", _global.gt + _global.eq);
defineGlobal("fa", _global.ad + _global.eq);
defineGlobal("fs", _global.sr + _global.eq);
defineGlobal("fm", _global.mp + _global.eq);
defineGlobal("fd", _global.dv + _global.eq);
defineGlobal("sq", "'");
defineGlobal("dq", '"');
defineGlobal("gv", '`');
defineGlobal("cl", ":");
defineGlobal("sc", ";");
defineGlobal("cm", ",");
defineGlobal("es", "");
defineGlobal("l", _global.cm);
defineGlobal("s", " ");
defineGlobal("i", "#");
defineGlobal("d", ".");

defineGlobal("cr", "\r");
defineGlobal("lf", "\n");
defineGlobal("crlf", _global.cr + _global.lf);
defineGlobal("lfcr", _global.lf + _global.cr);
defineGlobal("tab", "\t");

defineGlobal("ecr", "\\r");
defineGlobal("elf", "\\n");
defineGlobal("ecrlf", _global.ecr + _global.elf);
defineGlobal("elfcr", _global.elf + _global.ecr);
defineGlobal("etab", "\\t");

