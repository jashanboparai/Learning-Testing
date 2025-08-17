// if aba, then it is a palindrome

const { isPalindrome } = require("./tdd");


describe('isPalindrome', () => {
    it('should return true for "aba"', () => {
        expect(isPalindrome('aba')).toBe(true);
    });
    
    it('should return false for "abc"', () => {
        expect(isPalindrome('abc')).toBe(false);
    });
    
    it('should return true for "a"', () => {
        expect(isPalindrome('a')).toBe(true);
    });
    
    it('should return null for non-string or non-number input', () => {
        expect(isPalindrome({})).toBeNull();
        expect(isPalindrome([])).toBeNull();
        expect(isPalindrome(null)).toBeNull();
        expect(isPalindrome(undefined)).toBeNull();
    });
    
    it('should return true for -121', () => {
        expect(isPalindrome(-121)).toBe(true);
    });
    
    it('should return null for strings longer than 10 characters', () => {
        expect(isPalindrome('abcdefghijk')).toBeNull();
    });

    it('should return true for a palindrome with mixed case', () => {
        expect(isPalindrome('Aba')).toBe(true);
    });

    it('should return false for a non-palindrome with mixed case', () => {
        expect(isPalindrome('Abc')).toBe(false);
    });

    it('should ignore the whitespace in the input', () => {
        expect(isPalindrome(' aba ')).toBe(true);
        expect(isPalindrome(' abc ')).toBe(false);
    });

    it('if multipile args are passed, then it should execute the first one', () => {
        expect(isPalindrome('aba', 'abc')).toBe(true);
    })
})

