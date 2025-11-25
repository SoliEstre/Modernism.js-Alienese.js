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
// v0.4.2 / release 2025.11.25
// 
// * Must be loaded modernism.js before this script.
// 
// Author: Estre Soliette
// Established: 2025.01.05 / Extracted: 2025.03.15



// primitive types alias constant
const _g = _global ?? (typeof globalThis !== 'undefined') ? globalThis : (typeof window !== 'undefined' ? window : global);
const dfg = defineGlobal ?? ((name, value) => {
    Object.defineProperty(_g, name, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: false
    });
});

// Auto-load modernism in Node.js environment
if (typeof require !== 'undefined' && typeof module !== 'undefined') {
    try { require("modernism"); } catch (e) { }
}

dfg("U", UNDEFINED);
dfg("N", NULL);
dfg("T", TRUE);
dfg("F", FALSE);

dfg("u", _g.undefined);
dfg("n", _g.null);
dfg("t", _g.true);
dfg("f", _g.false);

// end point assigner constant
dfg("eoo", _g.u);
dfg("eoa", _g.u);

// prototype of primitive types alias constant
dfg("FNC", _g.FUNCTION);
dfg("BLE", _g.BOOLEAN);
dfg("STR", _g.STRING);
dfg("SYM", _g.SYMBOL);
dfg("NUM", _g.NUMBER);
dfg("BIG", _g.BIGINT);
dfg("OBJ", _g.OBJECT);

dfg("fun", Function);
dfg("ble", Boolean);
dfg("str", String);
dfg("sym", Symbol);
dfg("num", Number);
dfg("big", BigInt);
dfg("obj", Object);

// class names of primitive types constant
dfg("FN", _g._FUNCTION);
dfg("BL", _g._BOOLEAN);
dfg("ST", _g._STRING);
dfg("SY", _g._SYMBOL);
dfg("NO", _g._NUMBER);
dfg("BI", _g._BIG_INT);
dfg("OJ", _g._OBJECT);

dfg("fn", Function);
dfg("bl", Boolean);
dfg("sg", String);
dfg("sl", Symbol);
dfg("no", Number);
dfg("bi", BigInt);
dfg("oj", Object);


// frequent object types alias constant
dfg("DT", _g._DATE);

dfg("RA", _g._ARRAY);
dfg("SA", _g._SET);
dfg("MA", _g._MAP);

dfg("dt", Date);

dfg("ra", Array);
dfg("sa", Set);
dfg("ma", Map);


// frequent assign types alias constant
dfg("def", _g.DEFAULT);
dfg("fin", _g.FINALLY);


// frequent object types empty object issuer alias constant
dfg("x", {
    get a() { return new Array(); },
    get d() { return new Date(); },
    get t() { return new Set(); },
    get p() { return new Map(); },
});


// bypass constant
dfg("ifx", _g.executeIf);
dfg("itx", _g.executeWhen);

dfg("ifr", _g.ifReturn);

dfg("roen", _g.ifReturnOrEmptyNumber);
dfg("roes", _g.ifReturnOrEmptyString);
dfg("roea", _g.ifReturnOrEmptyArray);
dfg("roeo", _g.ifReturnOrEmptyObject);

dfg("val", _g.valet);


// common process shortcut constant
dfg("f02b", _g.forZeroToBefore);
dfg("f02r", _g.forZeroToReach);

dfg("f20", _g.forToZeroFrom);
dfg("f21", _g.forToPrimeFrom);

dfg("ff", _g.forForward);
dfg("fb", _g.forBackward);

dfg("fi", _g.forin);
dfg("fiv", _g.forinner);

dfg("fo", _g.forof);
dfg("fkv", _g.forkv);

dfg("w", _g.whileIn);
dfg("dw", _g.doWhileIn);


// meaning comparator constant
dfg("to", _g.typeOf);

dfg("tm", _g.typeMatch);

dfg("tu", _g.typeUndefined);
dfg("tf", _g.typeFunction);
dfg("tb", _g.typeBoolean);
dfg("ts", _g.typeString);
dfg("ty", _g.typeSymbol);
dfg("tn", _g.typeNumber);
dfg("tg", _g.typeBigint);
dfg("tj", _g.typeObject);

dfg("im", _g.instanceMatch);
dfg("io", _g.isObject);
dfg("ia", _g.isArray);
dfg("ioa", _g.isArray);
dfg("ios", _g.isString);
dfg("ion", _g.isNumber);
dfg("iot", _g.isSet);
dfg("iop", _g.isMap);

dfg("xv", _g.exact);
dfg("nxv", _g.notExact);
dfg("xm", _g.exactMatches);
dfg("nx", _g.notExactMatches);

dfg("ev", _g.equals);
dfg("nev", _g.notEquals);
dfg("sm", _g.same);
dfg("df", _g.diffrent);

dfg("gtv", _g.getherThan);
dfg("ltv", _g.lessThan);
dfg("ngt", _g.notGetherThan);
dfg("nlt", _g.notLessThan);

dfg("gev", _g.getherOrEquals);
dfg("lev", _g.lessOrEquels);
dfg("nge", _g.notGetherAndEquals);
dfg("nle", _g.notLessAndEquals);

dfg("fc", _g.isFalseCase);
dfg("nfc", _g.isTrueCase);

dfg("xu", _g.isUndefined);
dfg("xn", _g.isNull);
dfg("xt", _g.isExactTrue);
dfg("xf", _g.isExactFalse);

dfg("nxu", _g.isNotUndefined);
dfg("nxn", _g.isNotNull);
dfg("nxt", _g.isNotTrue);
dfg("nxf", _g.isNotFalse);

dfg("en", _g.isNully);
dfg("et", _g.isTruely);
dfg("ef", _g.isFalsely);
dfg("ee", _g.isEmpty);

dfg("nn", _g.isNotNully);
dfg("nt", _g.isNotTruely);
dfg("nf", _g.isNotFalsely);
dfg("ne", _g.isNotEmpty);

dfg("noe", _g.isNullOrEmpty);
dfg("nne", _g.isNotNullAndEmpty);


// quick execute by conditions constant
dfg("inoe", _g.ifNullOrEmpty);
dfg("inne", _g.ifNotNullAndEmpty);


// do and return inline double takes
dfg("dr", _g.doAndReturn);
dfg("drx", _g.doAndReturnByExecute);


// object method shortcut constant
dfg("ok", _g.keysOf);
dfg("ov", _g.valuesOf);
dfg("oe", _g.entriesOf);
dfg("oc", _g.countOf);

dfg("occ", _g.checkCount);


// match case constant
dfg("mc", _g.matchCase);
dfg("ec", _g.equalCase);
dfg("xc", _g.exactCase);
dfg("tc", _g.typeCase);
dfg("cc", _g.classCase);
dfg("kc", _g.kindCase);


/** variable data copy */
dfg("cp", _g.copy);
dfg("mk", _g.mock);
dfg("mm", _g.mimic);
dfg("tw", _g.twin);
dfg("cn", _g.clone);

dfg("pc", _g.patch);
dfg("ow", _g.overwrite);
dfg("tk", _g.takeover);
dfg("aq", _g.acquire);
dfg("ih", _g.inherit);

dfg("rv", _g.revert);


/** run handle */
dfg("pq", _g.postQueue);
dfg("pd", _g.postDelayed);
dfg("pp", _g.postPromise);
dfg("pb", _g.postBonded);
dfg("ppq", _g.postPromiseQueue);
dfg("paq", _g.postAsyncQueue);
dfg("pwq", _g.postAwaitQueue);
dfg("pfq", _g.postFrameQueue);
dfg("pfp", _g.postFramePromise);


// Object function shortcut constants
dfg("dsp", _g.defineStaticProperty);
dfg("dp", _g.defineProperty);
dfg("dpx", _g.definePropertyPlex);
dfg("dspgs", _g.defineStaticGetterAndSetter);
dfg("dpgs", _g.defineGetterAndSetter);
dfg("dpgsx", _g.defineGetterAndSetterPlex);


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

definePropertyPlex("ee", function (process = it => it, ornot = it => it, numberEmptyMatch = 0) { return _g.isEmpty(this.it, numberEmptyMatch) ? process(this.it) : ornot(this.it); });
definePropertyPlex("ne", function (process = it => it, ornot = it => it, numberEmptyMatch = 0) { return _g.isNotEmpty(this.it, numberEmptyMatch) ? process(this.it) : ornot(this.it); });

definePropertyPlex("dr", function (does = (it, args) => { }, returns, args = []) { return _g.doAndReturn(does, returns, [this.it, ...args]); });
definePropertyPlex("drx", function (does = (it, args) => { }, forReturns, args = []) { return _g.doAndReturnByExecute(does, forReturns, [this.it, ...args]); });

defineGetterAndSetter(Object, "ok", function () { return _g.keysOf(this.it); });
defineGetterAndSetter(Object, "ov", function () { return _g.valuesOf(this.it); });
defineGetterAndSetter(Object, "oe", function () { return _g.entriesOf(this.it); });
defineGetterAndSetter(Object, "oc", function () { return _g.countOf(this.it); });
defineGetterAndSetter(Object, "occ", function () { return _g.checkCount(this.it, (k, v) => true); });

defineProperty(Object, "fk", function (work = key => { return false; }) { return _g.forof(this.it.ways, work); });
defineProperty(Object, "fv", function (work = value => { return false; }) { return _g.forof(this.it.looks, work); });
defineProperty(Object, "fe", function (work = (key, value) => { return false; }) { return _g.forkv(this.it.entire, work); });
defineProperty(Object, "fkv", function (work = (key, value) => { return false; }) { return _g.forkv(this.it.entire, work); });

defineProperty(Object, "cp", function (dataOnly = true, primitiveOnly = false, recusive = true) { return _g.copy(this, dataOnly, primitiveOnly, recusive); });
defineProperty(Object, "pc", function (from, dataOnly = true, primitiveOnly = false, recusive = true, append = false) { return _g.patch(this.it, from, dataOnly, primitiveOnly, recusive, append); });
defineProperty(Object, "rv", function (from, dataOnly = true, primitiveOnly = false, recusive = true, exceptNew = false) { return _g.revert(this.it, from, dataOnly, primitiveOnly, recusive, exceptNew); });

definePropertyPlex("ifeq", function (that, process = it => it, ornot = it => { }) { return this.let(it => _g.executeIf(it == that, process, [it], ornot)); });
definePropertyPlex("ifneq", function (that, process = it => it, ornot = it => { }) { return this.let(it => _g.executeIf(it != that, process, [it], ornot)); });



// Regex builder alias
dfg("rx", (regex, flags) => new RegExp(regex, flags));
dfg("reg", _g.rx);
dfg("ri", regex => new RegExp(regex, "i"));
dfg("rg", regex => new RegExp(regex, "g"));
dfg("rm", regex => new RegExp(regex, "m"));
dfg("rig", regex => new RegExp(regex, "ig"));
dfg("rim", regex => new RegExp(regex, "im"));
dfg("rgm", regex => new RegExp(regex, "gm"));
dfg("rigm", regex => new RegExp(regex, "igm"));



// common extra characters constants
dfg("lt", "<");
dfg("gt", ">");
dfg("ab", _g.lt + _g.gt);
dfg("cb", _g.gt + _g.lt);
dfg("ti", "~");
dfg("ep", "!");
dfg("em", _g.ep);
dfg("at", "@");
dfg("ds", "$");
dfg("ms", "&");
dfg("ps", "%");
dfg("cf", "^");
dfg("ak", "*");
dfg("mp", _g.ak);
dfg("ad", "+");
dfg("add", _g.ad + _g.ad);
dfg("hp", "-");
dfg("sr", _g.hp);
dfg("srr", _g.sr + _g.sr);
dfg("us", "_");
dfg("eq", "=");
dfg("vl", "|");
dfg("bs", "\\");
dfg("ss", "/");
dfg("dv", _g.ss);
dfg("qm", "?");
dfg("nl", _g.ep + _g.eq);
dfg("le", _g.lt + _g.eq);
dfg("ge", _g.gt + _g.eq);
dfg("fa", _g.ad + _g.eq);
dfg("fs", _g.sr + _g.eq);
dfg("fm", _g.mp + _g.eq);
dfg("fd", _g.dv + _g.eq);
dfg("sq", "'");
dfg("dq", '"');
dfg("gv", '`');
dfg("cl", ":");
dfg("sc", ";");
dfg("cm", ",");
dfg("es", "");
dfg("l", _g.cm);
dfg("s", " ");
dfg("i", "#");
dfg("d", ".");

dfg("cr", "\r");
dfg("lf", "\n");
dfg("crlf", _g.cr + _g.lf);
dfg("lfcr", _g.lf + _g.cr);
dfg("tab", "\t");

dfg("ecr", "\\r");
dfg("elf", "\\n");
dfg("ecrlf", _g.ecr + _g.elf);
dfg("elfcr", _g.elf + _g.ecr);
dfg("etab", "\\t");

