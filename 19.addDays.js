function addDays(initialDate, daysCount) {

    return new Date(new Date(initialDate).setDate(new Date(initialDate).getDate() + daysCount));
}