function getMonthOfTheYear(date) {
    return date.toLocaleString('default', {month: 'long'});
}