/**
 * Format date to localized string (e.g., "Jan 15")
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

/**
 * Get day and month parts separately from date string
 * @param {string} dateString - ISO date string
 * @returns {Object} Object with day and month properties
 */
export const getDateParts = (dateString) => {
    const date = new Date(dateString);
    return {
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
    };
};
