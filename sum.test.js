const sum =  require('./sum');

test('4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
});
