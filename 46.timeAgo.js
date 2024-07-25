function timeAgo(date1, date2) {
    // Ensure date1 is earlier than date2
    if (date1 > date2) {
        [date1, date2] = [date2, date1];
    }
    
    const timePassedInMs = date2 - date1;

    const seconds = Math.floor(timePassedInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return "just now";
    } else if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (days < 30) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (months < 12) {
        return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
        return "more than a year ago";
    }
}