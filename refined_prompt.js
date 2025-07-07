/**
 * Converts a given string to camelCase format.
 *
 * The function handles strings with spaces, hyphens, and underscores as word separators.
 * It removes special characters (except spaces, hyphens, and underscores), lowercases the first word,
 * and capitalizes the first letter of each subsequent word, joining them together.
 *
 * @param {string} input - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string. Returns an empty string if the input is empty or contains only separators.
 * @throws {Error} Throws an error if the input is null, undefined, or not a string.
 *
 * @example
 * toCamelCase("first name");      // returns "firstName"
 * toCamelCase("user_id");         // returns "userId"
 * toCamelCase("SCREEN_NAME");     // returns "screenName"
 * toCamelCase("mobile-number");   // returns "mobileNumber"
 * toCamelCase("");                // returns ""
 * toCamelCase(null);              // throws Error
 */
/**
 * Converts a given string to dot.case format.
 *
 * The function handles strings with spaces, hyphens, and underscores as word separators.
 * It removes special characters (except spaces, hyphens, and underscores), lowercases all words,
 * and joins them with dots.
 *
 * @param {string} input - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string. Returns an empty string if the input is empty or contains only separators.
 * @throws {Error} Throws an error if the input is null, undefined, or not a string.
 *
 * @example
 * toDotCase("first name");      // returns "first.name"
 * toDotCase("user_id");         // returns "user.id"
 * toDotCase("SCREEN_NAME");     // returns "screen.name"
 * toDotCase("mobile-number");   // returns "mobile.number"
 * toDotCase("");                // returns ""
 * toDotCase(null);              // throws Error
 */
function toCamelCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (input.trim() === '') {
        return '';
    }

    // Remove special characters except spaces, hyphens, and underscores (to handle separators first)
    let cleaned = input.replace(/[^a-zA-Z0-9 _-]/g, '');

    // Split by space, hyphen, or underscore
    let words = cleaned
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;
// Example test cases
console.log(toCamelCase("first name"));       // firstName
console.log(toCamelCase("user_id"));          // userId
console.log(toCamelCase("SCREEN_NAME"));      // screenName
console.log(toCamelCase("mobile-number"));    // mobileNumber
console.log(toCamelCase(""));                 // ""
console.log(toCamelCase(null));               // Error
/**
 * Converts a given string to dot.case format.
 *
 * The function handles strings with spaces, hyphens, and underscores as word separators.
 * It removes special characters (except spaces, hyphens, and underscores),
 * converts all characters to lowercase, and joins the words with dots.
 *
 * @param {string} input - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string. Returns an empty string if the input is empty or contains only spaces.
 * @throws {Error} Throws an error if the input is null, undefined, or not a string.
 *
 * @example
 * toDotCase("first name");       // returns "first.name"
 * toDotCase("user_id");          // returns "user.id"
 * toDotCase("SCREEN_NAME");      // returns "screen.name"
 * toDotCase("mobile-number");    // returns "mobile.number"
 */

function toDotCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (input.trim() === '') {
        return '';
    }

    // Remove special characters except spaces, hyphens, and underscores (to handle separators first)
    let cleaned = input.replace(/[^a-zA-Z0-9 _-]/g, '');

    // Split by space, hyphen, or underscore
    let words = cleaned
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        return '';
    }

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example test cases
console.log(toDotCase("first name"));       // first.name
console.log(toDotCase("user_id"));          // user.id
console.log(toDotCase("SCREEN_NAME"));      // screen.name
console.log(toDotCase("mobile-number"));    // mobile.number
console.log(toDotCase(""));                 // ""
try { console.log(toDotCase(null)); } catch (e) { console.log(e.message); } // Error