import * as Util from './GeneralUtil'

describe('Testing Helper Functions', () => {
    test('comparing two strings in ascending, case-insensitive order', () => {
        // single char
        expect(Util.compareStrings('a', 'a')).toBe(0);
        expect(Util.compareStrings('a', 'b')).toBe(-1);
        expect(Util.compareStrings('b', 'a')).toBe(1);
        // case insensitive
        expect(Util.compareStrings('B', 'a')).toBe(1);
        // multiple chars
        expect(Util.compareStrings('ab', 'ac')).toBe(-1);
        // empty
        expect(Util.compareStrings('', 'ac')).toBe(-1);
    })
});