/**
    Example test generator ported from the Dada engine examples 
*/
"use strict";
const pep = require('../index');

const tvHackerQuip = pep.declare(() =>
    pep.seq(
        exlaimation,
        ' ',
        pep.choice(
            pep.seq('The ' , subject, " is ", somethingBad, "!"),
            pep.seq(evilDoer, ' ', doingSomthingBad, " the ", target, "!")
            )));

const evilDoer = pep.choice("She's", "He's", "They're");

const subject = pep.choice('CPU', 'HTML', 'GUI', 'IPv6', 'file system', 'ACL');

const somethingBad = pep.choice('on fire', 'doxxed', 'SQL injected', 'double encrypted');

const doingSomthingBad = pep.choice('pinging', 'ROT13ing', 'seg faulting', 'doxxing', 'DDOSing');

const target = pep.choice('NSA', 'CIA', 'FBI', 'mainframe', 'shell', 'cloud');

const exlaimation = pep.seq(
    pep.choice('BLARK', 'ARG', 'BARF', 'GROK', 'ACK'),
    pep.many1('!'));

for (var i = 0; i < 10; ++i)
    console.log(pep.run(tvHackerQuip))