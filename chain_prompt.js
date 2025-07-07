/**
 * Converts a given string to kebab-case format.
 *
 * The function handles camelCase, PascalCase, snake_case, and strings with spaces or hyphens.
 * It transforms the string into lowercase, replaces word boundaries with hyphens,
 * removes special characters, and ensures no leading or trailing hyphens remain.
 *
 * @param {string} input - The input string to convert.
 * @returns {string} - The formatted kebab-case string.
 * @throws {Error} - Throws an error if the input is not a non-empty string.
 *
 * @example
 * toKebabCase("firstName");       // "first-name"
 * toKebabCase("user_id");         // "user-id"
 * toKebabCase("SCREEN_NAME");     // "screen-name"
 * toKebabCase("mobile-number");   // "mobile-number"
 */
function toKebabCase(input) {
  if (typeof input !== 'string' || !input.trim()) {
    throw new Error('Input must be a non-empty string');
  }

  let kebab = input
    // Convert camelCase or PascalCase to kebab-case
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // Replace underscores and spaces with hyphens
    .replace(/[\s_]+/g, '-')
    // Convert to lowercase
    .toLowerCase()
    // Remove non-alphanumeric or hyphen characters
    .replace(/[^a-z0-9-]/g, '')
    // Replace multiple hyphens with single one
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');

  return kebab;
}

// ✅ Test Cases

console.log(toKebabCase("firstName"));        // "first-name"
console.log(toKebabCase("user_id"));          // "user-id"
console.log(toKebabCase("SCREEN_NAME"));      // "screen-name"
console.log(toKebabCase("mobile-number"));    // "mobile-number"
console.log(toKebabCase("  Hello   World ")); // "hello-world"

try {
  console.log(toKebabCase(""));               // Error
} catch (e) {
  console.log(e.message);
}

try {
  console.log(toKebabCase(null));             // Error
} catch (e) {
  console.log(e.message);
}
