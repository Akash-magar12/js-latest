let str = "Aakash";
let sur = " magar";
const str2 = "              ";

// 1. .length (Pro-tip: This is technically a Property, not a Method, so it has no parentheses!)
// USE: Counts the total number of characters in the string.
// RETURNS: A Number (6)
const length = str.length;

// 2. .toUpperCase()
// USE: Converts every letter to uppercase.
// RETURNS: A new String ("AAKASH")
const upper = str.toUpperCase();

// 3. .toLowerCase()
// USE: Converts every letter to lowercase.
// RETURNS: A new String ("aakash")
const lower = str.toLowerCase();

// 4. .trim()
// USE: Removes blank spaces from the very beginning and very end of a string.
// RETURNS: A new String ("") - It emptied your str2 completely!
const trim = str2.trim();

// 5. .concat()
// USE: Glues two or more strings together (though most devs just use `+` or `${}` today).
// RETURNS: A new String ("Aakash magar")
const concat = str.concat(sur);

// 6. .includes()
// USE: Checks if a specific sequence of letters exists anywhere inside the string. It is perfectly case-sensitive!
// RETURNS: A Boolean. (false) -> Because "Aakash" has an extra 'a', it does not contain the exact sequence "Ak".
const inclu = str.includes("Ak");

// 7. .indexOf()
// USE: Scans the string left-to-right and tells you the exact position number where it first finds that letter.
// RETURNS: A Number. (0) -> Because capital "A" is at the very first position. If it couldn't find it, it would return -1.
const index = str.indexOf("A");

// 8. .charAt()
// USE: You give it a position number, and it tells you what letter lives there. (Similar to using str[0]).
// RETURNS: A new String ("A")
const char = str.charAt(0);

// 9. .replace()
// USE: Finds the VERY FIRST match of a letter/word and swaps it with a new one.
// RETURNS: A new String ("Azkash") -> Notice it only changed the first lowercase 'a', not the second one!
const rep = str.replace("a", "z");

// 10. .replaceAll()
// USE: Finds EVERY match of a letter/word globally and swaps them all.
// RETURNS: A new String ("Azkzsh") -> It caught both lowercase 'a's!
const repAll = str.replaceAll("a", "z");

// 11. .slice()
// USE: Extracts a chunk of the string. Starts at the first number (index 1), and stops RIGHT BEFORE the second number (index 4).
// RETURNS: A new String ("aka") -> Grabs index 1, 2, and 3.
const sliced = str.slice(1,4);

// 12. .split()
// USE: Chops the string into pieces based on the separator you give it. By giving it an empty string (''), it chops between every single letter.
// RETURNS: An Array of strings (["A", "a", "k", "a", "s", "h"])
const splill = str.split('');

console.log(splill);