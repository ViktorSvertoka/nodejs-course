const mult = require('./mult');

test('should multiply 5 and 10 and return 50', () => {
    expect(mult(5, 10)).toBe(50);
});
