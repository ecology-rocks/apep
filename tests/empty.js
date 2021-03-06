"use strict";
const pep = require('../index');
const assert = require('assert');

describe('empty', () => {
    
    it('should yield no values', () => {
        const p = pep.empty;
        const i = p.begin().next();
        assert.strictEqual(true, i.done);
        assert.strictEqual(undefined, i.value);
        
        assert.strictEqual('', pep.empty.run())
    });
    
    it('should be ignored in sequences', () => {
        const p = pep.seq('a', pep.empty, 'c');
        assert.deepStrictEqual(['a', 'c'], Array.from(p.begin()));
    });
});
