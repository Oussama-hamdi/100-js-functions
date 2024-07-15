function getDaysInMonth(date) {
    let firstDayOfNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let lastDayOfTheCurrentMonth = new Date(firstDayOfNextMonth - 1);
 
    return lastDayOfTheCurrentMonth.getDate();
} 