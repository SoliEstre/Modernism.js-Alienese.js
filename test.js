try {
    console.log("Loading alienese...");
    require('alienese');

    console.log("Checking global variables...");
    if (global.UNDEFINED === "undefined") {
        console.log("PASS: modernism loaded (UNDEFINED exists)");
    } else {
        console.error("FAIL: modernism NOT loaded");
    }

    if (global.U === "undefined") {
        console.log("PASS: alienese loaded (U exists)");
    } else {
        console.error("FAIL: alienese NOT loaded");
    }

    console.log("Checking prototype extensions...");
    if (typeof Object.prototype.copy === 'function') {
        console.log("PASS: Object.prototype.copy exists");
    } else {
        console.error("FAIL: Object.prototype.copy missing");
    }

} catch (e) {
    console.error("ERROR:", e);
}
