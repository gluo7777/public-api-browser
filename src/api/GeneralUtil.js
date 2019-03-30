/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 */
export function compareStrings(s1, s2) {
    let a = s1.toLowerCase(), b = s2.toLowerCase();
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}
