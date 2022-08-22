const domainName = require('.');

test('Test 1', () => {
    expect(domainName('http://github.com/carbonfive/raygun')).toBe('github');
});

test('Test 2', () => {
    expect(domainName('https://www.google.com/')).toBe('google');
});

test('Test 3', () => {
    expect(domainName('https://www.google.co.jp')).toBe('google');
});

test('Test 4 ', () => {
    expect(domainName('http://github.com/carbonfive/raygun')).toBe('github');
});
