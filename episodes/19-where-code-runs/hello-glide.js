/**
 * @author Jitendra Zaa
 * Episode 19: a variable, an object and a function, run on the server.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 */

// A variable: a labelled box holding a value.
var daysOut = 14;

// An object: one rig, described by labelled values.
var rig = {
    name: 'Oscilloscope 1',
    state: 'available'
};

// A function: a named recipe. It takes a rig and a number and gives back a sentence.
function describe(aRig, days) {
    return aRig.name + ' is ' + aRig.state + ' and can be lent for ' + days + ' days';
}

// gs.info writes the sentence to the server's system log.
gs.info(describe(rig, daysOut));
