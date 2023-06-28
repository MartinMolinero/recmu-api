const {genericPluralize} = require('../genericUtils');

describe('genericUtils', () => {
    it('should pluralize a term', () => {
        expect(genericPluralize('plant')).toEqual('plants')
    })
    it('should not pluralize if term is empty', () => {
        expect(genericPluralize()).toEqual('');
    })
})