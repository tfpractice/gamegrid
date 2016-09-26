describe('mutableGrid', function() {
    beforeAll(function() {
        console.log('\n.........mutableGrid Spec.........');
    });

    beforeEach(function() {
        // john = mutableGrid('john');
    });

    describe('when given a name string', () => {
        it('retuns an object with that name', function() {
            expect(mutableGrid()).toBeObject();
        });
    });
    describe('name(mutableGrid)', function() {
        it('retrievs the name attribute', function() {
            // expect(mutableGrid.getName(john)).toBe('john');
        });
    });
});