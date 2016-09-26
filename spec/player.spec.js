describe('player', function() {
	beforeAll(function() {
		console.log('\n.........player Spec.........');
	});

	beforeEach(function() {
		john = player('john');
	});

	describe('when given a name string', () => {
		it('retuns an object with that name', function() {
			expect(player('john')).toBeObject();
		});
	});
	describe('name(player)', function() {
		it('retrievs the name attribute', function() {
			expect(player.getName(john)).toBe('john');
		});
	});
});