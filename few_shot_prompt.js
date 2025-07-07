function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

// Example usage:
// console.log(formatDate("2025-07-07")); // "07/07/2025"
// console.log(formatDate("2024-12-25")); // "25/12/2024"