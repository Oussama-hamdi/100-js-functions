function getMillisecondsBetween(date1, date2) {
    return Math.abs(new Date(date1).getTime() - new Date(date2).getTime());
}